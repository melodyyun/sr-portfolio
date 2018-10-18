import React from "react";
import styled from "styled-components";

const ProjectContainer = styled.div`
  height: 250px;
  width: 250px;
  position: relative;
  margin-right: 30px;
  margin-bottom: 30px;

  .project-type {
    position: absolute;
    left: 20px;
    top: 20px;
  }

  .project-name {
    position: absolute;
    left: 20px;
    top: 45px;
  }

  img {
    height: 100%;
    width: 100%;
  }

  .btn-details {
    position: absolute;
    right: 20px;
    bottom: 20px;
    z-index: 1;
  }
`;

class Project extends React.Component {
  render() {
    return (
      <ProjectContainer>
        <h4 className="project-type">Marketing</h4>
        <h3 className="project-name">Halloween Tracker</h3>
        <img
          src="https://images.unsplash.com/photo-1539683255143-73a6b838b106?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d8d4c6058d4f950bb1fd746a3fec43f7&auto=format&fit=crop&w=632&q=80"
          alt="tracker"
        />
        <a className="btn-details">Details</a>
      </ProjectContainer>
    );
  }
}

export default Project;
