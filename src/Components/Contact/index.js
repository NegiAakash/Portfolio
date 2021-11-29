import React from "react";
import {
  ContactWrapper,
  FieldWrapper,
  ImageWrapper,
  Wrapper,
} from "./Contact.styles";

import { ReactComponent as Contact } from "../../assets/contact.svg";

function Contacts() {
  return (
    <Wrapper>
      <ContactWrapper>
        <h2>Contact me</h2>
        <FieldWrapper>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          {/* <input type="text" placeholder="Subject" /> */}
          <textarea placeholder="Message" />
          <button>Send Message</button>
        </FieldWrapper>
      </ContactWrapper>
      <ImageWrapper>
        <Contact className="image" />
      </ImageWrapper>
    </Wrapper>
  );
}

export default Contacts;
