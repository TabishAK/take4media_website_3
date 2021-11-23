import ServiceBanner from "../../components/service-page-component/service-banner";
import HelpFromExperts from "../../components/service-page-component/help-from-experts";
import KeyFeatures from "../../components/service-page-component/key-features";
import DiscoverServices from "../../components/service-page-component/discover-services";
import hero from "../../images/services/hero.png";
import "./services.scss";
import Footer from "./../../components/footer/footer";
import ProjectInMind from "../../components/project_in_mind/project_in_mind";
import Line from "../../components/common/line/line";
const Services = () => {
  return (
    <div className="service-page-1">
      <ServiceBanner />

      <HelpFromExperts />
      <KeyFeatures />
      <DiscoverServices />
      <div className="how-to-use">
        <Line top={35} />
        <div className="container how-to-use-box">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-2">
              <img src={hero} alt="" />
            </div>
            <div className="col-xl-10 col-lg-10 col-md-10">
              <h1>How to use the Service Provider Network</h1>

              <div className="step step-1">
                <h5>Step 1</h5>
                <h6>Become an Amazon Seller</h6>
              </div>
              <div className="step step-2">
                <h5>Step 2</h5>
                <p>
                  Visit the SPN website and select the service category you
                  want.
                </p>
              </div>
              <div className="step step-3">
                <h5>Step 3</h5>
                <p>
                  Filter results by service type, location, language, and
                  reviews to find what you need.
                </p>
              </div>
              <div className="step step-4">
                <h5>Step 4</h5>
                <p>
                  Once you find the service that you’re interested in, click
                  “Contact Provider” to raise a service request.
                </p>
              </div>
              <div className="step step-5">
                <h5>Step 5</h5>
                <p>The provider will contact you back.</p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <ProjectInMind
        data={{
          heading: "Start your Journey with us!",
          para: "Put your products in front of the millions of customers who search Amazon every day.",
          buttonLabel: "Find Service Providers",
        }}
        showSocialMedia={false}
      />

      <Footer />
    </div>
  );
};

export default Services;
