import React from "react";
import { Link } from "react-router-dom";
import HeaderMenu from "../../ui/headerMenu/HeaderMenu";
import HeaderSettings from "../../ui/headerSettings/HeaderSettings";

const Profile = () => {
  return (
    <div className="myProfile">
      <header className="myProfile-header">
        <HeaderMenu />
        <Link to={"/"}>Home</Link>
        <HeaderSettings />
      </header>
    </div>
  );
};

export default Profile;
