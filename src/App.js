import React, { Component } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Border from "./partials/Border";
import FullContainer from "./partials/full-container/FullContainer";

//Extract our Sass variables into a JS object
/* eslint-disable*/
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./vars.scss');
/* eslint-enable*/

//background styling
const Bg = styled.div`
  background: url("./assets/images/black-sand.jpg");
  background-size: 110vw 110vh;
  background-repeat: no-repeat;
  width: 100vw;
  overflow: hidden;
  background-attachment: fixed;
  @media (max-width: 1024px) {
    background: url("./assets/images/constrast-sea.jpg");
    background-size: 110vw 110vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;

class App extends Component {
  //referencing callback Ref made with innerRef
  //We needed to to this because a regular callback wouldn't work with styled components
  handleMouseMove = e => {
    // mouse move variables
    let x = (e.pageX * -1) / 15;
    let y = (e.pageY * -1) / 15;
    //background innerRef
    const background = this.back;
    background.style.backgroundPosition = `${x}px ${y}px`;
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Bg
          innerRef={b => (this.back = b)}
          onMouseMove={e => this.handleMouseMove(e)}
        >
          <Border theme={theme} />
          <FullContainer />
        </Bg>
      </ThemeProvider>
    );
  }
}

export default App;
