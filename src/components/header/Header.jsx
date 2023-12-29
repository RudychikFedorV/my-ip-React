import React from "react";
import { Link } from "react-router-dom";
import HeaderMenu from "../../ui/headerMenu/HeaderMenu";
import HeaderSettings from "../../ui/headerSettings/HeaderSettings";

const Header = () => {
  return (
    <header className="myHome-header">
      <HeaderMenu />
      <div className="myHome-header__home">
        <Link to={"/profile"}>Profile</Link>
      </div>
      <HeaderSettings />
      
    </header>
  );
};

export default Header;
