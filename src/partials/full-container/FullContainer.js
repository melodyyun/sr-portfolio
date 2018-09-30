import React from "react";
import styled from "styled-components";
import SectionContainer from "./SectionContainer";
import Title from "./hero-section/Title";

const Container = styled.section`
  width: 100vw;
  position: relative;
`;

class FullContainer extends React.Component {
  render() {
    return (
      <Container>
        <SectionContainer children={<Title theme={this.props.title} />} />
        <SectionContainer children={<Title theme={this.props.title} />} />
      </Container>
    );
  }
}

export default FullContainer;
