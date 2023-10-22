import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import  profilePic  from "../../assets/dpp.png";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
      <div className="about_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="about_data">
        <h1 data-aos="fade-right" className="mobileHead">
         <span className="about__name">Farhan Khan</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
       
        Enthusiastic engineering student with a passion for research, eager to apply skills for a better future. Proficient in diverse technologies, actively seeking new learning opportunities. 
        </p>
        </div>
       

     
      </div>


      <div className="button-container">

      <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1Wg2P5xnLArc0NMQoQoVDsY0Sql3e5q2N/view?usp=sharing"
            );
          }}
        >
          Resume
        </button>

        <button className="btnExtra" onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1J96eFXobulXYAd6Gtimvn1voXg1k-on-/view?usp=sharing"
            );
          }}
        >Renao Journey</button>
      </div>
    

      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
