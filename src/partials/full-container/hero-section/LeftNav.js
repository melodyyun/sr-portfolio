import React, { Component } from 'react';
import styled from 'styled-components';

const Left = styled.nav`

`;

class LeftNav extends Component {
  render() {
    return (
      <Left id="left-nav">
        <nav className="navbar-sidebar">
          <ul className="navbar-nav" id="left-nav">
            <li className="nav-item active" data-menuanchor="home">
              <a href="#home">
                <span className="txt">Home</span>
              </a>
            </li>
            <li className="nav-item" data-menuanchor="about">
              <a href="#about">
                <span className="txt">About</span>
              </a>
            </li>
            <li className="nav-item" data-menuanchor="projects">
              <a href="#projects">
                <span className="txt">Works</span>
              </a>
            </li>
            <li className="nav-item" data-menuanchor="contact">
              <a href="#contact">
                <span className="txt">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </Left>
    );
  }
}

export default LeftNav;
