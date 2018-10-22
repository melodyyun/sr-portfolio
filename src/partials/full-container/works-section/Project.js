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

  .project-info-container {
    position: absolute;
    padding: 20px;
    bottom: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: linear-gradient(${props =>
      props.theme.transparent}, #9198e5 80%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: all 0.5s ease;
    transition-delay: 0.3s;

      &::after {
        content: "";
        display: block;
        height: 100%;
        width: 100%;
        border: 1px solid rgba(253,254,255,0.2);
        position: absolute;
        right: -20px;
        top: 20px;
        z-index -1;
        transition: all 0.7s ease;
      }

      &:hover{
        box-shadow: 0px 0px 10px ${props => props.theme.white};

        &::after {
          content: "";
          display: block;
          height: 100%;
          width: 100%;
          border: 1px solid rgba(253,254,255,0);
          position: absolute;
          right: 0px;
          top: 0px;
          z-index -1;
      }
      }
    }

    .project-type{
      margin-bottom: 0;
    }

    .project-name {
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
        height: 3px;
        width: 3px;
        background-color: ${props => props.theme.white};
        display: inline-block;
        animation: ${dotdotdot} 1.6s ease-in-out infinite;
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

  img {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
  }
`;

class Project extends React.Component {
  render() {
    return (
      <ProjectContainer href="#">
        <div className="project-info-container">
          <h4 className="project-type">Marketing</h4>
          <h3 className="project-name">Halloween Tracker</h3>
          <div className="btn-details">
            Learn More
            <span />
            <span />
            <span />
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1539683255143-73a6b838b106?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d8d4c6058d4f950bb1fd746a3fec43f7&auto=format&fit=crop&w=632&q=80"
          alt="tracker"
        />
      </ProjectContainer>
    );
  }
}

export default Project;
