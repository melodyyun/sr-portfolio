import React from "react";
// import styled from "styled-components";

const Li = props => {
  return (
    <li className="nav-item" data-menuanchor={props.item}>
      <a href={`${props.url}`}>
        <span className="txt">{props.item}</span>
      </a>
    </li>
  );
};

export default Li;
