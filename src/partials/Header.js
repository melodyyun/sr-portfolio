import React, { Component } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

class Header extends Component {
  render() {
    return (
      <header className="page-header navbar page-header-alpha scrolled-white">
        <Hamburger />
        <Logo />
      </header>
    );
  }
}

export default Header;
