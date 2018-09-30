import React from "react";
import styled from "styled-components";

const SecContainer = styled.div`
  position: relative;
  width: calc(100% - 100px);
  height: calc(100vh - 100px);
  left: 50%;
  transform: translateX(-50%);
  padding-top: 50px;
  padding-bottom: 50px;
`;

const SectionContainer = props => {
  return <SecContainer>{props.children}</SecContainer>;
};
export default SectionContainer;
