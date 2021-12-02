import Carousel from "react-elastic-carousel";
import "./new-testimonial.scss";
import quote from "../../images/icons/1.png";

const NewTestimonial = () => {
  return (
    <div className="new-testimonial">
      <center>
        <img src={quote} alt="" />
      </center>
      <h1>Testimonials</h1>
      <h6> We develop enterprise-grade software solutions for businesses.</h6>

      <div className="container">
        <Carousel itemsToShow={1} disableArrowsOnEnd={false}>
          <div>
            <div className="testimonial">
              <p>
                “Willing to accommodate nonprofit budgets, Cubix brought their
                robust experience to the project. They checked in consistently,
                and were communicative, easy to reach, and responsive. The
                Android app shows over 500 downloads to date.”
              </p>

              <h4>Melissa Steward, VP of Marketing</h4>
              <h5>National Fatherhood Initiative</h5>
            </div>
          </div>
          <div>
            <div className="testimonial">
              <p>
                “Willing to accommodate nonprofit budgets, Cubix brought their
                robust experience to the project. They checked in consistently,
                and were communicative, easy to reach, and responsive. The
                Android app shows over 500 downloads to date.”
              </p>

              <h4>Melissa Steward, VP of Marketing</h4>
              <h5>National Fatherhood Initiative</h5>
            </div>
          </div>
          <div>
            <div className="testimonial">
              <p>
                “Willing to accommodate nonprofit budgets, Cubix brought their
                robust experience to the project. They checked in consistently,
                and were communicative, easy to reach, and responsive. The
                Android app shows over 500 downloads to date.”
              </p>

              <h4>Melissa Steward, VP of Marketing</h4>
              <h5>National Fatherhood Initiative</h5>
            </div>
          </div>
          <div>
            <div className="testimonial">
              <p>
                “Willing to accommodate nonprofit budgets, Cubix brought their
                robust experience to the project. They checked in consistently,
                and were communicative, easy to reach, and responsive. The
                Android app shows over 500 downloads to date.”
              </p>

              <h4>Melissa Steward, VP of Marketing</h4>
              <h5>National Fatherhood Initiative</h5>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default NewTestimonial;