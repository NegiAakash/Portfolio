import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100vh;
  padding: 5rem 10rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  overflow: hidden;
  background: var(--bg);
  color: var(--text);
  /* border-bottom: 2px solid white; */
  .hero-image-container {
    width: 100vh;
    .hero-image {
      width: 100vh;
    }
  }
  p {
    font-size: var(--fontHero);
    span {
      color: var(--highlight);
    }
  }

  @media screen and (max-width: 768px) {
    padding: 5rem 2rem;
    .hero-image-container {
      width: 80vh;
      .hero-image {
        width: 80vh;
      }
    }
  }

  @media screen and (max-width: 500px) {
    padding: 0 2rem;
    /* background: red; */
    padding-top: 5rem;
    .hero-image {
      /* background: red; */
      height: 50%;
    }
    p {
      font-size: 3rem;
      span {
        color: var(--highlight);
      }
    }
  }
`;
