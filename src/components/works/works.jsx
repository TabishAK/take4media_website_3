import Accordian from "../accordian/accordian";
import Heading from "../common/heading/heading";
import Button from "../common/button/button";
import Line from "../common/line/line";
import "./works.scss";

const Works = () => {
  return (
    <div className="works">
      <div className="container">
        <Heading heading="Works." subHeading="THINGS WE'VE MADE" />
        <Button label="VIEW ALL" />
      </div>
      <Accordian />
      <br />
      <Line />
    </div>
  );
};

export default Works;
