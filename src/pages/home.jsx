import BannerHeading from "../components/bannerHeading/bannerHeading";
import ServicePanel from "./../components/servicePanel/servicePanel";
import CardPanel from "./../components/cardPanel/cardPanel";
import Line from "../components/common/line/line";
import Navbar from "../components/navbar/navbar";
import Works from "../components/works/works";
import "./home.scss";
import About from "./../components/about/about";
import Testimonials from "./../components/testimonials/testimonial";
import News from "./../components/news/news";
import ProjectInMind from "./../components/project_in_mind/project_in_mind";
import Footer from "./../components/footer/footer";
import NewTestimonial from "./../components/new-testimonial/new-testimonial";
import NewBlog from "./../components/new-blog/new-blog";
import Slide from "react-reveal/Slide";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <Navbar />
        <BannerHeading />
        <Slide bottom delay={500} duration={1200}>
          <CardPanel />
        </Slide>
        <Line />
        <br />
        <br />
      </div>
      <div className="services" id="services">
        <ServicePanel />
      </div>
      <Works />
      <About />
      <NewTestimonial />

      <NewBlog />
      <ProjectInMind
        data={{
          heading: "Have any project in mind?",
          buttonLabel: "MAKE INQUIRY",
        }}
        showSocialMedia={true}
      />
      <Footer />
    </div>
  );
};

export default Home;
