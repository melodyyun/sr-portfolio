import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProjectContainer from "./ProjectContainer";
import Template from "./ProjectTemplate";
import Border from "../Border";

class ProjectPage extends Component {
  const;

  render() {
    return (
      <ProjectContainer>
        <h1>Project page</h1>
        <Link to={`/`}>Home</Link>
      </ProjectContainer>
    );
  }
}

export default ProjectPage;
