import "./social-media.scss";
import SoicalMediaBanner from "../../components/social-media-components/social-media-banner/social-media-banner";
import LogoSection from "../../components/social-media-components/logo-section/logo-section";
import SocialMediaServices from "../../components/social-media-components/social-media-services/social-media-services";
import HowWeHelp from "./../../components/social-media-components/how-we-help/how-we-help";
import Footer from "./../../components/footer/footer";
import OurStrategy from "../../components/social-media-components/our-strategy/our-strategy";
import OurClients from "./../../components/social-media-components/our-clients/our-clients";
import ReadyToGrow from "../../components/social-media-components/ready-to-grow/ready-to-grow";
import Testimonials from "../../components/testimonials/testimonial";
import News from "../../components/news/news";
import { useEffect, useState } from "react";
import Heading from "./../../components/common/heading/heading";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { Collapse } from "react-collapse";
import getHelp from "../../images/services/help_from_experts.svg";
const SocialMedia = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [comment, setComment] = useState([
    {
      number: "01",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five",
      isOpened: true,
    },
    {
      number: "02",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five",
      isOpened: false,
    },
    {
      number: "03",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five",
      isOpened: false,
    },
  ]);

  const handleCollapse = (c) => {
    const temp = [...comment];
    temp.map((com) => {
      if (com.number === c.number) {
        com.isOpened = !com.isOpened;
      }
    });
    setComment(temp);
  };

  return (
    <div className="social-media">
      <SoicalMediaBanner />
      <LogoSection />
      <SocialMediaServices />
      <OurStrategy />
      <HowWeHelp />
      <Testimonials />
      <News />

      <div className="faqs">
        <div className="container">
          <Heading
            heading="FAQ's"
            subHeading="Check out some of the question people asked."
          />

          <div className="row">
            <div className="col-lg-6 col-sm-6 ">
              {comment.map((c) => (
                <div className="comment">
                  <div className="number">{c.number}</div>
                  <div className="text">
                    <span className="question">Hows Work This antivirus?</span>

                    <Collapse isOpened={c.isOpened}>
                      <span className="answer">{c.comment}</span>
                    </Collapse>
                  </div>

                  {c.isOpened ? (
                    <AiFillCaretUp onClick={() => handleCollapse(c)} />
                  ) : (
                    <AiFillCaretDown onClick={() => handleCollapse(c)} />
                  )}
                </div>
              ))}
            </div>
            <div className="col-lg-6 col-sm-6 pic-side">
              <img className="img-side-faq" src={getHelp} alt="" />
            </div>
          </div>
        </div>
      </div>

      <OurClients />

      <ReadyToGrow />
      <Footer />
    </div>
  );
};

export default SocialMedia;
