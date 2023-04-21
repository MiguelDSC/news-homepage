import React, { useState } from "react";

import hamburgerIMG from "../assets/images/icon-menu.svg";
import closeHambugerIMG from "../assets/images/icon-menu-close.svg";
import brandIMG from "../assets/images/logo.svg";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenuHandler = () => {
    setIsActive((prevState) => {
      return !prevState;
    });

    const navMenu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    if (navMenu != undefined && overlay != undefined) {
      navMenu.classList.toggle("openMenu");
      overlay.classList.toggle("openOverlay");
      document.body.classList.toggle("touchAction");
    }
  };

  return (
    <nav role="navigation">
      <div onClick={toggleMenuHandler} id="overlay"></div>
      <img src={brandIMG} alt="" />
      {!isActive ? (
        <img
          onClick={toggleMenuHandler}
          className="menuToggle"
          src={hamburgerIMG}
          alt=""
        />
      ) : (
        <img
          onClick={toggleMenuHandler}
          className="menuToggle"
          src={closeHambugerIMG}
          alt=""
        />
      )}

      <ul id="menu">
        <div id="innerMenu">
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li id="lastItem">Categories</li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
