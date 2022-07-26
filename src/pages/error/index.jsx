import React, { Component } from "react";
import Hero from "./../../components/hero/index";

class ErrorPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero>
          <h1 className="hero__heading">PAGE NOT FOUND</h1>
        </Hero>
      </React.Fragment>
    );
  }
}

export default ErrorPage;
