import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "./common/navbar";
import Footer from "./common/footer";
import Logo from "./common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import "../styles/experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownloadButton from "../components/common/downloadButton";

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "experience");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Experience | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="experience" />
        <div className="content-wrapper">
          <div className="resume-logo-container">
            <div className="resume-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="resume-main-container">
            <div className="resume-title">
              <div className="resume-title-text">{INFO.experience.title}</div>
              <div className="resume-download-button">
                <DownloadButton target="_blank" />
              </div>
            </div>

            <div className="subtitle resume-subtitle">
              {INFO.experience.description}
            </div>

            <div className="resume-container">
              <div className="resume-wrapper">
                <div className="resume-card">
                  <div className="resume-card-container">
                    <div className="resume-card-header">
                      <div className="resume-card-icon">
                        <FontAwesomeIcon icon={faBriefcase} />
                      </div>
                      <div className="resume-card-title">Work</div>
                    </div>
                    <hr className="hr"></hr>
                    <div className="resume-card-body">
                      <div className="resume-card-text">
                        <div className="resume-works-body">
                          <div className="resume-work">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/tetramem-logo.png"
                              }
                              alt="Tetramem"
                              className="resume-work-image"
                            />
                            <div className="resume-work-title">
                              Hewlett Packard Enterprise
                            </div>
                            <div className="resume-work-subtitle">
                              Software Engineer Intern
                            </div>
                            <div className="resume-work-duration">
                              May 2023 - Aug 2023
                            </div>
                          </div>
                          <div className="resume-work-skills">
                            <strong>Skills:</strong> Python, React.js, MongoDB, Linux, RedFish Client API, Git
                          </div>
                          <div className="resume-work-details">
                            <ul className="resume-work-details-list">
                              <li>
                              Developed a full stack application which had multiple stages to it. Used redfishClient API which uses ILO to extract
                              the various hardware present on the servers and add it to a MongoDB database using Python.
                             
                              </li>
                              <li>
                              Created a cron job to refresh the database every night which will update as and when new servers are added.
                              </li>
                              <li>
                              Created a user interface in ReactJS which will be used to search for the hardware and view it.
                              </li>
                              <li>
                              Developed a backend in Flask and was responsible for creating various REST APIs calls involving login, changing IP
                              addresses for the cron job, searching in the database, etc.
                              </li>
                              <li>This project help increase the overall efficiency by 80%</li>
                              <li>Testing Nutanix + HPE servers to find faults in the hardware before production.</li>
                              <li>Won the 'Peoples Choice Award' for the best presented project</li>
                            </ul>
                          </div>

                          <div className="resume-work">
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/ti-logo.png"
                              }
                              alt="uhg"
                              className="resume-work-image"
                            />
                            <div className="resume-work-title">
                              Cognizant
                            </div>
                            <div className="resume-work-subtitle">
                              Programmer Analyst
                            </div>
                            <div className="resume-work-duration">
                              July 2021 - August 2022
                            </div>
                          </div>
                          <div className="resume-work-skills">
                            <strong>Skills:</strong> Python, Natural Language Processing, Convolution Neural Networks, HTML, CSS, Javascript
                          </div>

                          <div className="resume-work-details">
                            <ul className="resume-work-details-list">
                              <li>
                              Led a team of 5 to develop a “Missing Person Detection” web application using Python, Flask, Convolution Neural
                              Networks aiming to identify any missing person through a live video feed or by uploading an individual’s picture.
                              </li>
                              <li>
                              Spearheaded a team to design a “Sarcasm Detection” Sequential model using python language and Natural Language
                              Processing. Computed accuracy for the sarcasm detection model was over 85%.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Experience;
