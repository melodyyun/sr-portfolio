import React, { component } from "react";
import styled from "styled-components";

const SecContainer = styled.div`
  position: relative;
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SectionContainer = props => {
  return <SecContainer>{props.leftNav}</SecContainer>;
};
export default SectionContainer;
