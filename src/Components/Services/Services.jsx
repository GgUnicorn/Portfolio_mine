import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import React_image from "../../assets/react-2.svg";
// import arrow_icon from "../../assets/arrow_icon.svg";
import Angular_image from "../../assets/favicon.ico";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="title-box">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div className="services-format" key={index}>
            <div className="services-skills-img">
              <img
                src={service.src}
                style={{ width: "50px", height: "50px" }}
                alt="skills image"
              />
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      {/* <img src={React_image} alt="" /> */}
    </div>
  );
};
export default Services;
