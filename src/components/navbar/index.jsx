import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import github from "../../assets/images/GitHub.png";
import linkedin from "../../assets/images/Linkedin.png";
import "./style.css";

class NavBar extends Component {
  render() {
    return (
      <section className="nav-block">
        <div className="nav-section">
          <nav className="container navbar">
            <Link to="/">
              <img alt="" src={logo} height="30px" className="nav-brand" />
            </Link>
            <ul className="list nav__list ">
              <li className="nav__item">
                <Link to="/">Home</Link>
              </li>
              {/* <li className="nav__item">
                <Link to="/resume">Resume</Link>
              </li> */}
              {/* <li className="nav__item">
                <Link to="/contact">Contact</Link>
              </li> */}
              <span className="nav__item social-bg">
                <a
                  href="https://github.com/christian-deleon"
                  target="_blank"
                  className="social-link github"
                >
                  <img src={github} alt="" />
                </a>
              </span>
              <span className="nav__item social-bg">
                <a
                  href="https://www.linkedin.com/in/christian-de-leon93/"
                  target="_blank"
                  className="social-link linkedin"
                >
                  <img src={linkedin} alt="" />
                </a>
              </span>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}

export default NavBar;
