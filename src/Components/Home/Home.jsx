import React, { useRef, useEffect } from "react";
import "./Home.css";
import Typed from "typed.js";
// import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Resume_pdf from "../../assets/Garthiga_R_Resume_2024 .pdf";
import Programming_img from "../../assets/programming.avif";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      typedRef.current.innerHTML = "";
    }

    const typed = new Typed(".text", {
      strings: ["frontend developer", "backend developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleDownload = () => {
    const cvDocumentPath = Resume_pdf;
    const anchor = document.createElement("a");
    anchor.href = cvDocumentPath;
    anchor.target = "_blank";
    anchor.click();
  };

  return (
    <div className="home" id="home">
      <img src={Programming_img} alt="Hero Section" className="profile-img" />
      <h1>
        <span>I'm Garthiga R, </span>Full Stack Developer.
      </h1>
      <p>
        I am a <span className="text"></span>
        <br />
        and fast learner and have the ability to work both in a team and an
        individual environment.
      </p>
      <div className="home-action">
        <div className="home-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Contact with me
          </AnchorLink>
        </div>
        <button className="home-resume" onClick={handleDownload}>
          My Resume
        </button>
      </div>
    </div>
  );
};

export default Home;
