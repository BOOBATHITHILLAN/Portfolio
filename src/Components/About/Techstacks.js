import React from 'react';
import './Techstacks.css';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiRedux,
  SiHtml5,
  SiExpress,
  SiJavascript,
  SiNetlify,
  SiMysql,
  SiPostman,
  SiTailwindcss,
  SiRender,
  SiNextdotjs,
  SiNestjs,
} from 'react-icons/si';
import { DiCss3, DiMongodb } from 'react-icons/di';
import { VscGithub } from 'react-icons/vsc';
import { BsBootstrap } from 'react-icons/bs';
// import {
//   SiRedux,
//   SiHtml5,
//   SiMaterialui,
//   SiExpress,
//   SiRedis,
//   SiTailwindcss,
//   SiJavascript,
//   SiHeroku,
//   SiNetlify,
//   SiMysql,
//   SiPostman,
//   SiRender
// } from "react-icons/si";

export const Techstacks = () => {
  return (
    <>
      <div className='section main' data-aos='fade-right'>
        <h2 className='section__title different'>Skills</h2>
        <div className='techsection'>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <SiNextdotjs />
            <h5>Next js</h5>
          </div>
          <div>
            <FaReact />
            <h5>React js</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div>
            <SiNestjs />
            <h5>Nest js</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>

          <div>
            <SiExpress />
            <h5>Expressjs</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDB</h5>
          </div>
          <div>
            <SiMysql />
            <h5>MySql</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <SiTailwindcss />
            <h5>Tailwind css</h5>
          </div>

          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>
          {/* <div>
            <SiHeroku />
            <h5>Heroku</h5>
          </div> */}
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiPostman />
            <h5>Postman</h5>
          </div>
          <div>
            <SiRender />
            <h5>Render</h5>
          </div>
        </div>
      </div>
    </>
  );
};
