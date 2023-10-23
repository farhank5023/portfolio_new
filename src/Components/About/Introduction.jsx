import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/profile.jpeg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            {/* <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div> */}
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Farhan Khan </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Mumbai, Maharashtra (India)
                </span>
                . I am pursuing my undergraduation in B.E (Electronics)
                from{" "}
                <span className="different">
                  VIT,Mumbai (MH)
                </span>
                
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Traveller{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Reader{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Cook{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Listener{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
