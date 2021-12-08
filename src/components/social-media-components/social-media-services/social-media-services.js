import "./social-media-services.scss";
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
import Heading from "./../../common/heading/heading";
const SocialMediaServices = () => {
  return (
    <div className="social-media-services">
      <div className="container">
        <Heading
          heading="Our Services"
          subHeading="We Provide the best service to our customers."
        />
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

export default SocialMediaServices;
