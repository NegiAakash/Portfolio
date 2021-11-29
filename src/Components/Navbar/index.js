import React from "react";
import { NavbarContainer, StyledBurger, StyledMenu } from "./Navbar.styles";

export const NavComp = () => {
  const [active, setActive] = React.useState(false);
  return (
    <NavbarContainer>
      <span>Aakash Negi</span>
      <StyledMenu open={active}>
        <a href="#home" onClick={() => setActive(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setActive(false)}>
          About me
        </a>
        <a href="#skills" onClick={() => setActive(false)}>
          Skills
        </a>
        <a href="#projects" onClick={() => setActive(false)}>
          Projects
        </a>
        <a href="#resume" onClick={() => setActive(false)}>
          Resume
        </a>
        <a href="#contact" onClick={() => setActive(false)}>
          Contact me
        </a>
      </StyledMenu>
      <StyledBurger
        className="ham-hidden"
        open={active}
        onClick={() => setActive(!active)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
    </NavbarContainer>
  );
};
