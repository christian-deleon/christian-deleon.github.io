import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./style.css";

class NavBar extends Component {
  render() {
    return (
      <section className="nav-section">
        <nav className="container navbar">
          <Link to="/">
            <img
              alt=""
              src={logo}
              height="30px"
              className="nav-brand"
            />
          </Link>
          <ul className="list nav__list ">
            <li className="nav__item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav__item">
              <Link to="/resume">Resume</Link>
            </li>
            <li className="nav__item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}

export default NavBar;
