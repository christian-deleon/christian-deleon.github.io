import React, { Component } from "react";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero">
          <div className="container hero-content">
            <h1 className="hero__heading">
              <span className="hero__header-soft">Hello, I'm</span>
              <br />
              Christian De Leon
              <br />
              <span className="hero__header-soft">Cloud Engineer</span>
            </h1>
          </div>
        </section>

        <section className="block">
          <div className="container grid grid--1x2">
            <h2 className="block__heading">Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              dolorem cupiditate ex, assumenda omnis est incidunt repellat sunt
              mollitia corporis?
            </p>
          </div>

          <div className="container grid grid--1x2">
            <h2 className="block__heading">Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              dolorem cupiditate ex, assumenda omnis est incidunt repellat sunt
              mollitia corporis?
            </p>
          </div>

          <div className="container grid grid--1x2">
            <h2 className="block__heading">Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              dolorem cupiditate ex, assumenda omnis est incidunt repellat sunt
              mollitia corporis?
            </p>
          </div>

          <div className="container grid grid--1x2">
            <h2 className="block__heading">Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              dolorem cupiditate ex, assumenda omnis est incidunt repellat sunt
              mollitia corporis?
            </p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
