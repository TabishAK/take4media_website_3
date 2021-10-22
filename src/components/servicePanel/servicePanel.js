import "./servicePanel.scss";
import {
  BsBarChartLine,
  BsFillPencilFill,
  BsGlobe,
  BsBookmarkCheck,
} from "react-icons/bs";

import { ImUsers } from "react-icons/im";
import { RiBarChartFill } from "react-icons/ri";
import Heading from "../common/heading/heading";
import ServiceCard from "../cards/serviceCard/serviceCard";
import Line from "../common/line/line";
const ServicePanel = () => {
  return (
    <>
      <div className="container">
        <Heading heading="Services." />

        <div className="row ">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <ServiceCard
              heading="Digital Strategy"
              icon={<BsBarChartLine />}
              paragraph=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
    luctus."
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <ServiceCard
              heading="UX Design"
              icon={<BsFillPencilFill />}
              paragraph=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
    luctus."
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <ServiceCard
              class="different"
              heading="UI Design"
              icon={<ImUsers style={{ fill: "white" }} />}
              paragraph=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
    luctus."
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
            <ServiceCard
              heading="Social Media"
              icon={<BsGlobe />}
              paragraph=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
    luctus."
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <ServiceCard
              heading="Design Concept"
              icon={<BsBookmarkCheck />}
              paragraph=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
    luctus."
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <ServiceCard
              heading="Media Pairing"
              icon={<RiBarChartFill />}
              paragraph=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
    luctus."
            />
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <Line />

      <br />
      <br />
      <br />
    </>
  );
};

export default ServicePanel;
