import React from "react";
import { NavbarContainer, StyledBurger, StyledMenu } from "./Navbar.styles";

export const NavComp = () => {
  const [active, setActive] = React.useState(false);
  return (
    <NavbarContainer>
      <span>Aakash Negi</span>
      <StyledMenu open={active}>
        <a href="#home">Home</a>
        <a href="#about">About me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact me</a>
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
