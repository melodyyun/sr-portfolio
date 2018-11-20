import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../utility/Button";

const ProjectContainer = styled.div``;

class ProjectPage extends Component {
  render() {
    return (
      <ProjectContainer>
        <h1>Project page</h1>
        <Link to={`/`}>Home</Link>
        <Button href="/" text={"Back"} />
      </ProjectContainer>
    );
  }
}

export default ProjectPage;
