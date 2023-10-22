import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date={"Aug 2023 - Oct 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Jr . Software Developer Intern
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Campus Credentials
            </h4>
            <p data-aos="fade-right">
              Actively developing web apps by using tech such as NextJS, Prisma, Tailwind etc
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Oct 2022 - Nov 2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Intern 
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              CodeCetra
            </h4>
            <p data-aos="fade-right">
              Owned the frontend development module.
              Coordinated with team to deliver requirements and planned the development and use cases for upcoming project.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Jan 2021 - Oct 2021"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Intern
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
             Renao Manufacturing Pvt Ltd, Bengaluru
            </h4>
            <p data-aos="fade-right">
            Worked on control panel module of heavy-duty industrial mixers by
            designing circuit diagrams, also worked on contactors, and double-speed induction 
            motors (single and three-phase).
           Achieved an 85% reduction in control panel development expenses by implementing strategic 
            outsourcing and fostering collaborative partnerships with vendors. 
            Worked on DTC and DTQ measures.</p> 

            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"June 2022 - July 2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
               Student
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              VLabsDev by IIT Bombay, Mumbai
            </h4>
            <p data-aos="fade-right">
              Worked on assignments under White belt on GitLab platform.
              <p>Worked closely with the IITB professor to improve the VLabs program for students.</p>
             Student lead for 3 weeks.
             
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Aug 2021 - Mar 2024"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Engineering Student
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              VIT, Mumbai
            </h4>
            <p data-aos="fade-right">
              Pursuing Bachelor in Electronics Engineering, 8.77 CGPA(7th Sem).
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"Aug 2018 - Mar 2021"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
             Diploma in Electronics Engineering
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Veermata Jijabai Technological Institute, Mumbai
            </h4>
            <p data-aos="fade-right">
              Studied Electronics Engineering and passed with 88.05%.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"March 2018"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student [SSC(Maharashtra Board)]
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
             Purushottam High School, Bandra
            </h4>
            <p data-aos="fade-right">
              Passed SSC exam with 89.80 %.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
