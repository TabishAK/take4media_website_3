import BannerHeading from "../components/bannerHeading/bannerHeading";
import Navbar from "../components/navbar/navbar";

import "./home.scss";
import CardPanel from "./../components/cardPanel/cardPanel";
const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <Navbar />
        <BannerHeading />
        <CardPanel />

        <br />
        <br />
        <br />
        <br />
      </div>

      <div className="container-fluid"></div>
    </div>
  );
};

export default Home;
