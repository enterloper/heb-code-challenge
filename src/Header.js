import React from "react";
import Logo from "../public/heb.svg";

const Header = () => (
  <header>
    <img src={Logo} style={{ height: 100, width: 200 }} alt="website logo" />
    <h1>Code Challenge</h1>
  </header>
);

export default Header;
