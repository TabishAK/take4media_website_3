import "./footer.scss";
import { BsTelephone, BsCalendarCheck } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import logo from "../../images/logo/t4m_logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <img src={logo} alt="" />
            <p>We are more than a digital agency.</p>
            <hr />
          </div>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 left">
                <h3>CONTACT US</h3>
                <span>
                  <BsTelephone />
                  <h6> +92-213-5250709</h6>
                </span>
                <span>
                  <AiOutlineMail />
                  <h6> anymail@ take4media. com</h6>
                </span>
                <span>
                  <GoLocation />
                  <h6> Bukhari Commercial, DHA, Karachi</h6>
                </span>
                <span>
                  <BsCalendarCheck />
                  <h6> Monday to Friday</h6>
                </span>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 our-services">
                <h3>OUR SERVICES</h3>
                <span>
                  <h6>Single Project</h6>
                </span>
                <span>
                  <h6> Service 1</h6>
                </span>
                <span>
                  <h6> Service 2</h6>
                </span>
                <span>
                  <h6> Service 3</h6>
                </span>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-12 col-md-4 col-xs-12 right">
                <h3>ABOUT US</h3>
                <span>
                  <h6>About Us</h6>
                </span>
                <span>
                  <h6> Blog</h6>
                </span>
                <span>
                  <h6> Contact Us</h6>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <hr />

      <div className="container">
        <ul className="sub-footer">
          <li>Copyright 2020 All rights reserved</li>
          <li>PRIVACY POLICY</li>
          <li>TERMS OF USE</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
