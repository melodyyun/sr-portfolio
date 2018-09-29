import React, { Component } from "react";
import styled from "styled-components";

const LogoAnchor = styled.a`
  width: 70px;
  height: 70px;
  display: block;
  margin: 0 auto;
  padding-top: 30px;
`;

const LogoImg = styled.img`
  width: 70px;
  height: 70px;
  margin: 0 auto;
`;

const Logo = () => {
  return (
    <LogoAnchor className="navbar-brand" href="./#">
      <span className="logo">
        <LogoImg
          className="light-logo"
          src="./assets/images/black.svg"
          alt="Saad's Logo"
        />
      </span>
    </LogoAnchor>
  );
};

export default Logo;
