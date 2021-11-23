import "./bannerHeading.scss";
import Button from "../common/button/button";
const BannerHeading = () => {
  return (
    <div className="container con">
      <h3>Creative minds, creative works.</h3>
      <h1>
        We are digital
        <br /> agency.
      </h1>

      <Button style={{ marginTop: 50 }} label="Get Started" />
    </div>
  );
};

export default BannerHeading;
