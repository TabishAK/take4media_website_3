import "./meet-our-team.scss";
import img1 from "../../images/about/emp-1.jpg";
import img2 from "../../images/about/emp-2.jpg";
import img3 from "../../images/about/emp-3.jpg";
import img4 from "../../images/about/emp-4.jpg";
import img5 from "../../images/about/emp-5.jpg";
import EmployeCard from "../employe-card/employe-card";
import Line from "./../common/line/line";
const MeetOurTeam = () => {
  return (
    <div class="meet-our-team">
      <div class="container-fluid">
        <div class="row">
          <h1>Meet Our Team</h1>
          <h6>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in
            animi doloribus
          </h6>
          <div class="col">
            <EmployeCard
              img={img1}
              data={{
                name: "Suhab-ur-Rehman",
                designation: "Art Actor",
                description:
                  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in animi doloribus reprehenderit debitis voluptas pariatur eaque! Rem,accusamus tempora",
              }}
            />
          </div>

          <div class="col">
            <EmployeCard
              img={img2}
              data={{
                name: "Hareem Fatima",
                designation: "Product Analyst",
                description:
                  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in animi doloribus reprehenderit debitis voluptas pariatur eaque! Rem,accusamus tempora",
              }}
            />
          </div>

          <div class="col">
            <EmployeCard
              img={img3}
              data={{
                name: "Irtiqa Abbas",
                designation: "Adobe Expert",
                description:
                  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in animi doloribus reprehenderit debitis voluptas pariatur eaque! Rem,accusamus tempora",
              }}
            />
          </div>

          <div class="col">
            <EmployeCard
              img={img4}
              data={{
                name: "Tabish Ali Khan",
                designation: "Web Developer Associate",
                description:
                  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in animi doloribus reprehenderit debitis voluptas pariatur eaque! Rem,accusamus tempora",
              }}
            />
          </div>

          <div class="col">
            <EmployeCard
              img={img5}
              data={{
                name: "Farooq Shaukat",
                designation: "Assistant Art",
                description:
                  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, in animi doloribus reprehenderit debitis voluptas pariatur eaque! Rem,accusamus tempora",
              }}
            />
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
};

export default MeetOurTeam;