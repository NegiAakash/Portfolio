import React from "react";
import { NavbarContainer, StyledBurger, StyledMenu } from "./Navbar.styles";

export const NavComp = () => {
  const [active, setActive] = React.useState(false);
  return (
    <NavbarContainer>
      <span>Aakash Negi</span>
      <StyledMenu open={active}>
        <a href="#home" onCLick={() => setActive(false)}>
          Home
        </a>
        <a href="#about" onCLick={() => setActive(false)}>
          About me
        </a>
        <a href="#skills" onCLick={() => setActive(false)}>
          Skills
        </a>
        <a href="#projects" onCLick={() => setActive(false)}>
          Projects
        </a>
        <a href="#resume" onCLick={() => setActive(false)}>
          Resume
        </a>
        <a href="#contact" onCLick={() => setActive(false)}>
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
