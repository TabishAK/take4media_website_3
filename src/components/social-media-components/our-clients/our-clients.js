import client1 from "../../../images/our-clients/1.png";
import client2 from "../../../images/our-clients/2.png";
import client3 from "../../../images/our-clients/3.png";
import client4 from "../../../images/our-clients/4.png";
import client5 from "../../../images/our-clients/5.png";
import client6 from "../../../images/our-clients/6.png";
import Line from "../../common/line/line";
import "./our-clients.scss";
const OurClients = () => {
  return (
    <div className="our-clients">
      <Line top={40} />
      <h1>Our Clients</h1>
      <h6>Trusted By</h6>

      <div className="container">
        <div className="row">
          <div className="col">
            <img src={client1} alt="" />
          </div>
          <div className="col">
            <img src={client2} alt="" />
          </div>
          <div className="col">
            <img src={client3} alt="" />
          </div>
          <div className="col">
            <img src={client4} alt="" />
          </div>
          <div className="col">
            <img src={client5} alt="" />
          </div>
          <div className="col">
            <img src={client6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
