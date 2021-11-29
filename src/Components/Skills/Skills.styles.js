import styled from "styled-components";

export const SkillsContainer = styled.div`
  padding: 2rem 10rem;
  color: black;
  display: grid;
  grid-template-columns: auto 1fr;
  background: linear-gradient(to bottom, var(--lightTomato), var(--lightGrey));

  .title {
    /* background-color: red; 0*/
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    border-left: 2px solid teal;
  }

  .body {
    padding: 1rem 2rem;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;
