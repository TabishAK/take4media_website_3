import Button from "./../../../components/common/button/button";
import news1 from "../../../images/news/1.jpg";
import news2 from "../../../images/news/2.jpg";
import news3 from "../../../images/news/3.jpg";
import "./blog-section.scss";

const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="container">
        <h1>Check out our latest news.</h1>
        <h6>CHECK OUT SOME OF OUR NEWS</h6>

        <div className="row">
          <div className="col-xl-4 col-lg-4 mt-5">
            <div className="blog-list">
              <img src={news1} alt="" />
              <p className="mt-3">
                Could this VR sketching tool be coming of age for designers in
                the future?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas scelerisque ornare tincidunt....
              </p>
              <Button label="Read More" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 mt-5">
            <div className="blog-list">
              <img src={news2} alt="" />
              <p className="mt-3">
                Could this VR sketching tool be coming of age for designers in
                the future?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas scelerisque ornare tincidunt....
              </p>
              <Button label="Read More" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 mt-5">
            <div className="blog-list">
              <img src={news3} alt="" />
              <p className="mt-3">
                Could this VR sketching tool be coming of age for designers in
                the future?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas scelerisque ornare tincidunt....
              </p>
              <Button label="Read More" />
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 mt-5">
            <div className="blog-list">
              <img src={news3} alt="" />
              <p className="mt-3">
                Could this VR sketching tool be coming of age for designers in
                the future?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas scelerisque ornare tincidunt....
              </p>
              <Button label="Read More" />
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 mt-5">
            <div className="blog-list">
              <img src={news2} alt="" />
              <p className="mt-3">
                Could this VR sketching tool be coming of age for designers in
                the future?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas scelerisque ornare tincidunt....
              </p>
              <Button label="Read More" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 mt-5">
            <div className="blog-list">
              <img src={news1} alt="" />
              <p className="mt-3">
                Could this VR sketching tool be coming of age for designers in
                the future?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas scelerisque ornare tincidunt....
              </p>
              <Button label="Read More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
