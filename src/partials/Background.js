import React, { Component } from "react";
import styled from "styled-components";

const Bg = styled.div`
  background: url('./assets/images/constrast-sea.jpg');
  background-size: cover;
  background-position: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;

const Background = () => {
  return(
    <Bg id="background" ></Bg>
  )
};

export default Background;