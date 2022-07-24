import React, { Component } from "react";
import Infra1 from "../../assets/images/infra-1.png";
import AWSCerts from "../../assets/images/aws-certs.png";
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
          <h1 className="hero__header-soft">Cloud Engineer</h1>
        </Hero>

        <section className="block">
          <div className="container grid grid--1x2 about-container">
            <div className="about__content">
              <h2 className="about__heading">
                LET ME <span className="heading-highlight">INTRODUCE</span>{" "}
                MYSELF
              </h2>
              <p>
                I'm on a journey to master Cloud Computing, DevOps, and Software
                Development.
                <br />
                <br />
                My interest in cloud computing stemmed from a desire to build
                large complex efficient systems.
                <br />
                <br />
                I believe in working above the baseline of expectation by always
                pushing myself to learn new and complex systems and
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
            <img src={AWSCerts} alt="" className="about-image" />
            <div className="about__content">
              <h2 className="about__heading">
                AWS <span className="heading-highlight">CERTIFIED</span>
              </h2>
              <p>
                I currently hold five active AWS Certifications and I'm
                currently preparing for my Solutions Architect Professional.
                <br />
                <br />
                With a good understanding of all AWS services, I have an
                extensive amount of exprience with the following products:
              </p>
              <div className="aws-services__list">
                <ul className="aws-services">
                  <li>CloudFormation</li>
                  <li>CDK</li>
                  <li>CodeBuild</li>
                  <li>CodeCommit</li>
                  <li>CodeDeploy</li>
                  <li>CodePipeline</li>
                  <li>CloudWatch</li>
                  <li>EC2</li>
                </ul>
                <ul className="aws-services">
                  <li>ECS</li>
                  <li>Fargate</li>
                  <li>ECR</li>
                  <li>EFS</li>
                  <li>RDS</li>
                  <li>DynamoDB</li>
                  <li>S3</li>
                  <li>ELB</li>
                </ul>
                <ul className="aws-services">
                  <li>ASG</li>
                  <li>API Gateway</li>
                  <li>Lambda</li>
                  <li>AWS Config</li>
                  <li>EventBridge</li>
                  <li>SNS</li>
                  <li>SQS</li>
                  <li>Step Functions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="block">
          <div className="container about-container skills-container">
            <div className="about__content">
              <h2 className="skills__heading">
                MY <span className="heading-highlight">SKILLSET</span>
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
