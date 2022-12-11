import React from "react";
// import "./styles/services.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import { Button } from "./style/Button";
import rishabh from "../userdata/userapi.json";

const Services = () => {
  const { services } = useGlobalContext();
  console.log(services);
  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Services</h2>
      <div className="container grid grid-three-column">
        {rishabh.map((data) => {
          return (
            <>
              <div key={data.id} className="card">
                <figure className="fig">
                  <img src={data.image} alt="imageh" />
                </figure>
                <div className="card-data">
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                  <NavLink to="/service">
                    <Button className="btn" to="/about">
                      Read More
                    </Button>
                  </NavLink>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100vh;
  ::-webkit-scrollbar {
    display: none;
  }

  .container {
    max-width: 120rem;
    display: center;
    justify-content: center;
  }

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 0.1rem solid white;
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  .fig {
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover img {
      transform: scale(1.2);
    }

    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  .data.title {
  }
`;
export default Services;
