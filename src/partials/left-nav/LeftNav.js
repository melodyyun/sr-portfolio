import React, { Component } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Li from "./Li";
import { AppContext } from "../../App";

const Left = styled.nav`
  max-width: 150px;
  margin-left: 50px;
  margin-top: 180px;
  position fixed;
  z-index: 1;

  .navbar-nav {
    padding-left: 0;

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

class LeftNav extends Component {
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
          </Left>
        )}
      </AppContext.Consumer>
    );
  }
}

export default LeftNav;
