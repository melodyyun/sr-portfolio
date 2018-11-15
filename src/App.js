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
  transition: all 0.05s ease;
  filter: brightness(0.4);
  z-index: -1;
  position: fixed;

  @media (max-width: 1024px) {
    background: url("./assets/images/contrast-sea.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center !important;
    width: 100%;
    height: 100%;
  }
`;

//mouse buddy styling
// const Buddy = styled.div`
//   position: absolute;
//   height: 20px;
//   width: 20px;
//   left: 0;
//   top: 0;
//   opacity: 0;
//   border-radius: 50%;
//   background-color: ${props => props.theme.yellow};
//   transition: all 0.1s ease;
// `;

//main styling
const Main = styled.main`
  transition: all 0.01s linear;
  width: 100%;
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
    // desktop size
    const desktop = 1024;
    //background innerRef
    const background = this.back;

    if (window.innerWidth > desktop) {
      // mouse move variables
      let x = (e.pageX * -1) / 20;
      let y = (e.pageY * -1) / 20;
      background.style.backgroundPosition = `${x}px ${y}px`;
    } else {
      background.style.backgroundPosition = `0px 0px`;
    }

    // //mousebuddy innerRef
    // const mbuddy = this.mbuddy;
    // mbuddy.style.left = `${e.pageX}px`;
    // mbuddy.style.top = `${e.pageY}px`;
    // mbuddy.style.opacity = 1;
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
          {/* <Buddy innerRef={m => (this.mbuddy = m)} /> */}
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
