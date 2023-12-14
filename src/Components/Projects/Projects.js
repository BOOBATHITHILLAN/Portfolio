import React from "react";
import "./Projects.css";
import { FaReact} from "react-icons/fa";
import { SiExpress, SiMongodb, SiNodedotjs } from "react-icons/si";
import MemoriaConnect from "../../assets/MemoriaConnect.png";
import UrlShortener from "../../assets/UrlShortener.png";
// import {
//   SiBlockchaindotcom,
//   SiHtml5,
//   SiMaterialui,
//   SiChai,
//   SiEthereum,
//   SiExpress,
//   SiSocketdotio,
//   SiTailwindcss,
//   SiReactrouter,
//   SiJavascript,
//   SiMongodb,
//   SiNodedotjs,
// } from "react-icons/si";
// import { DiCss3 } from "react-icons/di";
// import { VscJson } from "react-icons/vsc";
// import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className='section'>
        <h2 className='section__title different'> Recent Projects</h2>
        <div className='allProjects'>
          <div
            className='projects_container'
            data-aos='fade-right'
          >
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img
                    src={MemoriaConnect}
                    alt='MemoriaConnect'
                  />
                </div>
              </div>
              <div className='project_information'>
                <h2>MemoriaConnect</h2>
                <p>
                  Welcome to MemoriaConnect. It is a straightforward yet
                  engaging simple social media application that allows users to
                  connect, share their thoughts, and interact with each other
                  through posts and comments. Built using the powerful MERN
                  stack, this app provides a platform where users can create
                  accounts, share posts, like content, and engage in meaningful
                  discussions through comments.
                </p>
                <div>
                  <FaReact />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href='https://github.com/BOOBATHITHILLAN/MemoriaConnect_FE'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span
                      type='button'
                      className='btns onbt onbt'
                    >
                      Github
                    </span>
                  </a>
                  <a
                    href='https://ornate-lily-07e49e.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span
                      type='button'
                      className='btns onbt onbt'
                    >
                      See this Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
                         <div
            className='projects_container'
            data-aos='fade-right'
          >
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img
                    src={Expense_Tracker}
                    alt='Expense_Tracker'
                  />
                </div>
              </div>
              <div className='project_information'>
                <h2>Expense_Tracker</h2>
                <p>
                 Effortlessly manage your finances and take control of your expenses 
                 with Expense Tracker Pro, the ultimate solution for tracking and organizing 
                your spending. This intuitive app is designed to simplify your financial life,
                providing you with a powerful tool to monitor, analyze, and optimize your budget.
                </p>
                <div>
                  <FaReact />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href='https://github.com/BOOBATHITHILLAN/ExpenseTracker_FE'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span
                      type='button'
                      className='btns onbt onbt'
                    >
                      Github
                    </span>
                  </a>
                  <a
                    href='https://aquamarine-madeleine-336197.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span
                      type='button'
                      className='btns onbt onbt'
                    >
                      See this Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className='projects_container'
            data-aos='fade-right'
          >
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img
                    src={UrlShortener}
                    alt='UrlShortener'
                  />
                </div>
              </div>
              <div className='project_information'>
                <h2>UrlShortener</h2>
                <p>
                  Presenting LinkTrim, a cutting-edge URL shortener project
                  built using the MERN (MongoDB, Express, React, Node.js) stack.
                  LinkTrim simplifies your lengthy web addresses into concise,
                  shareable links, making navigation a breeze and tracking a
                  cinch. With its sleek interface and powerful features,
                  LinkTrim offers a seamless solution for transforming long URLs
                  into compact, efficient links.
                </p>
                <div>
                  <FaReact />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href='https://github.com/BOOBATHITHILLAN/url-shortener-Frontend'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span
                      type='button'
                      className='btns onbt'
                    >
                      Github
                    </span>
                  </a>
                  <a
                    href='https://gregarious-narwhal-772a00.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span
                      type='button'
                      className='btns onbt'
                    >
                      See this Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
