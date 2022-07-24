import React, { Component } from "react";
import "./style.css";

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="container hero-content">
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default Hero;
