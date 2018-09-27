import React, { Component } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

//Extract our Sass variables into a JS object
/* eslint-disable*/
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./vars.scss');
/* eslint-enable*/

class App extends Component {
  render() {
    return <div className="App" />;
  }
}

export default App;
