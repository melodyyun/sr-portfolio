import React, { Component } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Li from "./Li";
import Hamburger from "./Hamburger";
import { AppContext } from "../../App";

const Left = styled.nav`
  margin-left: 50px;
  margin-top: 50px;
  position fixed;
  z-index: 1;

    @media (min-width: 980px){
      max-width: 150px;
      margin-top: 13%;
      border: none;
    }

  .navbar-nav {
    padding-left: 0;
    display: none;

    @media (min-width: 980px){
      display: block;
    }

    .nav-item {
      list-style: none;
      padding: 15px;
      margin-left: 0;
      text-align: center;
      text-transform: capitalize;
      transition: ${props => props.theme.transition};

      &::after {
        content: "";
        display: block;
        width: 0px;
        height: 1px;
        background-color: transparent;
        margin: 0 auto;
        margin-top: 5px;
        transition: ${props => props.theme.transition};
      }

      a {
        color: ${props => props.theme.white};
        text-decoration: none;
        font-weight: 300;
        letter-spacing: 0.1rem;
        padding: 15px;
      }

      &.active {

        a {
          font-weight: 600;
          color: ${props => props.theme.white};
        }
      }

      &:hover {
        padding-top: 10px;
        padding-bottom: 20px;

        a {
          color: ${props => props.theme.white};
          font-weight: 600;
        }
        
        &::after {
          background-color: ${props => props.theme.transparent};
          width: 67px;
        }
      }
    }
  }
`;

const Mobile = styled.ul`
  background-color: rgba(253, 254, 255, 0.95);
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0;
  padding-left: 0;
  margin: 0;
  z-index: 1;
  padding-top: 50px;
  padding-bottom: 50px;

  .nav-item {
    list-style: none;
    margin-left: 0;
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: ${props => props.theme.black};
      text-decoration: none;
      text-align: center;
      padding: 25px 80px;
      border: 1px solid ${props => props.theme.black};
      font-weight: 500;
      transition: all 0.3s ease;
      &:hover {
        background: ${props => props.theme.black};
        color: ${props => props.theme.white};
      }
    }
  }
`;

class LeftNav extends Component {
  constructor() {
    super();
    this.state = {
      mobileNavOpen: false
    };
  }

  handleNavClick = () => {
    this.setState({
      mobileNavOpen: !this.state.mobileNavOpen
    });
  };

  handleNavClose = () => {
    this.setState({
      mobileNavOpen: false
    });
  };

  render() {
    const links = [
      { label: "home", href: "#home" },
      { label: "about", href: "#about" },
      { label: "works", href: "#works" },
      { label: "contact", href: "#contact" }
    ];

    console.log(this.props.activeLink);
    return (
      <AppContext.Consumer>
        {context => (
          <Left id="left-nav" className="navbar-sidebar">
            <Logo />
            <Hamburger
              handleNavClick={this.handleNavClick}
              mobileNavOpen={this.state.mobileNavOpen}
            />
            <ul className="navbar-nav">
              {links.map((link, i) => {
                return link.label === context.state.activeLink ? (
                  <Li
                    class="active"
                    item={link.label}
                    url={link.href}
                    key={i}
                    handleClick={this.handleClick}
                  />
                ) : (
                  <Li
                    item={link.label}
                    url={link.href}
                    key={i}
                    handleClick={this.handleClick}
                  />
                );
              })}
            </ul>
            {this.state.mobileNavOpen ? (
              <Mobile className="navbar-mobile">
                {links.map((link, i) => {
                  return link.label === context.state.activeLink ? (
                    <Li
                      class="active"
                      item={link.label}
                      url={link.href}
                      key={i}
                      handleClick={this.handleClick}
                      handleNavClose={this.handleNavClose}
                    />
                  ) : (
                    <Li
                      item={link.label}
                      url={link.href}
                      key={i}
                      handleClick={this.handleClick}
                      handleNavClose={this.handleNavClose}
                    />
                  );
                })}
              </Mobile>
            ) : null}
          </Left>
        )}
      </AppContext.Consumer>
    );
  }
}

export default LeftNav;
