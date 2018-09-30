import React from "react";
import styled from "styled-components";
import Header from "./Header";
class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="title-container">
          <div className="hero">Saad Rahman.</div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            sint facere repudiandae recusandae magnam fuga temporibus nam ab
            fugit! Repellat.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Hero;
