import React, { Component } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Hero from "./partials/Hero";

//Extract our Sass variables into a JS object
/* eslint-disable*/
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./vars.scss');
/* eslint-enable*/

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Hero />
      </ThemeProvider>
    );
  }
}

export default App;
