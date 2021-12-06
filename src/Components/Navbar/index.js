import React, { useState } from "react";
import {
  NavbarContainer,
  NavbarItem,
  NavbarLink,
  NavbarList,
  NavbarLogo,
} from "./Navbar.styles";
import { ReactComponent as Sun } from "../../assets/light.svg";
import { ReactComponent as Moon } from "../../assets/dark.svg";

export const NavComp = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);

  // console.log(open);
  return (
    //SECTION - Navbar Container
    <NavbarContainer open={open} dark={darkMode}>
      {/* SECTION - Logo */}
      <NavbarLogo>Aakash Negi</NavbarLogo>
      <div className="theme-slider">
        <div className="button" onClick={() => setDarkMode(!darkMode)}>
          {!darkMode ? <Sun className="icon" /> : <Moon className="icon" />}
        </div>
      </div>
      {/* SECTION - Hamburger Container */}
      <div className="ham" onClick={() => setOpen(!open)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* SECTION - Navbar List(ul) */}
      <NavbarList open={open}>
        {/* SECTION - Navbar Item(li) */}
        <NavbarItem>
          <NavbarLink href="#home" onClick={() => setOpen(false)}>
            Home
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#about" onClick={() => setOpen(false)}>
            About
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#skills" onClick={() => setOpen(false)}>
            Skills
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#projects" onClick={() => setOpen(false)}>
            Projects
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#resume" onClick={() => setOpen(false)}>
            Resume
          </NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#contact" onClick={() => setOpen(false)}>
            Contact
          </NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};
