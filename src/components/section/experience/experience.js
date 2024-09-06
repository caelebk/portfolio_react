import React from "react";
import "./experience.scss";
import { BsGithub } from "react-icons/bs";

export default function Experience(props) {
  let experienceList;
  if (props?.experiences?.personalProjectData) {
    experienceList = props?.experiences?.personalProjectData?.map(
      (experience) => {
        return {
          title: experience.projectTitle,
          project: experience.projectType,
          git: experience.projectGitHub,
          tech: experience.projectTechnology,
          achievements: experience.projectAchievements,
        };
      }
    );
  } else if (props?.experiences?.workExperienceData) {
    experienceList = props?.experiences?.workExperienceData?.map(
      (experience) => {
        return {
          title: experience.jobTitle,
          company: experience.jobCompany,
          location: experience.jobLocation,
          tech: experience.jobTechnology,
          achievements: experience.jobAchievements,
        };
      }
    );
  }
  console.log(experienceList);
  return (
    <section
      className="experience"
      data-aos="fade-up"
      data-aos-anchor-placement={props.anchor}
    >
      <div className="experience-header">
        <h1 className="experience-title">{props.title}</h1>
      </div>
      <div className="experience-container">
        <ul className="experience-list">
          {experienceList.map((job) => {
            console.log(job);
            return (
              <li
                className="experience-item"
                data-aos="fade-up"
                key={job.company}
                data-aos-anchor-placement="top-bottom"
              >
                <div className="job-header-container">
                  <div className="job-header">
                    <span className="job-title">{job.title}</span>
                    {Boolean(job?.company) ? (
                      <span className="job-company">
                        <span className="highlight"> @ </span>
                        {job.company}
                      </span>
                    ) : undefined}
                    {Boolean(job?.project) ? (
                      <span>
                        <span className="highlight"> | </span>
                        {job.project}
                      </span>
                    ) : undefined}
                    {Boolean(job?.git) ? (
                      <a
                        href={job.git}
                        target="_blank"
                        rel="noreferrer"
                        className="link"
                      >
                        <BsGithub className="icon hvr-grow" />
                      </a>
                    ) : undefined}
                  </div>
                  <span className="job-date highlight">{job.date}</span>
                </div>
                <div className="tech-container">
                  <span className="tech-title highlight">Tech/Languages:</span>
                  <span className="tech"> {job.tech.join(", ")}</span>
                  {Boolean(job.location) ? (
                    <>
                      <br></br>
                      <span className="highlight"> Location: </span>
                      <span> {job.location} </span>
                    </>
                  ) : undefined}
                </div>
                <div className="job-container">
                  <ul className="job-list">
                    {job?.achievements?.map((achievement) => {
                      return (
                        <li
                          className="job-item"
                          key={achievement}
                          data-aos="fade-up"
                          data-aos-anchor-placement="center-bottom"
                        >
                          {achievement}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
