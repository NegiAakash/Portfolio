import styled from "styled-components";

export const AboutContainer = styled.section`
  /* height: 100vh; */
  /* background: teal; */
  padding: 2rem 10rem;
  color: black;
  display: grid;
  grid-template-columns: auto 1fr;

  /* border-bottom: 2px solid white; */

  .title {
    background-color: red;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    border-right: 2px solid teal;
  }

  .body {
    padding: 1rem 2rem;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;
