import logo from "../../images/logo/t4m_logo.png";
import { NavLink } from "react-router-dom";
// import Slide from "react-reveal/Slide";
import React from "react";
import "./navbar.scss";

const Navbar = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav
        className="navbar"
        style={{ zIndex: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <Slide duration={2500} top> */}
        <div className="nav-container">
          {/* <Slide duration={1200} top> */}
          <NavLink exact to="/" className="nav-logo">
            <img style={{ width: 280 }} src={logo} alt="logo" />
          </NavLink>
          {/* </Slide> */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* <Slide duration={1500} delay={200} top> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            {/* </Slide> */}
            {/* <Slide duration={1500} delay={300} top> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Services
              </NavLink>
            </li>{" "}
            {/* </Slide>{" "} */}
            {/* <Slide duration={1500} delay={400} top> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/work"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Work
              </NavLink>
            </li>{" "}
            {/* </Slide>{" "} */}
            {/* <Slide duration={1500} delay={500} top> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/about-us"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            {/* </Slide> */}
            {/* <Slide duration={1500} delay={600} top> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </NavLink>
            </li>
            {/* </Slide> */}
            {/* <Slide duration={1500} delay={700} top> */}
            <li className="nav-item no-hover">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links contact-link"
                onClick={click ? handleClick : null}
              >
                Contact
              </NavLink>
            </li>
            {/* </Slide> */}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>{" "}
        {/* </Slide> */}
      </nav>
    </div>
  );
};

export default Navbar;
