import BannerHeading from "../components/bannerHeading/bannerHeading";
import ServicePanel from "./../components/servicePanel/servicePanel";
import CardPanel from "./../components/cardPanel/cardPanel";
import Line from "../components/common/line/line";
import Navbar from "../components/navbar/navbar";
import Works from "../components/works/works";
import "./home.scss";
import About from "./../components/about/about";

import Heading from "../components/common/heading/heading";

import TestimonialCard from "../components/cards/testimonialCard/testimonialCard";
import SimpleSlider from "./../components/carousel/carousel";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <Navbar />
        <BannerHeading />
        <CardPanel />
        <Line />
        <br />
        <br />
      </div>
      <div className="services">
        <ServicePanel />
      </div>
      <Works />
      <About />

      <SimpleSlider />

      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3">
            <TestimonialCard />
          </div>
          <div className="col-xl-3">
            <TestimonialCard />
          </div>
          <div className="col-xl-3">
            <TestimonialCard />
          </div>
        </div>
      </div> */}

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
