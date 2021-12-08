import "./amazon-how-we-help.scss";
import BannerCard from "./../../../components/cards/bannerCard/bannerCard";
import { GiStumpRegrowth } from "react-icons/gi";
import { FaEye, FaHandshake } from "react-icons/fa";
import { SiInfluxdb } from "react-icons/si";
import Line from "./../../common/line/line";
import Heading from "./../../common/heading/heading";
const AmazonHowWeHelp = () => {
  return (
    <div className="amazon-how-we-help">
      <div className="container">
        <Heading
          heading="When are we right for you?"
          subHeading="Simplifying your growth strategy.  "
        />
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="mb-4 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <BannerCard class="cards" name="Grow" icon={<GiStumpRegrowth />} />
          </div>
          <div className="mb-4 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <BannerCard class="cards" name="Monetize" icon={<FaEye />} />
          </div>
          <div className="mb-4 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <BannerCard class="cards" name="Engage" icon={<FaHandshake />} />
          </div>
          <div className="mb-4 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <BannerCard class="cards" name="Influence" icon={<SiInfluxdb />} />
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AmazonHowWeHelp;
