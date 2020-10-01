import { Link } from "@reach/router";
import React from "react";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <p>
        Go to <Link to="/">home</Link>
      </p>
    </>
  );
};

export default About;
