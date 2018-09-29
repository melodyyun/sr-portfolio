import React, { Component } from 'react';
import styled from 'styled-components';

const Left = styled.nav`
  .navbar-nav{
    padding-left: 0;
    .nav-item{
      list-style: none;
      padding: 10px 40px 10px 10px;
      margin-left: 0;
      a{
        color: ${props => props.theme.white };
        text-decoration: none;
        font-weight: 300;
      }
      &.active{
        a{
          font-weight: 500;
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
