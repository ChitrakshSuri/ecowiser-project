import React from "react";
import ecowiserLogo from "../assets/ecowiser.jpeg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={ecowiserLogo} alt="logo" width={70} />
      <div>Ecowiser</div>
    </div>
  );
}

export default Header;
