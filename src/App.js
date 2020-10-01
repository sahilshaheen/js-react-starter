import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
