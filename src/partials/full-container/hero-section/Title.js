import React from "react";
import styled from "styled-components";
import Button from "../../utility/Button";

const MainTitle = styled.div`
  padding-top: 150px;
  max-width: 650px;
  margin-left: 200px;
  color: ${props => props.theme.white};
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
    top: 190px;
    left: 250px;
  }
  .title {
    font-size: 90px;
    max-width: 200px;
    font-weight: 700;
  }
  .sub-heading {
    font-size: 20px;
    font-weight: 500;
  }
`;

const Title = () => {
  return (
    <MainTitle className="title-container">
      <div className="title">Saad Rahman.</div>
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
