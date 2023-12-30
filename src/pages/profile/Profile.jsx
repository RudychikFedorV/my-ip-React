import React from "react";
import { Link } from "react-router-dom";
import HeaderMenu from "../../ui/headerMenu/HeaderMenu";
import HeaderSettings from "../../ui/headerSettings/HeaderSettings";
import MyProfile from "../../components/myProfile/MyProfile";
import StrongSide from "../../components/strongSide/StrongSide";
import WeakSide from "../../components/weakSide/WeakSide";
import MyReports from "../../components/myReports/MyReports";
import Icons from "../../components/icons/Icons";

const Profile = () => {
  return (
    <div className="myProfile">
      <header className="myProfile-header">
        <HeaderMenu />
        <Link to={"/"}>Home</Link>
        <HeaderSettings />
      </header>
      <MyProfile />
      <StrongSide />
      <WeakSide />
      <MyReports />
      <Icons />
    </div>
  );
};

export default Profile;
