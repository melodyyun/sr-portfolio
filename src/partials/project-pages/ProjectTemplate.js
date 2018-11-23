import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TemplateContainer = styled.section`
  .project-section {
    width: 65%;
    margin: 20% auto;
    background: ${props => props.theme.transparent};
    box-shadow: ${props => props.theme.boxShadow};
    padding: 10%;
    color: ${props => props.theme.black};

    h1 {
      font-size: 36px;
      font-weight: 700;
      transition: all 0.3s linear;
      text-align: center;
      color: ${props => props.theme.black};
      text-transform: uppercase;
      margin: 0;

      @media (max-width: 1020px) {
        font-size: 28px;
      }

      @media (max-width: 560px) {
        font-size: 20px;
      }
    }

    .quote {
      font-size: 70px;
      font-weight: 700;
      transition: all 0.3s linear;
      text-align: center;
      position: relative;
      margin: 20px 0;
      line-height: 1.2em;
      color: grey;

      .em {
        font-family: auto;
        z-index: -1;
        color: ${props => props.theme.yellow};
      }

      .qStart {
        font-size: 180px;
        transition: all 0.3s linear;
        position: absolute;
        left: 15%;
        top: 5px;
      }
    }

    .row {
      display: flex;
      flex-flow: row no-wrap;

      @media (max-width: 768px) {
        flex-flow: column;
      }

      .blocktext {
        padding: 20px;
      }
    }
  }

  .image-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
    z-index: -2;

    &::after {
      position: absolute;
      content: "";
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(255, 255, 255, 1) 100%
      );
    }

    .background {
      width: 100%;
    }
  }
`;

const Template = props => {
  return (
    <TemplateContainer>
      <div className="project-section">
        <h1>{props.project.name}</h1>
        <h2 className="quote">
          <span className="em qStart">“</span>
          {props.project.quote}
          <span className="em">”</span>
        </h2>
        <div className="row">
          <p className="blocktext">{props.project.textblock1}</p>
          <p className="blocktext">{props.project.textblock2}</p>
        </div>
      </div>
      <div className="image-container">
        <img
          className="background"
          src={props.project.imgMain}
          alt={props.project.imgMainAlt}
        />
      </div>
      <Link to={`/`}>Home</Link>
      <Link to={`/projects/${props.project.nextLink}`}>
        {props.project.nextProject}
      </Link>
    </TemplateContainer>
  );
};

export default Template;
