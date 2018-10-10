import React from "react";
import styled from "styled-components";
import SectionContainer from "./SectionContainer";
import Title from "./hero-section/Title";
import About from "./about-section/About";
import Works from "./works-section/Works";
import Contact from "./contact-section/Contact";

const Container = styled.section`
  width: 100vw;
  position: relative;
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
        <SectionContainer
          id="works"
          children={<Works theme={this.props.works} />}
        />
        <SectionContainer
          id="contact"
          children={<Contact theme={this.props.works} />}
        />
      </Container>
    );
  }
}

export default FullContainer;
