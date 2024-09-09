import React from "react";
import "./experience.scss";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Experience(props) {
  let experienceList;
  if (props?.experiences?.personalProjectData) {
    props.experiences.personalProjectData.sort((experience1, experience2) => {
      return (
        new Date(experience2.projectStartDate) -
        new Date(experience1.projectStartDate)
      );
    });
    experienceList = props?.experiences?.personalProjectData?.map(
      (experience) => {
        const startDate = new Date(
          experience.projectStartDate
        ).toLocaleDateString("en-US", { year: "numeric", month: "long" });
        const endDate = new Date(experience.projectEndDate).toLocaleDateString(
          "en-US",
          { year: "numeric", month: "long" }
        );
        const date = startDate && endDate ? startDate + " - " + endDate : null;
        return {
          title: experience.projectTitle,
          project: experience.projectType,
          link: experience.projectGitHub,
          tech: experience.projectTechnology,
          date: date,
          achievements: experience.projectAchievements,
        };
      }
    );
  } else if (props?.experiences?.workExperienceData) {
    props.experiences.workExperienceData.sort((experience1, experience2) => {
      return (
        new Date(experience2.jobStartDate) - new Date(experience1.jobEndDate)
      );
    });
    experienceList = props?.experiences?.workExperienceData?.map(
      (experience) => {
        const startDate = new Date(experience.jobStartDate).toLocaleDateString(
          "en-US",
          { year: "numeric", month: "long" }
        );
        const endDate = new Date(experience.jobEndDate).toLocaleDateString(
          "en-US",
          { year: "numeric", month: "long" }
        );
        const date = startDate && endDate ? startDate + " - " + endDate : null;
        return {
          title: experience.jobTitle,
          company: experience.jobCompany,
          location: experience.jobLocation,
          tech: experience.jobTechnology,
          date: date,
          link: experience.jobLinkedIn,
          achievements: experience.jobAchievements,
        };
      }
    );
  }
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
            return (
              <li
                className="experience-item"
                data-aos="fade-up"
                key={job.company}
                data-aos-anchor-placement="top-bottom"
              >
                <div className="job-header-container">
                  <div className="job-header">
                    {Boolean(job?.link) ? (
                      <span>
                        <a
                          href={job.link}
                          target="_blank"
                          rel="noreferrer"
                          className="link"
                        >
                          {Boolean(job?.project) ? (
                            <BsGithub className="icon hvr-grow" />
                          ) : (
                            <BsLinkedin className="icon hvr-grow" />
                          )}
                        </a>
                      </span>
                    ) : undefined}
                    <span className="job-title">{job.title}</span>
                    {Boolean(job?.company) ? (
                      <>
                        <span className="highlight separator"> @ </span>
                        <span> {job.company}</span>
                      </>
                    ) : undefined}
                    {Boolean(job?.project) ? (
                      <>
                        <span className="highlight separator"> | </span>
                        <span> {job.project}</span>
                      </>
                    ) : undefined}
                  </div>
                  <span className="job-date">{job.date}</span>
                </div>
                <div className="tech-container">
                  <div className="tech">
                    <span className="tech-title highlight">
                      Tech/Languages:
                    </span>
                    <span className="tech-used"> {job.tech.join(", ")}</span>
                  </div>
                  {Boolean(job.location) ? (
                    <div className="location">
                      <span className="highlight"> Location: </span>
                      <span> {job.location} </span>
                    </div>
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
                          <span className="job-item-content">
                            {achievement}
                          </span>
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
