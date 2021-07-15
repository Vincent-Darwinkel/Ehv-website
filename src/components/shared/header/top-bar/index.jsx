import React, { Component } from "react";
import "./index.css";
import Menu from "../menu";

export default class TopBar extends Component {
  render() {
    return (
      <div id="top-bar">
        <div id="top-bar-wrapper">
          <h4 className="corporate-identity-font mt-1" id="top-bar-page-name">
            {this.props.pageName}
          </h4>
        </div>
        <Menu />
      </div>
    );
  }
}
