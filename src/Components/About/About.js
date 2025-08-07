import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";

export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Boobathi Thillan</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">

        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/BOOBATHITHILLAN"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:boobathithillan@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+91-8637421253"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/boobathi-thillan-119392260/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>

        </div>
        <a
          href={'https://app.enhancv.com/share/26b007f9/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic'}
          // download='Boobathi_Full_Stack_Web_Developer.pdf'
          target="_blank"
            rel="noreferrer"
        >
          <button className='btnResume'>Get Resume</button>
        </a>
      </div>
      <Introduction />
      <section id="#education">
        <Timeline />
      </section>
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
