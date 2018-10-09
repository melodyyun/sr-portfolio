import React from "react";
import styled from "styled-components";
import SectionContainer from "./SectionContainer";
import Title from "./hero-section/Title";
import About from "./about-section/About";

const Container = styled.section`
  width: 100vw;
  position: relative;
  ${"" /* display: block;
  scroll-behaviour: smooth;
  overflow-y: scroll; */};
`;

class FullContainer extends React.Component {
  render() {
    return (
      <Container>
        <SectionContainer
          id="home"
          children={<Title theme={this.props.title} />}
        />
        <SectionContainer
          id="about"
          children={<About theme={this.props.about} />}
        />
      </Container>
    );
  }
}

export default FullContainer;
