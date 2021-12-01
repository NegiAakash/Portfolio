import styled from "styled-components";

export const ProjectsContainer = styled.div`
  /* height: 100vh; */
  padding: 5rem 10rem;
  color: black;
  display: flex;
  flex-direction: column;
  /* border: 1px solid white; */

  background: linear-gradient(to bottom, var(--lightGrey), var(--darkBg));

  .cardContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    justify-items: center;
    align-items: center;
    margin-top: 2rem;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;
