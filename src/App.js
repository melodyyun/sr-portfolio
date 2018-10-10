import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
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

// creating context
export const AppContext = React.createContext();

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeLink: "home"
    };
  }

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

  toggleActiveLink = e => {
    this.setState({
      activeLink: e.target.value
    });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppContext.Provider
          value={{ state: this.state, toggleActiveLink: this.toggleActiveLink }}
        >
          <Bg innerRef={b => (this.back = b)} />
          <Main
            className="main-container"
            toggleActiveLink={this.toggleActiveLink}
            onMouseMove={e => this.handleMouseMove(e)}
          >
            <Border theme={theme} />
            <LeftNav activeLink={this.state.activeLink} />
            <FullContainer />
            <SocialNav />
          </Main>
        </AppContext.Provider>
      </ThemeProvider>
    );
  }
}

export default App;
