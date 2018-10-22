import React from "react";
import styled from "styled-components";
import Button from "../../utility/Button";
import Project from "./Project";

const WorksContainer = styled.div`
  margin-left: 30px;
  color: white;
  position: relative;

  .about-text {
    h2 {
      &::after {
        content: "";
        display: block;
        height: 30px;
        width: 50px;
        background-color: rgba(253, 254, 255, 0.2);
        position: absolute;
        transform: skewY(-20deg);
        top: 19px;
        left: 20px;
      }
    }
    &::before {
      content: "";
      display: block;
      height: 125px;
      width: 10px;
      border: 1px solid ${props => props.theme.transparent};
      position: absolute;
      left: -20px;
      border-right: none;
    }
  }
  .project-container {
    margin: 40px 0;
    .row {
      display: flex;
      @media (max-width: 1200px) {
        display: block;
      }
    }
  }
`;

class Works extends React.Component {
  render() {
    return (
      <WorksContainer>
        <div className="about-text">
          <h2>Works</h2>
          <p>I makes deez works yoooooooo. Fo realzzz. Hire me.</p>
        </div>
        <div className="project-container">
          <div className="row">
            <Project />
            <Project />
            <Project />
          </div>
        </div>
        <Button href="#contact" text={"Contact"} />
      </WorksContainer>
    );
  }
}

export default Works;
