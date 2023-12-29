import React from "react";
import DailyTasks from "../../components/dailyTasks/DailyTasks";
import Header from "../../components/header/Header";
import News from "../../components/news/News";
import Calendar from "../../components/calendar/Calendar";
import Clock from "../../components/clock/Clock";
import Icons from "../../components/icons/Icons";

const Home = () => {
  return (
    <div className="myHome">
      <Header />
      <News />
      <DailyTasks />
      <Calendar />
      <Clock />
      <Icons />
    </div>
  );
};

export default Home;
