import styled from "styled-components";

export const NavbarContainer = styled.nav`
  /* height: 5vh; */
  background: var(--bg);
  color: var(--text);
  display: flex;
  flex-direction: row;

  .theme-slider {
    background: ${({ dark }) => (dark ? "var(--s-bg)" : "var(--color1)")};
    margin-left: auto;
    width: 4rem;
    height: 2rem;
    border-radius: 2rem;
    margin-top: 1rem;
    display: flex;
    transition: background 0.5s ease-in;

    align-items: center;

    .button {
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 50%;
      /* margin: 0 0.1rem; */
      transition: all 0.5s ease-in;
      margin-left: ${({ dark }) => (dark ? "40%" : "0")};
      background: ${({ dark }) => (dark ? "var(--color1)" : "var(--s-bg)")};
      display: flex;
      align-items: center;
      justify-content: center;

      .icon {
        width: 1.5rem;
      }
    }
  }

  .ham {
    position: ${({ open }) => (open ? "fixed" : "relative")};
    right: ${({ open }) => (open ? "0" : "0")};

    margin-left: auto;
    margin-right: 0.5rem;
    padding: 1rem 0.5rem;
    cursor: pointer;
    z-index: 3;

    .line {
      /* display: ${({ open }) => (open ? "none" : "block")}; */
      background: white;
      width: 30px;
      height: 3px;
      margin: 5px;
      border-radius: 5px;
      transform-origin: 4px;
      transition: all 1s ease-in-out;

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

    :hover {
      .line {
        background: var(--highlight);
      }
    }
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  width: 50%;
  padding: 1rem;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: 2rem;
  pointer-events: none;
  pointer-events: all;
  position: fixed;
  background: var(--s-bg);

  height: 100vh;
  width: 100%;
  flex-direction: column;
  z-index: 2;
  transition: 1s ease-out;

  clip-path: circle(${({ open }) => (open ? "150vw" : "0px")} at 100% 0%);
  -webkit-clip-path: circle(
    ${({ open }) => (open ? "150vw" : "0px")} at 100% 0%
  );

  @media screen and (max-width: 768px) {
    clip-path: circle(${({ open }) => (open ? "1200px" : "0px")} at 100% 0%);
    -webkit-clip-path: circle(
      ${({ open }) => (open ? "1200px" : "0px")} at 100% 0%
    );
  }
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const NavbarItem = styled.li`
  /* background: blue; */
  /* padding: 1rem 5rem; */
  width: 20rem;
  height: 5rem;
  font-size: 2rem;
  font-weight: bold;
  color: var(--text);
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-transform: capitalize;
  letter-spacing: 0.2rem;

  :not(:first-child) {
    margin-top: 1rem;
  }
  :hover {
    color: var(--highlight);
    /* border-bottom: 2px solid var(--highlight); */
  }
`;

export const NavbarLink = styled.a`
  text-decoration: none;
  /* font-size: 1rem; */
  /* cursor: pointer; */
`;

export const NavbarLogo = styled.strong`
  /* background: blue; */
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text);
  padding: 0.5rem;
  margin-left: 1rem;
  padding: 1rem;
`;
