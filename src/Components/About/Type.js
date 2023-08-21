import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "Enthusiastic Developer",
            "Full Stack web Developer",
            "MERN Stack Developer",
            "Frontend Developer",
            "React js Developer",
            "Backend Developer"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </>
  );
};
