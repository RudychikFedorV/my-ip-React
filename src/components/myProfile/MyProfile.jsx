import React from "react";
import foto from "../../assets/profileImg/foto.png";
import { Link } from "react-router-dom";


const MyProfile = () => {
  return (
    <div className="myProfile-profile">
      <div className="myProfile-profile__foto">
        <img src={foto} alt="Angelica Jackson" />
      </div>
      <div className="myProfile-profile__section">
        <div className="myProfile-profile__title">Angelica Jackson</div>
        <div className="myProfile-profile__info">Analyzer</div>
        <div className="myProfile-profile__text"><Link to={"/"}>Change profile</Link></div>
      </div>
    </div>
  );
};

export default MyProfile;
