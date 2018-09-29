import React, { Component } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Li from "./Li";

const Left = styled.nav`
  max-width: 150px;
  .navbar-nav {
    ${"" /* &::before{
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
    } */} padding-left: 0;
    .nav-item {
      list-style: none;
      padding: 15px;
      margin-left: 0;
      text-align: center;
      text-transform: capitalize;
      transition: all 0.3s ease;
      &::after {
        content: "";
        display: block;
        width: 0px;
        height: 1px;
        background-color: transparent;
        margin: 0 auto;
        margin-top: 5px;
        transition: all 0.3s ease;
      }
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
      &:hover {
        padding-top: 10px;
        padding-bottom: 20px;
        a {
          color: ${props => props.theme.blue};
          font-weight: 500;
        }
        &::after {
          background-color: ${props => props.theme.blue};
          width: 70px;
        }
      }
    }
  }
`;

class LeftNav extends Component {
  render() {
    return (
      <Left id="left-nav" className="navbar-sidebar">
        <Logo />
        <ul className="navbar-nav">
          <Li item={"home"} />
          <Li item={"about"} />
          <Li item={"works"} />
          <Li item={"contact"} />
        </ul>
      </Left>
    );
  }
}

export default LeftNav;
