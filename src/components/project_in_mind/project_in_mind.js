import "./project_in_mind.scss";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import Button from "../../components/common/button/button";
import Line from "../common/line/line";
const ProjectInMind = () => {
  return (
    <div className="project-in-mind">
      <Line />
      <span className="social-media-icons">
        <BsFacebook />
        <BsTwitter />
        <BsInstagram />
        <BsYoutube />
      </span>
      <h1>Have any project in mind?</h1>
      <center>
        <Button label="MAKE INQUIRY" style={{ marginBottom: "12rem" }} />
      </center>
    </div>
  );
};

export default ProjectInMind;
