import React from "react";

const Paragraph = props => {
  return (
    <p id={props.id} className="button">
      {props.text}
    </p>
  );
};

export default Paragraph;
