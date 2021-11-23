import { GiWorld } from "react-icons/gi";
import { AiFillCustomerService } from "react-icons/ai";
import "./style.scss";
import { GoVerified } from "react-icons/go";
import Line from "../common/line/line";
const KeyFeatures = () => {
  return (
    <div className="key-features">
      <div className="container key-features-box">
        <div className="row">
          <h1>Key Features</h1>
          <div className="col-xl-4 col-lg-4">
            <GoVerified />

            <h6>Verified Peer Reviews</h6>
            <p>
              View feedback and ratings by sellers to make an informed decision
            </p>
          </div>
          <div className="col-xl-4 col-lg-4">
            <AiFillCustomerService />

            <h6>Qualified Service Providers</h6>
            <p>
              Service providers need to meet a pre-defined criteria to be listed
              on SPN
            </p>
          </div>
          <div className="col-xl-4 col-lg-4">
            <GiWorld />

            <h6>Global Reach</h6>
            <p>
              850+ service providers supporting your business across 21
              countries
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Line top={-45} />
    </div>
  );
};

export default KeyFeatures;
