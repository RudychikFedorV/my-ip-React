import React from "react";
import MyReportsCalendar from "../../ui/MyReports/MyReportsCalendar/MyReportsCalendar";
import MyReportsCheck from "../../ui/MyReports/MyReportsCheck/MyReportsCheck";
import MyReportsHeart from "../../ui/MyReports/MyReportsHeart/MyReportsHeart";
import MyReportsUser from "../../ui/MyReports/MyReportsUser/MyReportsUser";

const MyReports = () => {
  return (
    <div className="MyReports">
      <div className="MyReports__title">My Reports:</div>
      <div className="MyReports__section">
        <MyReportsUser />
        <MyReportsCalendar />
        <MyReportsCheck />
        <MyReportsHeart />
      </div>
    </div>
  );
};

export default MyReports;
