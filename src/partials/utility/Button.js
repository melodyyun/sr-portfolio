import React from "react";
import styled from "styled-components";

const Btn = styled.a`
  border: 1px solid ${props => props.theme.transparent};
  padding: 10px 40px;
  transition: ${props => props.theme.transition};
  margin: 10px 0;

  &:hover {
    background: ${props => props.theme.transparent};
  }

  &::after {
    content: "\f105";
    display: inline-block;
    font-family: "Font Awesome 5 Free";
    font-weight: 400;
  }
`;

const Button = props => {
  return (
    <Btn href={props.href} className="button">
      {props.text}
    </Btn>
  );
};

export default Button;
