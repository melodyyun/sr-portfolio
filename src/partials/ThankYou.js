import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ThankYouContainer = styled.div`
  background-image: url("../assets/images/contrast-sea-horizontal.jpg");
  height: 100vh;
  background-size: cover;

  .thank {
    color: whitesmoke;
    margin: 0;
    padding: 25px;
    text-align: center;
    font-size: 45px;
  }

  .link-tag {
    text-decoration: none;
    .back {
      color: ${prop => prop.theme.yellow};
      text-align: center;
      font-size: 34px;
    }
  }

  img {
    display: block;
    margin: 0 auto;
    height: 250px;
  }
`;

class ThankYou extends Component {
  render() {
    return (
      <ThankYouContainer>
        <h1 className="thank">Thank You!</h1>
        <Link className="link-tag" to={`/`}>
          <p className="back">Home</p>
        </Link>
        <img
          src="http://melodyyun.com/saad/assets/images/Thankyou.gif"
          alt="Leo says thank you"
        />
      </ThankYouContainer>
    );
  }
}

export default ThankYou;
