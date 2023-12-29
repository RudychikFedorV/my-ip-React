import React from "react";
import DailyTasksSection from "./dailyTasksSection/DailyTasksSection";

const DailyTasks = () => {
  return (
    <div className="myHome-dailyTasks">
      <div className="myHome-dailyTasks__title">Daily Tasks:</div>
      <DailyTasksSection />
      <div className="myHome-dailyTasks__info">
        Your overall progress is <span>60%</span>
      </div>
      <div className="myHome-dailyTasks__line"></div>
    </div>
  );
};

export default DailyTasks;
