import img1 from "../../images/blog/Capture.PNG";
import Heading from "../common/heading/heading";
import "./new-blog.scss";
import img2 from "../../images/blog/1.PNG";
import img3 from "../../images/blog/2.PNG";
import Button from "./../common/button/button";
import Line from "../common/line/line";

const NewBlog = () => {
  return (
    <div className="new-blog">
      <div className="container">
        <Heading
          heading="Blogs"
          subHeading="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="section-1">
              <img src={img1} alt="" />
              <p>The standard chunk of lorem ipsum since the 1500's</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="section-2">
              <img src={img2} alt="" />
              <p>The standard chunk of lorem ipsum since the 1500's</p>
            </div>
            <div className="section-3">
              <img src={img3} alt="" />
              <p>The standard chunk of lorem ipsum since the 1500's</p>
            </div>
          </div>
        </div>
        <center>
          <Button
            label="Show more"
            style={{ marginBottom: "5rem", marginTop: "2rem" }}
          />
        </center>
      </div>
    </div>
  );
};

export default NewBlog;
