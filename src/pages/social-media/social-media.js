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

const SocialMedia = () => {
  return (
    <div className="social-media">
      <SoicalMediaBanner />
      <LogoSection />
      <SocialMediaServices />
      <OurStrategy />
      <HowWeHelp />
      <Testimonials />
      <News />
      <OurClients />
      <ReadyToGrow />

      <Footer />
    </div>
  );
};

export default SocialMedia;
