import React from "react";
import styled from "styled-components";
import Button from "../../utility/Button";
import Project from "./Project";

const WorksContainer = styled.div`
  margin-left: 30px;
  color: white;
  position: relative;

  .about-text {
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
        flex-direction: column;
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
        <Button href="#about" text={"About"} />
      </WorksContainer>
    );
  }
}

export default Works;
