import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./partials/Home";
import ProjectPage from "./partials/project-pages/ProjectPages";

//Extract our Sass variables into a JS object
/* eslint-disable*/
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./vars.scss');
/* eslint-enable*/

// creating context
export const AppContext = React.createContext();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/project/:projectId" component={ProjectPage} />
          </React.Fragment>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
