import Navbar from "./../../components/navbar/navbar";
import logo from "../../images/logo/t4m_logo.png";
import Button from "../../components/common/button/button";
import "./style.scss";
const ServiceBanner = () => {
  return (
    <div className="service-banner">
      <Navbar />
      <div className="container">
        <div className="service-heading">
          <h1>Amazon Services.</h1>
        </div>

        <h1 className="service-provider-heading">
          Service Provider <br /> Network
        </h1>

        <p>A one-stop shop for running your e-commerce business on Amazon</p>
        <Button label="Find your service provider" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ServiceBanner;
