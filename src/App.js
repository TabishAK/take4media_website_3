import "../node_modules/font-awesome/css/font-awesome.min.css";
import SocialMedia from "./pages/social-media/social-media";
import Services from "./pages/services/services";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import "./mediaquery.scss";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/amazon-services" element={<Services />} />
        <Route path="/social-media-services" element={<SocialMedia />} />
      </Routes>
    </div>
  );
}

export default App;
