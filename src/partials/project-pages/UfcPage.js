import React from "react";
import { Link } from "react-router-dom";

class UfcPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>UFCCCC</h1>
        <Link to={`/`}>Home</Link>
      </React.Fragment>
    );
  }
}

export default UfcPage;
