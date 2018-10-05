import React from "react";
import styled from "styled-components";
import Button from "../../utility/Button";

const AboutContainer = styled.div`
  color: ${props => props.theme.white};
  max-width: 650px;
  position: relative;
  top: -80px;

  img {
    height: 300px;
    box-shadow: ${props => props.theme.boxShadow};
  }

  .about-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-left: 60px;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    padding: 10px 30px;
    top: 250px;
    right: -50px;

    h2 {
      margin: 0;
    }

    p {
      padding-bottom: 20px;
      line-height: 1.5rem;
    }

    &:before {
      content: "";
      display: block;
      height: 150px;
      width: 10px;
      border: 1px solid ${props => props.theme.transparent};
      position: absolute;
      left: -20px;
      border-right: none;
    }

    .arrow1 {
      color: ${props => props.theme.yellow};
      display: inline-block;
      font-size: 90px;
      position: absolute;
      right: -40px;
      bottom: 30px;
    }

    .arrow2 {
      color: ${props => props.theme.yellow};
      display: inline-block;
      font-size: 90px;
      position: absolute;
      right: -80px;
      bottom: 30px;
    }
  }
`;

const About = () => {
  return (
    <AboutContainer className="about-container">
      <div className="image-container">
        <img
          src="./assets/images/ryerson.jpg"
          alt="Saad and his friends atop a dune buggy in Peru"
        />
        <div className="about-text">
          <h2>Who am I?</h2>
          <p>
            I'm Saad I'm a marketing blah blah blah person Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Praesentium, amet. Ipsam
            tenetur temporibus dolores accusantium consequuntur nam dolorem,
            fugiat aliquid.
          </p>
          <Button text={"Works"} />
          <i className="fas arrow1 fa-chevron-right" />
          <i className="fas arrow2 fa-chevron-right" />
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;
