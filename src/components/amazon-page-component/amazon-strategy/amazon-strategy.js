import "./amazon-strategy.scss";
import Line from "./../../../components/common/line/line";
import creativeImage from "../../../images/creative-page/1.png";
import creativeImage2 from "../../../images/creative-page/2.png";

const AmazonStrategies = () => {
  return (
    <div className="amazon-strategies">
      <Line top={40} />
      <div className="container">
        <h1 className="main-heading">Our Strategy</h1>
        <h6 className="sub-heading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
          luctus.
        </h6>

        <div className="row middle-row">
          <div className="col-xl-6 col-lg-6 col-md-6 brain-storming-section">
            <img className="brain-storming" src={creativeImage} alt="" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <h6>Proven Organic SEO</h6>
            <h1>Brain Storming.</h1>
            <p>
              Get more qualified traffic on the search terms that matter most to
              your business. We achieve measurable results by working on every
              variable that impacts SERPs. Trust our proven track record to
              maximize your visibility online. Set your business up for
              long-term success.
            </p>
          </div>
        </div>

        <div className="row last-row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <h6>Results-Driven Website Design</h6>
            <h1>Get a beautiful website that wins customers.</h1>
            <p>
              Elevate your business with a trusted website that your customers
              will love. Our award-winning website designers will represent your
              brand in the best possible way. Your website will load extremely
              fast and look great on all devices.
            </p>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-6"
            style={{
              textAlign: "-webkit-center",
            }}
          >
            <img src={creativeImage2} alt="" className="dual" />
          </div>
        </div>

        <div className="row last-row">
          <div
            className="col-xl-6 col-lg-6 col-md-6"
            style={{
              textAlign: "-webkit-center",
            }}
          >
            <img src={creativeImage2} alt="" className="dual" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <h6>Results-Driven Website Design</h6>
            <h1>Get a beautiful website that wins customers.</h1>
            <p>
              Elevate your business with a trusted website that your customers
              will love. Our award-winning website designers will represent your
              brand in the best possible way. Your website will load extremely
              fast and look great on all devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazonStrategies;
