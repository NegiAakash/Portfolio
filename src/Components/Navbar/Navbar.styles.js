import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 0 5rem;
  .ham-hidden {
    display: none;
  }
  span {
    font-size: 2rem;
    font-weight: bold;
    padding: 2rem 5rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0 0;
    .ham-hidden {
      display: flex;
    }
    span {
      display: flex;
      align-items: flex-end;
      position: absolute;
      top: 5%;
      right: 0;
      /* background: red; */
      width: 80vw;
      height: auto;
      padding: 0 3rem;
      font-size: 2rem;
      font-weight: 800;
      z-index: 1;
      /* justify-content: ; */
    }
  }
`;
export const StyledMenu = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2rem;
  width: 50vw;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      color: #f7f7f7;

      border-top: 5px solid var(--orange);
      color: var(--orange);
      /* background: white;
      color: black; */
      transition: ease 0.1s;
    }
  }

  // For smaller screens
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--orange);
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    width: 50vw;
    height: 100vh;
    text-align: left;
    padding: 2rem 0;
    position: fixed;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 10;

    a {
      font-size: 2rem;
      text-transform: uppercase;
      padding: 2rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: white;
      text-decoration: none;
      transition: color 0.3s linear;
      /* border: 1px white solid; */
      width: 100%;
      @media (max-width: 768px) {
        font-size: 1.5rem;
        text-align: center;
      }

      :hover {
        color: #343078;
        background: white;
        color: black;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const StyledBurger = styled.button`
  // For smaller screens
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 5%;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: ${({ open }) => (open ? "white" : "#EFFFFA")};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;
