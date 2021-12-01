import "./creative-services.scss";
import { MdAnimation } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { BsTextParagraph } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import Line from "./../../common/line/line";
import PlusDetail from "./../plus-detail/plus-detail";
const CreativeServices = () => {
  return (
    <div className="creative-services">
      <Line top={40} />
      <h1>Our Services</h1>
      <h6>We Provide the best service to our customers.</h6>

      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 service-1">
            <PlusDetail
              icon={<GiBrain />}
              heading="All Creatives"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
              arcu luctus."
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 service-2 border-left">
            <PlusDetail
              icon={<MdAnimation />}
              heading="Animation"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
              arcu luctus."
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 service-3 border-top">
            <PlusDetail
              icon={<BsTextParagraph />}
              heading="Branding Content Creation"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
              arcu luctus."
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 service-4 border-left border-top">
            <PlusDetail
              icon={<FiMonitor />}
              heading="TVC"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
              arcu luctus."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeServices;
