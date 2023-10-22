import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiNextdotjs,
  SiPrisma,
  SiOpenai,
  SiRedis,
  SiTmux,
  SiStripe,
  SiYoutube,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                  src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/10/AICompanionship_AIM.jpg"
                    alt="Ai Companion"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>AI Buddy</h2>
                <p>
                AI companions that you can chat with on a browser. It allows you to determine the personality 
                and backstory of your companion, uses vector database. It also provides some conversational 
                memory by keeping the conversation in a queue and including it in the prompt. It currently 
                contains companions on ChatGPT hosted on Replicate.

                </p>
                <div>
                  <SiTailwindcss/>
                  <SiPrisma/>
                  <SiNextdotjs />
                  <SiOpenai />
                  <SiRedis/>
                  <SiStripe/>
                </div>
                <div>
                  <a
                    href="https://netlify-ai.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/farhank5023/Netlify_AI"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>



          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://www.techasoft.com/blog/2021/01/1609606508.png"
                    alt="LMS"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Learning Management System</h2>
                <p>
                The Learning Management System (LMS) is a user-friendly platform designed to facilitate seamless interaction, collaboration, and knowledge acquisition. It offers a comprehensive environment for both educators and learners to revolutionize educational content delivery and management.
                </p>
                <div>
                <SiTailwindcss/>
                  <SiPrisma/>
                  <SiNextdotjs />
                  <SiTmux/>
                  <SiStripe/>
                </div>
                <div>
                  <a
                    href="https://lms-iota-gray.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/farhank5023/lms"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> 


          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://www.scnsoft.com/education-industry/elearning-portal/elearning-portals-cover-picture.svg" alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Course Generator</h2>
                <p>
                The Course Generator is an innovative project that leverages the power of ChatGPT and the YouTube API to curate a personalized selection of courses tailored to individual interests and learning objectives. This platform streamlines the process of discovering and accessing relevant educational content.
                </p>
                <div>
                <SiTailwindcss/>
                  <SiPrisma/>
                  <SiNextdotjs />
                  
                  <SiStripe/>
                  <SiYoutube/>
                  <SiOpenai/>
                  
                </div>
                <div>
                  <a
                    href="https://drive.google.com/file/d/1HUWZxKaaoUHRxtENSjBdWvMxWx4nF5hn/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View Video 
                    </span>
                  </a>
                  <a
                    href="https://github.com/farhank5023/course-generator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>



          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/dropbox-logo@2x.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2></h2>
                <p>
                  Backend API for a google drive like app built using NodeJS,
                  Express, Mongoose, MongoDB Atlas and AWS S3 for storage. CRUD
                  operations for users, files and folders.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://drive-system.herokuapp.com/user/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      URL for the API
                    </span>
                  </a>
                  <a
                    href="https://github.com/imbickydutta/file-system-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> 
          {/* <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/934WpdD/uniqlo-clone.png"
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Uniqlo Clone</h2>
                <p>
                  UNIQLO is a clothing apparel company, from Japan. They also
                  sell their products in online mode through their website. We
                  cloned their website.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://uniqlo-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/uniqlo-backend-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/KVBGkdy/FFD69103-C304-42-E8-BCCD-8836-AAEFEA9-C.jpg"
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>PulsePlus Clone</h2>
                <p>
                  PulsePlus is an E-commerce web application for online Buying
                  Medicines and Consult to Doctor and Book a near Testlab.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://pulseplus-clone.netlify.app/landing_page.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/www.pulseplus.in-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      
    </>
  );
};
