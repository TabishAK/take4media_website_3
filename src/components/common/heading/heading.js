import "./heading.scss";
import Slide from "react-reveal/Slide";
const Heading = ({ heading, subHeading }) => {
  return (
    <div>
      <Slide left duration={1200}>
        <div className="heading">
          <span></span>
          <h1>{heading}</h1>
        </div>
      </Slide>
      <Slide left delay={500} duration={1200}>
        <h3>{subHeading}</h3>
      </Slide>
    </div>
  );
};

export default Heading;
