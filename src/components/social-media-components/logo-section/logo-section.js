import "./logo-section.scss";
import amazon from "../../../images/logo/partners-logo/amazon.png";
import fb from "../../../images/logo/partners-logo/fb.png";
import google from "../../../images/logo/partners-logo/google.png";
import trust from "../../../images/logo/partners-logo/trust.png";
import clutch from "../../../images/logo/partners-logo/clutch.png";
import Line from "./../../../components/common/line/line";
const LogoSection = () => {
  return (
    <div className="logo-section">
      <Line top={30} />
      <h6>Proud Marketing Partners with</h6>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={amazon} alt="" />
          </div>
          <div className="col">
            <img src={fb} alt="" />
          </div>
          <div className="col">
            <img src={google} alt="" />
          </div>
          <div className="col">
            <img src={trust} alt="" />
          </div>
          <div className="col">
            <img src={clutch} alt="" />
          </div>
        </div>
        <div className="row" style={{ marginBottom: "5rem" }}>
          <div className="col">
            <img src={google} alt="" />
          </div>
          <div className="col">
            <img src={clutch} alt="" />
          </div>
          <div className="col">
            <img src={trust} alt="" />
          </div>
          <div className="col">
            <img src={amazon} alt="" />
          </div>
          <div className="col">
            <img src={fb} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
