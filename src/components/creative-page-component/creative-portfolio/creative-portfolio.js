import creative_1 from "../../../images/creative-portfolio/1.jpg";
import creative_2 from "../../../images/creative-portfolio/2.jpg";
import creative_3 from "../../../images/creative-portfolio/3.jpg";
import creative_4 from "../../../images/creative-portfolio/4.jpg";
import creative_5 from "../../../images/creative-portfolio/5.jpg";
import creative_6 from "../../../images/creative-portfolio/11.jpg";
import creative_7 from "../../../images/creative-portfolio/22.jpg";
import creative_8 from "../../../images/creative-portfolio/33.jpg";
import creative_9 from "../../../images/creative-portfolio/44.jpg";
import "./creative-portfolio.scss";

const CreativePortfolio = () => {
  return (
    <div className="creative-portfolio">
      <h1>Our Portfolio</h1>
      <h6>Lorem ipmsum lacasa de papel dummy text</h6>

      <div className="row-1">
        <div
          className="content"
          style={{
            width: "326px",
          }}
        >
          <div class="content-overlay"></div>
          <img className="content-image" src={creative_1} />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">This is a title</h3>
            <p class="content-text">This is a short description</p>
          </div>
        </div>
        <div
          className="content"
          style={{
            width: "742px",
          }}
        >
          <div class="content-overlay"></div>
          <img className="content-image" src={creative_2} />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">This is a title</h3>
            <p class="content-text">This is a short description</p>
          </div>
        </div>
        <div
          className="content"
          style={{
            width: "331px",
          }}
        >
          <div class="content-overlay"></div>
          <img className="content-image" src={creative_3} />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">This is a title</h3>
            <p class="content-text">This is a short description</p>
          </div>
        </div>
        <div
          className="content"
          style={{
            width: "309px",
          }}
        >
          <div class="content-overlay"></div>
          <img className="content-image" src={creative_5} />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">This is a title</h3>
            <p class="content-text">This is a short description</p>
          </div>
        </div>
        <div
          className="content"
          style={{
            width: "482px",
          }}
        >
          <div class="content-overlay"></div>
          <img className="content-image" src={creative_4} />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">This is a title</h3>
            <p class="content-text">This is a short description</p>
          </div>
        </div>
      </div>

      <div className="row-2">
        <div
          className="content"
          style={{
            width: "627px",
          }}
        >
          <div class="content-overlay"></div>
          <img className="content-image" src={creative_6} />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">This is a title</h3>
            <p class="content-text">This is a short description</p>
          </div>
        </div>
        <div
          className="content"
          style={{
            width: "278px",
          }}
        >
          <div class="content-overlay"></div>
          <img className="content-image" src={creative_7} />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">This is a title</h3>
            <p class="content-text">This is a short description</p>
          </div>
        </div>
        <div
          className="content"
          style={{
            width: "609px",
          }}
        >
          <div class="content-overlay"></div>
          <img className="content-image" src={creative_8} />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">This is a title</h3>
            <p class="content-text">This is a short description</p>
          </div>
        </div>
        <div
          className="content"
          style={{
            width: "279px",
          }}
        >
          <div class="content-overlay"></div>
          <img className="content-image" src={creative_9} />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">This is a title</h3>
            <p class="content-text">This is a short description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativePortfolio;
