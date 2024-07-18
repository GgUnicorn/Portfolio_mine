import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/Angular-vs-React.webp";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello, I'm Garthiga R, a dedicated professional with a Bachelor's
              degree in BE(Electronics and Communications Engineering) from
              Dhanalakshmi Srinivasan Institute of Technology College.
            </p>
            <p>
              I am deeply passionate about coding and have honed my skills to
              become a proficient full-stack developer. Proficient in languages
              such as HTML, CSS, JavaScript and experienced with frameworks like
              Angular Js and libraries like React Js, Node Js and Databases like
              MySQL and MongoDB. I thrive in both front-end and back-end
              development.
            </p>
            <p>
              My goal is to contribute to innovative projects and continuously
              evolve in the dynamic tech landscape. I am eager to bring my
              expertise to exciting challenges in the world of full-stack
              development.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "30%" }} />
            </div>
            <div className="about-skill">
              <p>Angular JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>C++, Java</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
