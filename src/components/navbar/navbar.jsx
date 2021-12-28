import "./navbar.scss";
import React from "react";
import { Link } from "react-scroll";
import { Link as Goto } from "react-router-dom";

import logo from "../../images/logo/t4m_logo.png";
import Slide from "react-reveal/Slide";
const Navbar = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <Slide duration={2500} top>
          <div className="nav-container">
            <Slide duration={1200} top>
              <Goto spy={true} to="/" className="nav-logo">
                <img style={{ width: 280 }} src={logo} alt="logo" />
              </Goto>
            </Slide>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <Slide duration={1500} delay={200} top>
                <li className="nav-item">
                  <Link
                    spy={true}
                    to="/"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Home
                  </Link>
                </li>
              </Slide>
              <Slide duration={1500} delay={300} top>
                <li className="nav-item">
                  <Link
                    offset={-50}
                    spy={true}
                    to="services"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Services
                  </Link>
                </li>
              </Slide>
              <Slide duration={1500} delay={400} top>
                <li className="nav-item">
                  <Link
                    spy={true}
                    to="work"
                    offset={100}
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Work
                  </Link>
                </li>
              </Slide>
              <Slide duration={1500} delay={500} top>
                <li className="nav-item">
                  <Link
                    spy={true}
                    offset={70}
                    to="about"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    About
                  </Link>
                </li>
              </Slide>
              <Slide duration={1500} delay={600} top>
                <li className="nav-item">
                  <Link
                    spy={true}
                    to="blog"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Blog
                  </Link>
                </li>
              </Slide>
              <Slide duration={1500} delay={700} top>
                <li className="nav-item no-hover">
                  <Link
                    spy={true}
                    offset={-200}
                    to="contact"
                    activeClassName="active"
                    className="nav-links contact-link"
                    onClick={click ? handleClick : null}
                  >
                    Contact
                  </Link>
                </li>
              </Slide>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </Slide>
      </nav>
    </div>
  );
};

export default Navbar;
