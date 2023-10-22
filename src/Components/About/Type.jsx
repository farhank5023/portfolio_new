import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Web Developer", "Electronics Engineer","Public Speaking Enthusiast", "Cook","Traveller"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
