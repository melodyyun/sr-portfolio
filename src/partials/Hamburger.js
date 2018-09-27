import React, { Component } from "react";
import styled from "styled-components";

class Hamburger extends Component {
  render() {
    return (
      <button className="navbar-toggler site-menu-icon" id="navMenuIcon">
        <span className="menu-icon menu-icon-normal">
          <span className="bars">
            <span className="bar1" />
            <span className="bar2" />
            <span className="bar3" />
          </span>
        </span>
      </button>
    );
  }
}

export default Hamburger;
