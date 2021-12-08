import "./amazon-services.scss";
import ServiceCard from "./../../cards/serviceCard/serviceCard";
import { GiArchiveResearch } from "react-icons/gi";
import { SiMarketo } from "react-icons/si";
import { HiDocumentSearch } from "react-icons/hi";
import { FaAdversal, FaConnectdevelop } from "react-icons/fa";
import Heading from "../../common/heading/heading";

const AmazonServices = () => {
  return (
    <div className="amazon-services">
      <div className="container">
        <Heading
          heading="Our Services"
          subHeading="We Provide the best service to our customers."
        />
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <ServiceCard
              heading="Product Hunting"
              icon={<GiArchiveResearch />}
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <ServiceCard
              heading="Amazon SEO & Product Optimization"
              icon={<HiDocumentSearch />}
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <ServiceCard
              heading="Amazon Advertising Management"
              icon={<FaAdversal />}
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <ServiceCard
              heading="Amazon Stores & Marketplace Launch"
              icon={<SiMarketo />}
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <ServiceCard
              heading="Product Development"
              icon={<FaConnectdevelop />}
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazonServices;
