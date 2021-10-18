import { AiFillStar } from "react-icons/ai";
import suhab from "../../../images/icons/asd.png";
import quoteIcon from "../../../images/icons/1.png";
import "./testimonialCard.scss";
const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <center>
        <img src={quoteIcon} alt="icon" style={{ width: 45 }} />
      </center>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        consequat bibendum turpis sit amet pretium. Nunc ut dui ornare,
        vulputate augue sed, varius velit.
      </p>

      <div className="rating-stars">
        <center>
          {[1, 2, 3, 4, 5].map((stars) => (
            <AiFillStar />
          ))}
        </center>
      </div>

      <img
        src={suhab}
        style={{
          right: "195px",
          width: "65px",
          position: "absolute",
          bottom: "-30px",
        }}
        alt="epmloyee"
      />
    </div>
  );
};

export default TestimonialCard;
