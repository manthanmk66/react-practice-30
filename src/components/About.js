import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "ABOUT";
  });
  return <div>This is About Page</div>;
};

export default About;
