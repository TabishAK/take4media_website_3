import CreativeServices from "../../components/creative-page-component/creative-services/creative-services";
import CreativeStrategies from "../../components/creative-page-component/creative-strategies/creative-strategies";
import CreativeBanner from "./../../components/creative-page-component/creative-page-banner/creative-banner";
import OurClient from "../../components/creative-page-component/our-client/our-client";
import CreativeBuisnessProcess from "./../../components/creative-page-component/creative-buisness-process/creative-business-process";
import GrowYourBuisness from "../../components/creative-page-component/grow-your-buisness/grow-your-buisness";
import Footer from "./../../components/footer/footer";
import CreativeFaqs from "./../../components/creative-page-component/creative-faqs/creative-faqs";
import CreativeTestimonials from "./../../components/creative-page-component/creative-testimonials/creative-testimonials";
import "./creativePage.scss";
import News from "./../../components/news/news";
import CreativeSupportingPartner from "../../components/creative-page-component/creative-supporting-partner/creative-supporting-partner";
const CreativePage = () => {
  return (
    <div className="creative-page">
      <CreativeBanner />
      <CreativeStrategies />
      <CreativeServices />
      <OurClient />
      <CreativeBuisnessProcess />
      <CreativeTestimonials />
      <News />
      <CreativeFaqs />
      <CreativeSupportingPartner />

      <GrowYourBuisness />
      <Footer />
    </div>
  );
};

export default CreativePage;
