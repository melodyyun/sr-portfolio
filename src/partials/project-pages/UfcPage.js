import React from "react";
import { Link } from "react-router-dom";
import Button from "../utility/Button";

class UfcPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* how to get get this.props.link  here? from projects page*/}
        <Link to={`/info/${this.props.link}`}>
          <h1>UFCCCC</h1>
        </Link>
        <Button href="/" text={"Back"} />
      </React.Fragment>
    );
  }
}

export default UfcPage;
