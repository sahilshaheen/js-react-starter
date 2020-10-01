import React from "react";
import { Link } from "@reach/router";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>
        Go to <Link to="/about">about</Link>
      </p>
    </>
  );
};

export default Home;
