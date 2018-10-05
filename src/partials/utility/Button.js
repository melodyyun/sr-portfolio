import React from "react";
import styled from "styled-components";

const Btn = styled.a`
  border: 1px solid ${props => props.theme.transparent};
  transition: ${props => props.theme.transition};
  padding: 10px 50px 10px 30px;
  position: relative;

  &:hover {
    background: ${props => props.theme.transparent};

    &::before {
      right: 25px;
    }

    &::after {
      right: 25px;
    }
  }

  &::before {
    content: "\f105";
    color: ${props => props.theme.transparent};
    display: inline-block;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 20px;
    right: 30px;
    transition: ${props => props.theme.transition};
    position: absolute;
  }

  &::after {
    content: "\f105";
    color: ${props => props.theme.transparent};
    display: inline-block;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 20px;
    right: 20px;
    transition: ${props => props.theme.transition};
    position: absolute;
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
