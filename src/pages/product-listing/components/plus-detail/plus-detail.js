import "./plus-detail.scss";
const PlusDetail = (props) => {
  return (
    <div className="creative-service-detail">
      {props.icon}
      <h4> {props.heading}</h4>
      <p>{props.paragraph}</p>
    </div>
  );
};

export default PlusDetail;
