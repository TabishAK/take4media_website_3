import "./creative-business-process.scss";
import { MdAnimation } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { BsTextParagraph } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import Line from "./../../common/line/line";
import PlusDetail from "./../plus-detail/plus-detail";

const CreativeBuisnessProcess = () => {
  return (
    <div className="creative-business-process">
      <Line top={40} />
      <h1>When are we right for you?</h1>
      <h6>Simplifying your growth strategy</h6>

      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 process-1">
            <div className="processes">
              <MdAnimation />
              <h4>Grow</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 process-2">
            <div className="processes">
              <GiBrain />
              <h4>Monetize</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 process-3">
            <div className="processes">
              <BsTextParagraph />
              <h4>Engage</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 process-4">
            <div className="processes">
              <FiMonitor />
              <h4>Influence</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeBuisnessProcess;
