import { IoMdPaperPlane } from "react-icons/io";
import { GiBrain } from "react-icons/gi";
import { GoLightBulb } from "react-icons/go";
import BannerCard from "../cards/bannerCard/bannerCard";
import "./cardPanel.scss";

const CardPanel = () => {
  return (
    <div className="container custom-con-1">
      <div className="row cards-panel">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <BannerCard
            class="cards"
            name="Future Concept."
            icon={<IoMdPaperPlane />}
          />
        </div>

        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <BannerCard
            class="cards middle-cards"
            name="The Big Ideas."
            icon={<GiBrain />}
          />
        </div>

        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <BannerCard
            class="cards "
            name="Creative Solutions."
            icon={<GoLightBulb />}
          />
        </div>
      </div>
    </div>
  );
};

export default CardPanel;
