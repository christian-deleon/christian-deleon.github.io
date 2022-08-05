import React, { Component } from "react";
import Infra1 from "../../assets/images/infra-1.png";
import Infra2 from "../../assets/images/infra-2.png";
import MyButton from "./../../components/button/index";
import { getSkills } from "./skills";
import Hero from "./../../components/hero/index";
import sprite from "../../assets/svg/sprite.svg";
import "./style.css";

class Home extends Component {
  state = {
    skills: getSkills(),
  };

  render() {
    return (
      <React.Fragment>
        <Hero>
          <h1 className="hero__header-soft">Hello, I'm</h1>
          <h1 className="hero__heading">Christian De Leon</h1>
          <h1 className="hero__header-soft">DevOps Engineer</h1>
        </Hero>

        <section className="block">
          <div className="container grid grid--1x2 about-container">
            <div className="about__content">
              <h2 className="about__heading">
                LET ME <span className="highlight">INTRODUCE</span> MYSELF
              </h2>
              <p>
                I'm on a journey to master Cloud Computing, DevOps, and Software
                Development.
                <br />
                <br />
                Been <span className="highlight">
                  programming for 8+ years
                </span>{" "}
                and{" "}
                <span className="highlight">
                  developing cloud infrastructure for 4+ years
                </span>
                .
                <br />
                <br />
                My interest in cloud computing stemmed from a desire to build
                large complex efficient systems.
                <br />
                <br />I believe in{" "}
                <span className="highlight">
                  working above the baseline of expectation
                </span>{" "}
                by always pushing myself to learn new and complex systems and
                technologies.
                <br />
                <br />
                Apart from Cloud Computing, I have a background in Mechanical
                and Electrical Engineering as well as Software Development.
              </p>
            </div>
            <img src={Infra1} alt="" className="about-image" />
          </div>
        </section>

        <section className="block">
          <div className="container grid grid--1x2 about-container">
            <img src={Infra2} alt="" className="about-image" />
            <div className="about__content">
              <h2 className="about__heading">
                MY <span className="highlight">PROJECTS</span>
              </h2>
              <p>
                To show off my{" "}
                <span className="highlight">Infrastructure as Code</span>{" "}
                skills. I have created multiple GitHub repositories detailing
                how I designed and deployed the infrastructure running this
                website. For all my other projects please visit my GitHub
                profile.
                <br />
                <br />
                <a
                  href="https://github.com/christian-deleon/portfolio-iac"
                  target="_blank"
                  className="portfolio-btn"
                >
                  <MyButton>
                    <span className="portfolio-btn-text">Repository</span>
                  </MyButton>
                </a>
                <a
                  href="https://github.com/christian-deleon"
                  target="_blank"
                  className="portfolio-btn"
                >
                  <MyButton>
                    <span className="portfolio-btn-text">GitHub Profile</span>
                  </MyButton>
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="block">
          <div className="container about-container skills-container">
            <div className="about__content certs-container">
              <h2 className="skills__heading">
                ACTIVE <span className="highlight">CERTIFICATIONS</span>
              </h2>
              <br />
              <div className="certs">
                <img src="./badges/terraform.png" alt="" />
                <img src="./badges/aws_devops.png" alt="" />
                <img src="./badges/aws_sa.png" alt="" />
                <img src="./badges/aws_dev.png" alt="" />
                <img src="./badges/aws_sysops.png" alt="" />
              </div>
              <br />
              <br />
              <br />
              <h2 className="skills__heading">
                CERTIFICATION <span className="highlight">ROADMAP</span>
              </h2>
              <p>These are certifications that I am currently studying for.</p>
              <br />
              <div className="certs">
                <img src="./badges/ckad.png" alt="" />
                <img src="./badges/azure_devops.png" alt="" />
                <img src="./badges/gcp_devops.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="block">
          <div className="container about-container skills-container">
            <div className="about__content">
              <h2 className="skills__heading">
                MY <span className="highlight">SKILLSET</span>
              </h2>
              <div className="skills-grid">
                {this.state.skills.map((skill) => {
                  return (
                    <div className="skill-container">
                      <svg className="skill-badge">
                        <use href={sprite + `#${skill.svgName}`}></use>
                      </svg>
                      <h3 className="skill-name">{skill.name}</h3>
                      <h4 className="skill-level">{skill.level}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
