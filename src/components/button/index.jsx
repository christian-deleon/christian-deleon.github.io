import React, { Component } from "react";
import "./style.css";

class MyButton extends Component {
  render() {
    return <button className="my-btn">{this.props.children}</button>;
  }
}

export default MyButton;
