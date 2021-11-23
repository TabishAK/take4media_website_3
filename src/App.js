import "./App.scss";
import Home from "./pages/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./mediaquery.scss";
import Services from "./pages/services/services";
import SocialMedia from "./pages/social-media/social-media";
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Services /> */}

      <SocialMedia />
    </div>
  );
}

export default App;
