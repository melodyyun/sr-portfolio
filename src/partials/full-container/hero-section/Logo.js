import React, { Component } from "react";
import styled from "styled-components";

const LogoImg = styled.img`
  width: 70px;
  height: 70px;
`;

const Logo = () => {
    return (
      <a className="navbar-brand" href="./#">
        <span className="logo">
          <LogoImg
            className="light-logo"
            src="./assets/images/black.svg"
            alt="Saad's Logo"
          />
        </span>
      </a>
    );
}

export default Logo;
