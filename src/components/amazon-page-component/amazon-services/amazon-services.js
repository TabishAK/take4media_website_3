import "./amazon-services.scss";
import ServiceCard from "./../../cards/serviceCard/serviceCard";
import { GiArchiveResearch, GiPublicSpeaker } from "react-icons/gi";
import {
  MdSocialDistance,
  MdPaid,
  MdScreenSearchDesktop,
  MdMarkEmailUnread,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";

import { SiInfluxdb } from "react-icons/si";
import Line from "./../../common/line/line";
const AmazonServices = () => {
  return (
    <div className="amazon-services">
      <Line top={40} />
      <h1>Our Services</h1>
      <h6>We Provide the best service to our customers.</h6>

      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <ServiceCard
              heading="Research"
              icon={<GiArchiveResearch />}
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <ServiceCard
              heading="Social media"
              icon={<MdSocialDistance />}
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <ServiceCard
              heading="All Paid Media Buying"
              icon={<MdPaid />}
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <ServiceCard
              heading="Website SEO"
              icon={<MdScreenSearchDesktop />}
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <ServiceCard
              heading="Email Marketing"
              icon={<MdMarkEmailUnread />}
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <ServiceCard
              heading="Product Launching"
              icon={<MdOutlineProductionQuantityLimits />}
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
            />
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <ServiceCard
              heading="Public Relations"
              icon={<GiPublicSpeaker />}
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <ServiceCard
              heading="Influencer Marketing"
              icon={<SiInfluxdb />}
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazonServices;
