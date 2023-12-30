import React from "react";
import user from "../../../assets/profileImg/user.svg";

const MyReportsUser = () => {
  return (
    <div className="MyReports__section-user sections">
      <div className="MyReports__section-svg">
        <img src={user} alt="User" />
      </div>
      <div className="MyReports__section-text1">Astro- psychological report</div>
      <div className="MyReports__section-info1">
        Some short description of this type of report.
      </div>
    </div>
  );
};

export default MyReportsUser;
