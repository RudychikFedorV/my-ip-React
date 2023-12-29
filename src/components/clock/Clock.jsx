import React from "react";
import myImg5 from "../../assets/homeImg/clock.svg";
import myImg6 from "../../assets/homeImg/arrow2.svg";
import { Link } from "react-router-dom";

const Clock = () => {
  return (
    <div className="myHome-clock">
      <div className="myHome-clock__section">
        <div className="myHome-clock__img">
          <img src={myImg5} alt="Clock" />
        </div>
        <div className="myHome-clock__text">How was your day?</div>
      </div>
      <div className="myHome-clock__info">
        Lorem ipsum dolor sit amet, consectetur adipscing elit. Ut vel odio en
        urna ultrice...
      </div>
      <div className="myHome-clock__arrow">
        <Link to={"/"}>
          <img src={myImg6} alt="Arrow" />
        </Link>
      </div>
    </div>
  );
};

export default Clock;
