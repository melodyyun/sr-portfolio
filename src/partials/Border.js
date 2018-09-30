import React from "react";
import styled from "styled-components";

const BorderLight = styled.div`
  z-index: 2;
  position: fixed;
  border: ${props => props.theme.border};
  width: calc(100% - 100px);
  height: calc(100vh - 100px);
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  pointer-events: none;
  transition: all 0.3s ease;
`;

const Border = props => {
  return <BorderLight />;
};

export default Border;
