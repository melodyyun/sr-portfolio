import React, { Component } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Border from "./partials/Border";
import FullContainer from "./partials/full-container/FullContainer";
import LeftNav from "./partials/left-nav/LeftNav";
import SocialNav from "./partials/socials-nav/SocialNav";

//Extract our Sass variables into a JS object
/* eslint-disable*/
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./vars.scss');
/* eslint-enable*/

//background styling
const Bg = styled.div`
  background: url("./assets/images/contrast-sea-horizontal.jpg");
  background-size: 110vw 150vh;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-attachment: fixed;
  transition: all 0.05s linear;
  filter: brightness(0.4);
  z-index: -1;
  position: fixed;

  @media (max-width: 1024px) {
    background: url("./assets/images/contrast-sea.jpg");
    background-size: 110vw 150vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;

//main styling
const Main = styled.main`
  transition: all 0.01s linear;
  width: 100vw;
  font-family: ${props => props.theme.fontPrimary};
`;

class App extends Component {
  //referencing callback Ref made with innerRef
  //We needed to to this because a regular callback wouldn't work with styled components
  handleMouseMove = e => {
    // mouse move variables
    let x = (e.pageX * -1) / 20;
    let y = (e.pageY * -1) / 20;
    //background innerRef
    const background = this.back;
    background.style.backgroundPosition = `${x}px ${y}px`;
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Bg innerRef={b => (this.back = b)} />
          <Main
            className="main-container"
            onMouseMove={e => this.handleMouseMove(e)}
          >
            <Border theme={theme} />
            <LeftNav />
            <FullContainer />
            <SocialNav />
          </Main>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
