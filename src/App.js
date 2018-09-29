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

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Background />
          <Border theme={ theme }/>
          <FullContainer />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
