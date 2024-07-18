import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async () => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Replace with your Formspree endpoint URL

    const endpoint = "https://formspree.io/f/xrbzbarv";

    // formData.append("access_key", "xxxxxxxxxxxxxxxxxxxxxxxxx");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.ok) {
      alert("Thank you for your message. I will get back to you soon.");
    } else {
      alert("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I am eager to start my career and excited about new opportunities.
            Please feel free to reach out if you have any positions or projects
            that could benefit from a motivated and quick-learning individual
            like myself. You can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />{" "}
              <a href="mailto:garthigaravi98@gmail.com">
                <p>garthigaravi98@gmail.com</p>
              </a>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+91 8838454143</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Tamilnadu, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            required
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
