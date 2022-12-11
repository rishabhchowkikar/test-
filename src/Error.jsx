import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./style/Button";
// import { NavLink } from "react-router-dom";

function Error() {
  return (
    <Wrapper>
      <img src="/error.svg" alt="error" />
      <NavLink to="/">
        <Button className="btn">Go Back</Button>
      </NavLink>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    font-size: 1rem;
    margin-top: 3rem;
  }
`;
export default Error;
