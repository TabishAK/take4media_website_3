import "./amazon-how-we-help.scss";
import BannerCard from "./../../../components/cards/bannerCard/bannerCard";
import { GiStumpRegrowth } from "react-icons/gi";
import { FaEye, FaHandshake } from "react-icons/fa";
import { SiInfluxdb } from "react-icons/si";
import Heading from "./../../common/heading/heading";
import Fade from "react-reveal/Fade";

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
            <Fade duration={2000} delay={300} big>
              <BannerCard
                class="cards"
                name="Grow"
                icon={<GiStumpRegrowth />}
              />
            </Fade>
          </div>
          <div className="mb-4 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <Fade duration={2000} delay={400} big>
              <BannerCard class="cards" name="Monetize" icon={<FaEye />} />
            </Fade>
          </div>
          <div className="mb-4 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <Fade duration={2000} delay={500} big>
              <BannerCard class="cards" name="Engage" icon={<FaHandshake />} />
            </Fade>
          </div>
          <div className="mb-4 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <Fade duration={2000} delay={600} big>
              <BannerCard
                class="cards"
                name="Influence"
                icon={<SiInfluxdb />}
              />
            </Fade>
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
