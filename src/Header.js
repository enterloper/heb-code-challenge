import React from "react";
import Logo from "../public/heb.svg";

const Header = () => (
  <header>
    <img className="heb_logo" src={Logo} alt="website logo" />
    <h1>Code Challenge</h1>
  </header>
);

export default Header;
