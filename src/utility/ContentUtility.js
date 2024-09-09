const json = require("../../secret.json");
const fs = require("fs");

const personalProjectQuery = `{
    personalProjectsCollection
    {
      items {
        projectTitle
        projectType
        projectGitHub
        projectStartDate
        projectEndDate
        projectTechnology
        projectAchievements {
          json
        }
      }
    }
  }`;

const workExperienceQuery = `{
  workExperienceCollection {
    items{
      jobTitle
      jobCompany
      jobStartDate
      jobEndDate
      jobLocation
      jobTechnology
      jobLinkedIn
      jobAchievements {
        json
      }
    }
  }
}`;
async function getContentPersonalProjects() {
  const personalProjectData = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${json.contenful_space_id}/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${json.contenful_access_key}`,
      },
      body: JSON.stringify({ query: personalProjectQuery }),
    }
  )
    .then((response) => response.json())
    .then(({ data, errors }) => {
      if (errors) {
        console.error(errors);
      }
      return data.personalProjectsCollection.items;
    });
  return personalProjectData;
}

async function getContentWorkExperience() {
  const workExperienceData = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${json.contenful_space_id}/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${json.contenful_access_key}`,
      },
      body: JSON.stringify({ query: workExperienceQuery }),
    }
  )
    .then((response) => response.json())
    .then(({ data, errors }) => {
      if (errors) {
        console.error(errors);
      }
      return data.workExperienceCollection.items;
    });
  return workExperienceData;
}

async function getAndSaveContent() {
  const personalProjectData = await getContentPersonalProjects();
  const workExperienceData = await getContentWorkExperience();

  personalProjectData.forEach((element) => {
    element.projectAchievements = convertAchievement(
      element?.projectAchievements?.json
    );
  });

  workExperienceData.forEach((element) => {
    element.jobAchievements = convertAchievement(
      element?.jobAchievements?.json
    );
  });

  const personalProjectJson = JSON.stringify({ personalProjectData }, null, 2);
  fs.writeFileSync("personalProjects.json", personalProjectJson);

  const workExperienceJson = JSON.stringify({ workExperienceData }, null, 2);
  fs.writeFileSync("workExperience.json", workExperienceJson);
}

function convertAchievement(achievement) {
  if (!achievement) {
    return [];
  }
  const content = achievement.content.map((node) =>
    node.content.map((node) => node.value)
  );
  return content.flat();
}
getAndSaveContent();
