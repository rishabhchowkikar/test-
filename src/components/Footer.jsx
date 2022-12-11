import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../style/Button";
import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Lets Start the Tutorial</h3>
            <h3>Hurry up! Call our Team Now</h3>
          </div>

          <div>
            <NavLink to="/">
              <Button>Let's Start</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section */}
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Tech Founder</h3>
            <p>We Welcomes you in world of Programming</p>
          </div>

          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                placeholder="Email"
                required
                autoComplete="off"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>

              <div>
                <FaInstagram className="icons" />
              </div>

              <div>
                <FaFacebook className="icons" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    border: 1px solid red;
    max-width: 60vw;
    margin: 2rem 15rem;
    padding: 3rem 5rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    // transform: translateY(50%);
    height: 10vh;

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    height: 40vh;
    border: 1px solid blue;
    padding: 20px 0 20px 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    footer-about {
      display: none;
    }

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 1.2rem;
          position: relative;
          cursor: pointer;
        }

        .icons:hover {
          color: black;
        }
      }
    }
  }
`;
export default Footer;
