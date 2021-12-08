import "./style.scss";
import helpFromExpert from "../../images/services/help_from_experts.svg";
import Line from "../common/line/line";
import Heading from "./../common/heading/heading";
const HelpFromExperts = () => {
  return (
    <div className="help-from-experts">
      <div className="container help-from-experts-box">
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <Heading
              heading="Get Help from Experts"
              subHeading="Need help with listing your products?"
            />

            <p>
              Our network of qualified third party service providers will help
              you with everything you need to launch, manage and grow your
              business on Amazon. From shooting great images for your products
              to improving your chances of increasing sales on Amazon, our
              service providers help you with every step of selling online.
            </p>
          </div>
          <div className="col-xl-5 col-lg-6">
            <img src={helpFromExpert} alt="" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default HelpFromExperts;
