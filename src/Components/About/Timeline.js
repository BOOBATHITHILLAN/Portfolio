import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarRateIcon from "@mui/icons-material/StarRate";
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
      <div className='section mainsection'>
        <h2
          className='section__title'
          data-aos='fade-right'
        >
          My <span className='different'>Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date={"Mar 2023 - Present"}
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
            icon={<StarRateIcon/>}
          >
            <h3
              className='vertical-timeline-element-title'
              data-aos='fade-right'
            >
              Intern at GUVI Geek Network
            </h3>
            <h4
              className='vertical-timeline-element-subtitle'
              data-aos='fade-right'
            >
              Chennai (IITM Research Park)
            </h4>            
            <div style={{ textAlign: "left" }}>              
              <p>
                <span className='icons'>
                  <ExitToAppIcon />
                </span>
                Front end technologies including HTML, CSS, JavaScript,DOM,
                various frameworks such as Bootstrap and React js
              </p>
              <p>
                {" "}
                <span className='icons'>
                  <ExitToAppIcon />
                </span>
                Back end technologies including MySQL,MongoDB,Node js,Express js
              </p>
              <p>
                {" "}
                <span className='icons'>
                  <ExitToAppIcon />
                </span>
                API Testing with POSTMAN
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Nov 2022 - Mar 2023"}
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
            icon={<SchoolIcon/>}
          >
            <h3
              className='vertical-timeline-element-title'
              data-aos='fade-right'
            >
              Carrier Transition
            </h3>
            <h4
              className='vertical-timeline-element-subtitle'
              data-aos='fade-right'
            >
              Certified SAP MM power user
            </h4>
            <p data-aos='fade-right'>I was a Trainee at Srinivasa Academy.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date={"June-2019 - Nov-2022"}
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
              className='vertical-timeline-element-title'
              data-aos='fade-right'
            >
              Electrical Maintenance Engineer
            </h3>

            <p data-aos='fade-right'>
              <span className='icons'>
                <ExitToAppIcon />
              </span>
              Safeinfratech Pvt Ltd
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date={"Dec-2017 - May-2019"}
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
              className='vertical-timeline-element-title'
              data-aos='fade-right'
            >
              Junior Engineer
            </h3>

            <p data-aos='fade-right'>
              <span className='icons'>
                <ExitToAppIcon />
              </span>
              Hosur Steel Industries 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date={"May-2017 - Dec-2017"}
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
              className='vertical-timeline-element-title'
              data-aos='fade-right'
            >
              Electrical Maintenance Trainee
            </h3>

            <p data-aos='fade-right'>
              <span className='icons'>
                <ExitToAppIcon />
              </span>
              Rajsriya Automotive Pvt Ltd
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date={"2013 - 2017"}
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
              className='vertical-timeline-element-title'
              data-aos='fade-right'
            >
              Bachelor Degree (UG)
            </h3>
            <h4
              className='vertical-timeline-element-subtitle'
              data-aos='fade-right'
            >
              PSNA College Of Engineering And Technology, Dindigul(TN),
            </h4>
            <p data-aos='fade-right'>
            Electrical and Electronic's Engineering  with 74.4 Percentage
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date={"2011 - 2013"}
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
              className='vertical-timeline-element-title'
              data-aos='fade-right'
            >
              Student [HSC (BioMaths)]
            </h3>
            <h4
              className='vertical-timeline-element-subtitle'
              data-aos='fade-right'
            >
              Thambithottam Higher Secondary School, Dindigul(TN),
            </h4>
            <p data-aos='fade-right'>
              Studied 12th BioMaths and Passed with 84.4 Percentage
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date={"2010-2011"}
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
              className='vertical-timeline-element-title'
              data-aos='fade-right'
            >
              Student [SSLC]
            </h3>
            <h4
              className='vertical-timeline-element-subtitle'
              data-aos='fade-right'
            >
              Thambithottam Higher Secondary School, Dindigul(TN)
            </h4>
            <p data-aos='fade-right'>Studied 10th Passed with 85 Percentage.</p>
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
