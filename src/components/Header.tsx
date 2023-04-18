import React from "react";
import headerIMGMobile from "../assets/images/image-web-3-mobile.jpg";
import headerIMGDesktop from "../assets/images/image-web-3-desktop.jpg";

function Header() {
  return (
    <header>
      <img id="headerIMG" src={headerIMGMobile} alt="" />
    </header>
  );
}

export default Header;
