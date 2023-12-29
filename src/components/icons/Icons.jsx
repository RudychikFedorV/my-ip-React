import React from "react";
import { Link } from "react-router-dom";
import home from "../../assets/homeImg/home.svg";
import user from "../../assets/homeImg/user.svg";
import message from "../../assets/homeImg/message.svg";
import book from "../../assets/homeImg/book.svg";
import moon from "../../assets/homeImg/moon.svg";

const Icons = () => {
  return (
    <div className="myHome-icons">
      <Link to={"/"}><img src={home} alt="Home" /></Link>
      <Link to={"/profile"}> <img src={user} alt="User" /></Link>
      <Link to={"/"}> <img src={message} alt="Message" /></Link>
      <Link to={"/"}> <img src={book} alt="Book" /></Link>
      <Link to={"/"}> <img src={moon} alt="Moon" /></Link>
    </div>
  );
};

export default Icons;
