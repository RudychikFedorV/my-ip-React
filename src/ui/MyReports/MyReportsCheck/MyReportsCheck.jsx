import React from "react";
import check from "../../../assets/profileImg/check.svg";

const MyReportsCheck = () => {
  return (
    <div className="MyReports__section-check sections">
      <div className="MyReports__section-svg">
        <img src={check} alt="Check" />
      </div>
      <div className="MyReports__section-text3">Daily Prediction</div>
      <div className="MyReports__section-info3">
        Some short description of this type of report.
      </div>
    </div>
  );
};

export default MyReportsCheck;
