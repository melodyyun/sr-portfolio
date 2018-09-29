import React, { Component } from "react";
import styled from "styled-components";

const Bg = styled.div`
  background: url("./assets/images/black-sand.jpg");
  background-size: cover;
  background-position: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  overflow: hidden;
`;

const Background = () => <Bg id="background" />;

export default Background;
