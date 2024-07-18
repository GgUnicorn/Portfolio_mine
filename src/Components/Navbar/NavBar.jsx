import React, { useState, useRef } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import yin_yang from "../../assets/ying_yang.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import logo from "../../assets/logo.svg";

function Navbar() {
  const [menu, setMenu] = useState("home");

  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-300px";
  };
  const rotatingStyle = {
    animation: "rotate 1.5s linear infinite",
    transformOrigin: "center",
  };

  return (
    <div className="navbar">
      <img
        src={yin_yang}
        style={rotatingStyle}
        alt="yin yang"
        className="yin_yang"
      />
      {/* <img src={logo} alt="" className="logo" /> */}
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home" offset={100}>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#about" offset={50}>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#services" offset={50}>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        {/* <li>
          <AnchorLink className="anchor-link" href="#work" offset={50}>
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li> */}
        <li>
          <AnchorLink className="anchor-link" href="#contact" offset={50}>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Contact With Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
