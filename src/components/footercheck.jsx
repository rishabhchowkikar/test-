import React from "react";
import { NavLink } from "react-router-dom";
import "../components/footer.css";
import { Button } from "../style/Button";
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footercheck = () => {
  return (
    <div className="hello">
      <div className="my">
        <div className="short">
          <div>
            <h3 className="h3">Lets Start the Tutorial</h3>
            <h2 className="h2">Hurry up! Call our Team Now</h2>
          </div>

          <div>
            <NavLink to="/">
              <Button>Let's Start</Button>
            </NavLink>
          </div>
        </div>
      </div>

      <footer>
        <div className="containerI">
          <div className="footer-about">
            <h3 className="rish">
              TECH FOUNDER{" "}
              <div className="underlinea">
                <span></span>
              </div>
            </h3>
            <p className="chow">
              We Welcome you in world <br /> of programming
            </p>
          </div>

          {/* <div className="footer-subscribe">
            <h3 className="rish">
              Subscribe to get important Updates <br /> and Feeds
            </h3>
            <form action="#">
              <input
                type="email"
                placeholder="Email"
                required
                autoComplete="off"
                className="Btn"
                height="10"
                width="30"
              />
              <NavLink>
                <Button>Subscribe</Button>
              </NavLink>
            </form>
          </div> */}

          <div className="footer-social">
            <h3 className="rishF">
              Follow Us{" "}
              <div className="underlinef">
                <span></span>
              </div>
            </h3>

            <div className="footer-social--icons">
              <a href="https://twitter.com/i/flow/login">
                <FaTwitter className="icons" />
              </a>

              <a href="https://www.instagram.com/">
                <FaInstagram className="icons" />
              </a>

              <a href="https://www.facebook.com/">
                <FaFacebook className="icons" />
              </a>
            </div>
          </div>

          <div className="contact-details">
            <h3 className="rish">
              Contact Details{" "}
              <div className="underlined">
                <span></span>
              </div>
            </h3>

            <p className="chow">
              Rishabh Chowkikar
              <br />
              Toll Free No. :- 1800-0742-31
            </p>
          </div>

          <div className="paid-tutorial">
            <h3 className="rishP">
              Paid Tutorial{" "}
              <div className="underlinet">
                <span></span>
              </div>
            </h3>
            <p className="chow">
              Web Development <br />
              App Development <br />
              Graphic Development <br />
              <NavLink to="/service">
                <a href="" className="hello">
                  Read More.
                </a>
              </NavLink>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footercheck;
