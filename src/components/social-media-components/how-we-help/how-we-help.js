import "./how-we-help.scss";
import BannerCard from "./../../../components/cards/bannerCard/bannerCard";
import { GiStumpRegrowth } from "react-icons/gi";
import { FaEye, FaHandshake } from "react-icons/fa";
import { SiInfluxdb } from "react-icons/si";
import Line from "./../../common/line/line";
const HowWeHelp = () => {
  return (
    <div className="how-we-help">
      <Line top={40} />
      <h6>Simplifying your growth strategy.</h6>
      <h1>When are we right for you?</h1>

      <div className="container">
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

export default HowWeHelp;
