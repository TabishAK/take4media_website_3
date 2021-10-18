import "./heading.scss";
const Heading = ({ heading, subHeading }) => {
  return (
    <div>
      <div className="heading">
        <span></span>
        <h1>{heading}</h1>
      </div>
      <h3>{subHeading}</h3>
    </div>
  );
};

export default Heading;
