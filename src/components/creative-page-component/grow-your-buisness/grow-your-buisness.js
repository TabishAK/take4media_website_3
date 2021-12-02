import "./grow-your-buisness.scss";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
const GrowYourBuisness = () => {
  return (
    <div className="grow-your-buisness">
      <h1>Ready to grow your business?</h1>

      <h6>Contact us to work with a result-driven digital marketing agency!</h6>

      <div className="contact-bar">
        <span className="free-proposal">
          <BsFillChatLeftTextFill />
          Get Free Proposal
        </span>
        <h6> OR</h6>

        <span className="contact-no">
          <FiPhone />
          021-35250709
        </span>
      </div>
    </div>
  );
};

export default GrowYourBuisness;