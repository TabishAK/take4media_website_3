import "./project_in_mind.scss";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import Button from "../../components/common/button/button";
import Line from "../common/line/line";
const ProjectInMind = (props) => {
  return (
    <div className="project-in-mind">
      <Line top={props.top ? props.top : ""} />

      {props.showSocialMedia ? (
        <span className="social-media-icons">
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
          <BsYoutube />
        </span>
      ) : (
        ""
      )}

      <h1>{props.data.heading} </h1>

      {props.data.para ? (
        <h6 style={{ textAlign: "center", color: "white" }}>
          {props.data.para}
        </h6>
      ) : (
        ""
      )}

      <center>
        <Button
          label={props.data.buttonLabel}
          style={{ marginBottom: "12rem", marginTop: "2rem" }}
        />
      </center>
    </div>
  );
};

export default ProjectInMind;
