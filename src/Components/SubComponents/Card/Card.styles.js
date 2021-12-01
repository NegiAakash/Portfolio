import styled from "styled-components";

export const CardContainer = styled.div`
  background: teal;
  border: 1px solid white;
  width: 20rem;
  /* height: 20rem; */
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  /* padding: 1rem; */

  .body {
    background: grey;

    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    p {
      color: white;
    }
    padding: 1rem;
  }
`;

export const CardTitle = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

export const CardContent = styled.span`
  display: none;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: justify;
`;

export const CardButton = styled.button`
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;

  margin: 0.5rem;
  cursor: pointer;
`;

export const TechIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: var(--lightGre);

  .icon {
    width: 2rem;
    height: 2rem;
    margin: 0.5rem;
  }
`;
