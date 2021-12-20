import "../node_modules/font-awesome/css/font-awesome.min.css";
import CreativePage from "./pages/creativePage/creative-page";
import SocialMedia from "./pages/social-media/social-media";
import ScrollToTop from "./components/common/scrollToTop";
import Services from "./pages/services/services";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/about-us/about-us";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "./pages/Blogs/blog";
import Home from "./pages/home";
import "./mediaquery.scss";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Route exact path="/" component={Home} />
      <Route path="/amazon-services" component={Services} />
      <Route path="/social-media-services" component={SocialMedia} />
      <Route path="/creative-services" component={CreativePage} />
      <Route path="/blog" component={Blog} />
      <Route path="/about-us" component={AboutUs} />
    </div>
  );
}

export default App;
