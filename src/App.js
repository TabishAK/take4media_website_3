import "../node_modules/font-awesome/css/font-awesome.min.css";
import SocialMedia from "./pages/social-media/social-media";
import Services from "./pages/services/services";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import "./mediaquery.scss";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import CreativePage from "./pages/creativePage/creative-page";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/amazon-services" component={Services} />
      <Route path="/social-media-services" component={SocialMedia} />
      <Route path="/creative-services" component={CreativePage} />
    </div>
  );
}

export default App;
