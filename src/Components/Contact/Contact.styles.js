import styled from "styled-components";

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  /* grid-column-gap: 10px; */
  padding: 2rem 10rem;
`;

export const ContactWrapper = styled.main`
  /* height: 0vh; */
  border: 1px solid white;
  width: 100%;
  /* height: 85%; */
  padding: 1rem 2rem;
  margin: 1rem 0;
  background: var(--lightGrey);
  border-radius: 5px 0 0 5px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 1rem 1rem;
  }
`;

export const ImageWrapper = styled.div`
  /* background-color: red; */
  border: 1px solid white;
  /* height: 85%; */
  width: 80%;
  padding: 1rem 2rem;
  margin: 1rem 0;
  background: var(--white);
  border-radius: 0 5px 5px 0;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  .image {
    width: 80%;
  }
`;

export const FieldWrapper = styled.div`
  input {
    width: 100%;
    height: 2rem;
    border: 1px solid white;
    border-radius: 5px;
    padding: 0.5rem;
    margin: 1rem 0;
  }

  textarea {
    width: 100%;
    height: 10rem;
    border: 1px solid white;
    border-radius: 5px;
    padding: 0.5rem;
    margin: 1rem 0;
  }

  button {
    width: 100%;
    background: transparent;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    padding: 0.5rem;
    margin: 1rem 0;
    font-size: 1.5rem;
    /* 
    :focus {
      background: var(--lightTomato);
      color: black;
      transition: 0.5s;
    } */
    :hover {
      background: var(--lightTomato);
      color: black;
      transition: 0.5s;
    }
  }
`;
