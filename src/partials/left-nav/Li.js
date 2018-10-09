import React from "react";
// import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Li = props => {
  return (
    <li className="nav-item" data-menuanchor={props.item}>
      <AnchorLink href={`${props.url}`}>
        <span className="txt">{props.item}</span>
      </AnchorLink>
    </li>
  );
};

export default Li;
