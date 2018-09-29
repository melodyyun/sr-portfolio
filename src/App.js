import React, { Component } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Background from "./partials/Background";
import Border from "./partials/Border";
import FullContainer from "./partials/full-container/FullContainer";

//Extract our Sass variables into a JS object
/* eslint-disable*/
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./vars.scss');
/* eslint-enable*/

const Bg = styled.div`
  background: url("./assets/images/black-sand.jpg");
  background-size: 110vw 110vh;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  @media (max-width: 1024px) {
    background: url("./assets/images/constrast-sea.jpg");
    background-size: 110vw 110vh;
    background-repeat: no-repeat;
  }
`;

class App extends Component {
  constructor() {
    super();
  }

  handleMouseMove = e => {
    console.log((e.pageX * -1) / 15, (e.pageY * -1) / 15);
    const background = this.back;
    background.style.backgroundPosition = `${(e.pageX * -1) / 15}px,${(e.pageY *
      -1) /
      15}px`;
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
