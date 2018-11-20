import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./utility/Button";

const NoMatchContainer = styled.div``;

class NoMatch extends Component {
  render() {
    return (
      <NoMatchContainer>
        <h1>404 page</h1>
        <Link to={`/`}>
          <h1>Home</h1>
        </Link>
        <Button href="/" text={"Back"} />
      </NoMatchContainer>
    );
  }
}

export default NoMatch;
