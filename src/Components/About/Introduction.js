import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { ThemeContext } from "../../Context/theme";
// import profilePic from "../../assets/img.JPG";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id='#about'>
        <div
          className='section'
          data-aos='fade-right'
        >
          <h2 className='section__title'>
            About <span className='different'>Me</span>
          </h2>
          <div className={"introduction " + themename}>
            {/* <div className='introduction_logocontainer'>
              <img
                src={profilePic}
                alt='Images'
              />
            </div> */}
            <div className='introduction_datacontainer'>
              <h4>
                Hi Everyone, My name is
                <span className='different'> Boobathi Thillan </span> and I am
                from{" "}
                <span className='different'>Dindigul, Tamil Nadu (India)</span>
              </h4>
              <br />
              <h4>
                A highly motivated and adaptable professional seeking to
                transition into a new career in the Software profession. I am
                eager to leverage my transferable skills and passion for the IT
                industry to make a positive impact in a new role. I am confident
                in my ability to excel in a new environment and contribute to
                the success of my team and organization. I am committed to
                continuous learning and development, and excited to embrace new
                challenges and opportunities in my career transition.
              </h4>
              <br />
              <br />
              <br />

              <h4 style={{ color: "red" }}>professional Skills</h4>
              <h4 className='different'>
                <span className='icons'>
                  <ExitToAppIcon />
                </span>
                Problem Solving
              </h4>
              <h4 className='different'>
                <span className='icons'>
                  <ExitToAppIcon />
                </span>
                Quick Learner
              </h4>
              <h4 className='different'>
                <span className='icons'>
                  <ExitToAppIcon />
                </span>
                Adaptability
              </h4>
              <h4 className='different'>
                <span className='icons'>
                  <ExitToAppIcon />
                </span>
                Decision making
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
