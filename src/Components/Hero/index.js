import React from "react";
import { HeroContainer } from "./Hero.styles";
import { ReactComponent as HeroBg } from "../../assets/hero.svg";

function Hero() {
  return (
    <HeroContainer>
      <div className="hero-text">
        <p className="name-intro">
          Hi ! <br />
          I'm <span>Aakash.</span>
          <br />
        </p>
        <p className="about-intro">
          I'm a <br /> <span>Fullstack Developer.</span>
        </p>
      </div>
      <div className="hero-image-container">
        <HeroBg className="hero-image" />
      </div>
    </HeroContainer>
  );
}

export default Hero;
