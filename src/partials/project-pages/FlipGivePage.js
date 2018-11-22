import React from "react";
import { Link } from "react-router-dom";

class FlipGivePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>FlipGive</h1>
        <Link to={`/`}>Home</Link>
      </React.Fragment>
    );
  }
}

export default FlipGivePage;
