import React from "react";
import styled from "styled-components";
import Button from "../../utility/Button";

const MainTitle = styled.div`
  color: ${props => props.theme.white};
  max-width: 650px;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 200px;
    width: 250px;
    background-color: ${props => props.theme.white};
    opacity: 0.2;
    filter: alpha(opacity=20); /* For IE8 and earlier */
    transform: skewY(20deg);
    top: 10px;
    left: 40px;
  }

  .title {
    font-size: 90px;
    max-width: 200px;
    font-weight: 700;
    margin: 1rem 1rem 1rem 0;
  }

  .sub-heading {
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 20px;
  }
`;

const Title = () => {
  return (
    <MainTitle className="title-container">
      <h1 className="title">Saad Rahman.</h1>
      <p className="sub-heading">
        Likes: long walks on black sand beaches, pho, aspens
        <span role="img" aria-label="puppy emoji">
          🐶
        </span>
        . >>>>CLICK HERE FOR 20 REASONS YOU HAVE TO WORK WITH ME!!!!!! .
      </p>
      <Button text={"About"} />
    </MainTitle>
  );
};

export default Title;
