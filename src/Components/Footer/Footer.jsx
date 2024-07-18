import React from "react";
import "./Footer.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import yin_yang from "../../assets/ying_yang.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  const rotatingStyle = {
    animation: "rotate 1.5s linear infinite",
    transformOrigin: "center",
  };
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img
            src={yin_yang}
            style={rotatingStyle}
            alt="yin yang"
            className="yin_yang"
          />
          <p>
            &ldquo; I am a Full Stack Developer with over 6 months of experience
            in JavaScript, Angular, and React, as well as backend development
            with MySQL and MongoDB. &rdquo;
          </p>
        </div>
        {/* <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div> */}
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <a href="https://www.linkedin.com/in/garthiga-r-125a34274/">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://wa.me/918838454143/">
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a href="mailto:garthigaravi98@gmail.com">
            <i className="bx bxl-gmail"></i>
          </a>
        </div>
        <div className="footer-bottom-right">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p className="text">Connect with me</p>
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
