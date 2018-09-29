import React, { Component } from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Left = styled.nav`
  max-width: 150px;
  .navbar-nav {
    &::before{
      content: '';
      display: block;
      height: 1px;
      width: 50px;
      margin: 40px auto 10px auto;
      background ${props => props.theme.white};
    }
    &::after{
      content: '';
      display: block;
      height: 1px;
      width: 50px;
      margin: 10px auto 40px auto;
      background ${props => props.theme.white};
    }
    padding-left: 0;
    .nav-item {
      list-style: none;
      padding: 12px;
      margin-left: 0;
      text-align: center;
      a {
        color: ${props => props.theme.white};
        text-decoration: none;
        font-weight: 300;
        letter-spacing: 0.1rem;
      }
      &.active {
        a {
          font-weight: 500;
          color: ${props => props.theme.blue};
        }
      }
    }
  }
`;

class LeftNav extends Component {
  props = this.props;
  // console.log(this.props.theme)
  render() {
    return (
      <Left id="left-nav" className="navbar-sidebar">
        <Logo />
        <ul className="navbar-nav">
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
      </Left>
    );
  }
}

export default LeftNav;
