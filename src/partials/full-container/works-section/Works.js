import React from "react";
import styled from "styled-components";
import Button from "../../utility/Button";
import Project from "./Project";

const WorksContainer = styled.div`
  margin-left: 30px;
  color: white;
  position: relative;
  transition: all 0.3s linear;

  @media (max-width: 1200px) {
    margin-left: 0;
    max-width: 536px;
    width: 100%;
  }

  @media (max-width: 840px) {
    width: 100%;
    max-width: 450px;
    max-width: auto;
  }

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
    @media (max-width: 1200px) {
      &::before {
        display: none;
      }
    }
  }
  .project-container {
    margin: 40px 0;
    .row {
      display: flex;
      transition: all 0.3s linear;
      @media (max-width: 1200px) {
        flex-direction: column;
      }
    }
  }
`;

class Works extends React.Component {
  render() {
    const projects = [
      {
        type: "Marketing",
        name: "Conor vs Khabib",
        description:
          "UFC229 Ultimate showdown between world champions Conor and Khabib",
        imgHoverSrc: "./assets/images/ufc229Portrait.jpeg",
        imgHoverAlt: "Black and white photo of Conor in the ring",
        imgSrc: "./assets/images/ufc229.jpeg",
        imgAlt: "Official poster for UFC229 Conor vs Khabib"
      },
      {
        type: "Project Managment",
        name: "FlipGive",
        description: "Where we give flips to people >:D",
        imgHoverSrc: "./assets/images/ufc229Portrait.jpeg",
        imgHoverAlt: "Black and white photo of Conor in the ring",
        imgSrc: "./assets/images/ufc229.jpeg",
        imgAlt: "Official poster for UFC229 Conor vs Khabib"
      },
      {
        type: "Analytics",
        name: "All the Data and stuffzz",
        description: "Much smarts very data",
        imgHoverSrc: "./assets/images/ufc229Portrait.jpeg",
        imgHoverAlt: "Black and white photo of Conor in the ring",
        imgSrc: "./assets/images/ufc229.jpeg",
        imgAlt: "Official poster for UFC229 Conor vs Khabib"
      }
    ];
    return (
      <WorksContainer>
        <div className="about-text">
          <h2>Works</h2>
          <p>
            Here's a snapshot of some of my favourite projects I've worked on:
          </p>
        </div>
        <div className="project-container">
          <div className="row">
            {projects.map((project, i) => {
              return (
                <Project
                  key={`${project.name}${i}`}
                  type={project.type}
                  name={project.name}
                  description={project.description}
                  imgHoverSrc={project.imgHoverSrc}
                  imgHoverAlt={project.imgHoverAlt}
                  imgSrc={project.imgSrc}
                  imgAlt={project.imgAlt}
                />
              );
            })}
          </div>
        </div>
        <Button href="#about" text={"About"} />
      </WorksContainer>
    );
  }
}

export default Works;
