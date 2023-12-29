import React from "react";
import { Link } from "react-router-dom";
import myImg3 from "../../assets/homeImg/calendar.svg";
import myImg4 from "../../assets/homeImg/arrow1.svg";

const Calendar = () => {
  return (
    <div className="myHome-calendar">
      <div className="myHome-calendar__section">
        <div className="myHome-calendar__img">
          <img src={myImg3} alt="Calendar" />
        </div>
        <div className="myHome-calendar__text">How was your day?</div>
      </div>
      <div className="myHome-calendar__info">
        Lorem ipsum dolor sit amet, consectetur adipscing elit. Ut vel odio en
        urna ultrice...
      </div>
      <div className="myHome-calendar__arrow">
        <Link to={"/"}>
          <img src={myImg4} alt="Arrow" />
        </Link>
      </div>
    </div>
  );
};

export default Calendar;
