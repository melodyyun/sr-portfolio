import React from "react";
import styled from "styled-components";
import Button from "../../utility/Button";

const WorksContainer = styled.div`
  color: white;
`;

class Works extends React.Component {
  render() {
    return (
      <WorksContainer>
        works
        <Button href="#contact" text={"Contact"} />
      </WorksContainer>
    );
  }
}

export default Works;
