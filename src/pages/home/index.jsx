import React, { Component } from "react";
import Infra1 from "../../assets/images/infra-1.png";
import AWSCerts from "../../assets/images/aws-certs.png";
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
                I believe in working above the baselivne of expectation by
                always pushing myself to learn new and complex systems and
                technologies.
                <br />
                <br />
                Apart from Cloud Computing, I have a background in Mechanical
                and Electrical Engineering as well as Software Development.
              </p>
            </div>
            <img src={Infra1} alt="" className="about-image" />
          </div>

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
                  <li>CloudFormation</li>
                  <li>CDK</li>
                  <li>CodeBuild</li>
                  <li>CodeCommit</li>
                  <li>CodeDeploy</li>
                  <li>CodePipeline</li>
                  <li>CloudWatch</li>
                  <li>EC2</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container grid grid--1x2 about-container">
            <div className="about__content">
              <h2 className="about__heading">Heading</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                dolorem cupiditate ex, assumenda omnis est incidunt repellat
                sunt mollitia corporis?
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
