import React, { Component } from "react";
import styled from "styled-components";

const BurgerBtn = styled.button`
  padding: 10px;
  height: 50px;
  width: 50px;
  background-color: rgba(0,0,0,0);
  border: none;

  @media (min-width: 980px) {
    display: none;
  }

  ${"" /* opened nav X */}
  .bars.open{
    .bar{
      &:nth-of-type(1) {
        transform: rotate(45deg);
        transform-origin: top left;
        margin-left: 5px;
      }

      &:nth-of-type(2) {
        opacity 0;
      }

      &:nth-of-type(3) {
        transform: rotate(-45deg);
        transform-origin: bottom left;
        margin-left: 5px;
      }
    }
  }

  ${"" /* closed nav hamburger */}
  .bars {
    width: 30px;
    height: 30px;
    
    .bar {
      opacity: 1;
      transition: all 0.3s ease;
      width: 30px;
      background: ${props => props.theme.white};
      height: 3px;
      display: block;
      margin-bottom: 7px;

      &:last-of-type{
        margin-bottom: 0;
      }
    }
  }
`;

class Hamburger extends Component {
  render() {
    return (
      <BurgerBtn className="navbar-toggler site-menu-icon" id="navMenuIcon">
        <span className="menu-icon menu-icon-normal">
          <span className="bars open">
            <span className="bar bar1" />
            <span className="bar bar2" />
            <span className="bar bar3" />
          </span>
        </span>
      </BurgerBtn>
    );
  }
}

export default Hamburger;
