import React from "react";
import styled from "styled-components";
import SectionContainer from "./SectionContainer";
import LeftNav from "./hero-section/LeftNav";

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

class FullContainer extends React.Component {
  render() {
    return (
      <Container>
        <SectionContainer leftNav={<LeftNav theme={this.props.theme} />} />
      </Container>
    );
  }
}

export default FullContainer;
