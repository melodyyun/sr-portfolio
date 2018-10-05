import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "../../utility/Button";

const upDown = keyframes`
  0% {
    top: -28px;
  }

  50% {
    top: -35px;
  }
`;

const AboutContainer = styled.div`
  color: ${props => props.theme.white};
  display: flex;
  flex-direction: row;
  max-width: 650px;
  position: relative

  &::before {
    content: "\f063";
    color: ${props => props.theme.white};
    display: inline-block;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 60px;
    position: absolute;
    z-index: 2;
    transform: rotate(-30deg);
    left: 58px;
    top: -28px;
    animation: ${upDown} 0.5s linear infinite;
  }

  img {
    height: 400px;
    box-shadow: ${props => props.theme.boxShadow};
  }

  .about-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-left: 60px;
    position: relative;

    p {
      padding-bottom: 20px;
    }

    &:after {
      content: "";
      display: block;
      height: 150px;
      width: 10px;
      border: 1px solid ${props => props.theme.transparent};
      position: absolute;
      left: -20px;
      border-right: none;
    }
  }
`;

const About = () => {
  return (
    <AboutContainer className="about-container">
      <img
        src="./assets/images/dune-buggy-portrait.jpg"
        alt="Saad and his friends atop a dune buggy in Peru"
      />
      <div className="about-text">
        <h2>Who am I?</h2>
        <p>
          I'm Saad I'm a marketing blah blah blah person Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Praesentium, amet. Ipsam tenetur
          temporibus dolores accusantium consequuntur nam dolorem, fugiat
          aliquid.
        </p>
        <Button text={"Works"} />
      </div>
    </AboutContainer>
  );
};

export default About;
