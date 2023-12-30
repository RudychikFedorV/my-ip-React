import React from 'react'
import calendar from "../../../assets/profileImg/calendar.svg";

const MyReportsCalendar = () => {
  return (
    <div className="MyReports__section-calendar sections">
      <div className="MyReports__section-svg">
        <img src={calendar} alt="Calendar" />
      </div>
      <div className="MyReports__section-text2">Monthly prediction report</div>
      <div className="MyReports__section-info2">
        Some short description of this type of report.
      </div>
    </div>
  )
}

export default MyReportsCalendar
