import "./accordian.scss";
const Accordian = () => {
  return (
    <>
      <div class="accordion">
        <ul>
          <li tabindex="1">
            <div>
              <a>
                <h2>Curtain & Drapes</h2>
              </a>
            </div>
          </li>
          <li tabindex="2">
            <div>
              <a>
                <h2>Table Runners</h2>
              </a>
            </div>
          </li>
          <li tabindex="3">
            <div>
              <a>
                <h2>Bedding</h2>
              </a>
            </div>
          </li>
          <li tabindex="4">
            <div>
              <a>
                <h2></h2>
              </a>
            </div>
          </li>
          <li tabindex="5">
            <div>
              <a>
                <h2>Hotel Blackout</h2>
              </a>
            </div>
          </li>
          <li tabindex="6">
            <div>
              <a>
                <h2>Lorem Ipsum</h2>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Accordian;
