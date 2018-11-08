import React from "react";
import styled from "styled-components";
import { dotdotdot } from "../../utility/animation";

const ProjectContainer = styled.a`
  height: 350px;
  width: 250px;
  position: relative;
  margin-right: 30px;
  margin-bottom: 30px;
  color: ${props => props.theme.white};

  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
  }

  .project-info-container {
    position: absolute;
    padding: 20px;
    bottom: 0;
    width: 100%;
    height: 60%;
    box-sizing: border-box;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0, 0.5) 80%);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transition: all 0.3s ease;
    border-radius: 0 0 10px 10px;

    @media (max-width: 1200px) {
      height: 100%;
      background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0, 1) 80%);
      justify-content: flex-end;
    }

    .project-type{
      margin: 0;
      color: ${props => props.theme.yellow};
    }

    .project-name {
      margin-bottom: 10px;
    }

    .project-description{
      margin-top: 0;
      font-size: 15px;
    }

    .btn-details {
      z-index: 1;
      padding: 10px;
      cursor: pointer;
      text-align: right;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      span{
        border-radius 50%;
        height: 2px;
        width: 2px;
        background-color: ${props => props.theme.white};
        display: inline-block;
        margin-right: 2px;
      }

      span:nth-of-type(1){
        margin-left: 5px;
        animation-delay: -1.4s;
      }

      span:nth-of-type(2){
        animation-delay: -1.2s;
      }

      span:nth-of-type(3){
        animation-delay: -1s;
      }
    }
  }

  &:hover{
    .project-info-container {
      height: 100%;
      background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0, 1) 70%);
      justify-content: flex-end;

      .btn-details{
        span{
          animation: ${dotdotdot} 1.6s ease-in-out infinite;
        }
      }
    }
  }

  img {
    height: 40%;
    width: 100%;
    position: absolute;
    z-index: -1;
    border-radius: 10px 10px 0 0;
    @media (max-width: 1200px) {
      height: auto;
      border-radius: 10px;
      position: relative;
    }
  }

  img.hover {
    height: 100%;
    border-radius: 10px;
    & < .project-info-container{
      background: linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255, 0.6) 80%);
    }
  }
`;

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectHover: false
    };
  }

  changeImg = () => {
    this.setState({ projectHover: !this.state.projectHover });
  };

  render() {
    return (
      <ProjectContainer
        href="#"
        onMouseEnter={this.changeImg}
        onMouseLeave={this.changeImg}
      >
        <div className="project-info-container">
          <h4 className="project-type">Marketing</h4>
          <h3 className="project-name">Halloween Tracker</h3>
          <p className="project-description">
            UFC yeah cool mannn Lorem ipsum dolor sit amet.
          </p>
          <div className="btn-details">
            Learn More
            <span />
            <span />
            <span />
          </div>
        </div>
        {this.state.projectHover ? (
          <img
            className="hover"
            src="./assets/images/ufc229Portrait.jpeg"
            alt="poster for UFC229 Conor vs Khabib"
          />
        ) : (
          <img
            src="./assets/images/ufc229.jpeg"
            alt="poster for UFC229 Conor vs Khabib"
          />
        )}
      </ProjectContainer>
    );
  }
}

export default Project;
