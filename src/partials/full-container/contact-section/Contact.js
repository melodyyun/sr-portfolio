import React from "react";
import styled from "styled-components";
import Button from "../../utility/Button";

const ContactContainer = styled.div`
  color: white;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Button href="#home" text={"Back To Top"} />
    </ContactContainer>
  );
};

export default Contact;
