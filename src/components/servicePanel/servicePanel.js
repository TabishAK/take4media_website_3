import "./servicePanel.scss";
import { BsBarChartLine, BsFillPencilFill } from "react-icons/bs";
import { ImUsers } from "react-icons/im";
import Heading from "../common/heading/heading";
import ServiceCard from "../cards/serviceCard/serviceCard";
import Line from "../common/line/line";
import { Link } from "react-router-dom";

const ServicePanel = () => {
  return (
    <>
      <div className="container">
        <Heading heading="Services." />

        <div className="row service-row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Link to="/creative-services">
              <ServiceCard
                heading="Creative Service"
                icon={<BsBarChartLine />}
                paragraph=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
    luctus."
              />
            </Link>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Link to="/amazon-services">
              <ServiceCard
                heading="Amazon Services"
                icon={<BsFillPencilFill />}
                paragraph=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
    luctus."
              />
            </Link>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Link to="/social-media-services">
              <ServiceCard
                heading="Social Media Marketing"
                icon={<ImUsers style={{ fill: "white" }} />}
                paragraph=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
    luctus."
              />
            </Link>
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
