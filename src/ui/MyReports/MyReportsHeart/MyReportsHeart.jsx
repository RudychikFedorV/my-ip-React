import React from "react";
import heart from "../../../assets/profileImg/heart.svg";

const MyReportsHeart = () => {
  return (
    <div className="MyReports__section-heart sections">
      <div className="MyReports__section-svg">
        <img src={heart} alt="Heart" />
      </div>
      <div className="MyReports__section-text4">Love report</div>
      <div className="MyReports__section-info4">
        Some short description of this type of report.
      </div>
    </div>
  );
};

export default MyReportsHeart;
