import Navbar from "../../components/navbar/navbar";
import {
  AiOutlineAntDesign,
  AiFillFastForward,
  AiOutlineSolution,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { TiTickOutline } from "react-icons/ti";
import sec from "../../images/about/sec2.jpg";
import solution from "../../images/about/solution.jpg";
import "./about-us.scss";
import Button from "../../components/common/button/button";
import Heading from "./../../components/common/heading/heading";
import emp_1 from "../../images/about/emp-1.jpg";
import emp_2 from "../../images/about/emp-2.jpg";
import emp_3 from "../../images/about/emp-3.jpg";
import emp_4 from "../../images/about/emp-4.jpg";
import emp_5 from "../../images/about/emp-5.jpg";
import ProjectInMind from "./../../components/project_in_mind/project_in_mind";
import Footer from "../../components/footer/footer";
import Line from "../../components/common/line/line";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-banner">
        <Navbar />
        <h1>About Us.</h1>
      </div>

      <div className="qualities">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5">
              <AiOutlineAntDesign />
              <h2>Excellent Design</h2>
              <p>
                Vivamus at vehicula justo hendrerit euismod ante. Suspendisse
                egestas efficitur euismod.
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5">
              <AiFillFastForward />
              <h2>Fast Response</h2>
              <p>
                Vivamus at vehicula justo hendrerit euismod ante. Suspendisse
                egestas efficitur euismod.
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5">
              <AiOutlineSolution />
              <h2>Perfect Solutions</h2>
              <p>
                Vivamus at vehicula justo hendrerit euismod ante. Suspendisse
                egestas efficitur euismod.
              </p>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5">
              <AiOutlineFieldTime />
              <h2>Time Saving</h2>
              <p>
                Vivamus at vehicula justo hendrerit euismod ante. Suspendisse
                egestas efficitur euismod.
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5">
              <BiSupport />
              <h2>Personal Support</h2>
              <p>
                Vivamus at vehicula justo hendrerit euismod ante. Suspendisse
                egestas efficitur euismod.
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5">
              <TiTickOutline />
              <h2>Best Quality</h2>
              <p>
                Vivamus at vehicula justo hendrerit euismod ante. Suspendisse
                egestas efficitur euismod.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="skills">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h1>Here are some of our great skills</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
                arcu luctus, pellentesque lorem ac, pharetra sapien.
              </p>

              <h5>UI DESIGN</h5>
              <div class="bar learning"></div>
              <h5>UX DESIGN</h5>
              <div class="bar back basic"></div>
              <h5>DIGITAL MARKETING</h5>
              <div class="bar back intermediate"> </div>
              <h5>SOCIAL MEDIA</h5>
              <div class="bar front advanced"></div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <img src={sec} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="solution">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <img src={solution} alt="" />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h1>Best Solutions for Your Business</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sit amet urna quis odio vehicula consectetur. Donec eu gravida
                diam. Aenean accumsan nisl sed fringilla sollicitudin. Donec
                tincidunt quis dolor eget consectetur. Suspendisse a mollis
                lacus.
              </p>

              <Button label="Watch Video" style={{ marginTop: "1rem" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="meet-our-team">
        <div className="container">
          <Heading
            heading="Meet our team."
            subHeading="THE BEST PEOPLE TO SUPPORT YOUR PROJECT"
          />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <img src={emp_1} alt="" />
            </div>
            <div className="col">
              <img src={emp_2} alt="" />
            </div>
            <div className="col">
              <img src={emp_3} alt="" />
            </div>
            <div className="col">
              <img src={emp_4} alt="" />
            </div>
            <div className="col">
              <img src={emp_5} alt="" />
            </div>
          </div>
        </div>
        <Line />
      </div>
      <ProjectInMind
        data={{
          heading: "Have any project in mind?",
          buttonLabel: "MAKE INQUIRY",
        }}
      />
      <Footer />
    </div>
  );
};

export default AboutUs;
