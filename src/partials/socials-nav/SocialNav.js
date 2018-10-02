import React, { Component } from "react";
import styled from "styled-components";

const SocNav = styled.nav`
  position: fixed;
  z-index: 1;
  right: 50px;
  display: block;
  top: 50px;
  .navbar-social {
    margin: 0;
    padding: 0;
    .nav-item {
      list-style: none;
      padding-top: 5px;
      padding-bottom: 5px;
      .btn-social {
        color: ${props => props.theme.white};
        padding: 5px;
        border-bottom: 1px solid ${props => props.theme.white};
        border-left: 1px solid ${props => props.theme.white};
        font-size: 20px;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.15);
        border-color: transparent;
        display: inline-flex;
      }
    }
  }
`;

class SocialNav extends Component {
  render() {
    return (
      <SocNav className="navbar-topmenu">
        <ul className="navbar-social d-none d-lg-block">
          <li className="nav-item">
            <a href="//linked.com/miradontsoa" className="btn-social">
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li className="nav-item">
            <a href="//twitter/miradontsoa" className="btn-social">
              <i class="fab fa-twitter" />
            </a>
          </li>
          <li className="nav-item">
            <a href="//instagram.com/miradontsoa" className="btn-social">
              <i class="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </SocNav>
    );
  }
}

export default SocialNav;
