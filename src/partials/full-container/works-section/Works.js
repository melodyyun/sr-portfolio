import React from "react";
import styled from "styled-components";
import Button from "../../utility/Button";
import Project from "./Project";

const WorksContainer = styled.div`
  color: white;
  .about-text {
  }
  .project-container {
    margin: 40px 0;
    .row {
      display: flex;
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
          </div>
          <div className="row">
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
