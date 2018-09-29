import React, { component } from 'react';
import styled from 'styled-components';

const BorderLight = styled.div`
  z-index: 2;
  position: fixed;
  border: ${props => props.theme.border};
  width: calc( 100% - 100px);
  height: calc( 100% - 100px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Border = (props) => {
  return (
    <BorderLight />
  )
}

export default Border;