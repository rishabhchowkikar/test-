import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../style/Button";
import { useGlobalContext } from "../context";

// import { AppContext } from "../context";

// const HeroSection = ({ name, image }) => {
//   // const firstName = useContext(AppContext);
//   // const firstName = useGlobalContext();
//   const { fname, age } = useGlobalContext();

const HeroSection = () => {
  const { name, image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">This is ME</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            {/*I'm {fname} of age {age}*/} {name}. And currently pursuing B.Tech
            (C.S.E.) form a beautiful institute named Central University of
            Haryana, also a reputed member of BYTECODE LEARNERS, And a full
            stack Web Developer and Influencer. <br />
            <br /> Here you can gain valueable information regarding progrmming
            in different fields and may found valueable and requried lecture for
            respected course you selected with complete source code.
          </p>

          <Button className="btn hireme-btn">
            <NavLink to="/contact">hire me</NavLink>
          </Button>
        </div>

        <div className="section-hero-image">
          <picture>
            <img
              src={image}
              alt="hero image"
              className=".hero-img"
              height={655}
            />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 4.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    font-size: 1.3rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
    border-radius: 25px;
  }

  .hero-img {
    max-width: 80%;

    border-radius: 25px;
  }
`;
export default HeroSection;
