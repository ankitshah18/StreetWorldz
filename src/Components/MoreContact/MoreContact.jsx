import React from "react";
import "./MoreContact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

import PhotoContainer from "../PhotoContainer/PhotoContainer";
import cat from "../../assets/Cat.jpg";

const MoreContact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // ------Enter your web3forms access key below-------

    formData.append("access_key", "-----Enter your web3forms key----");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <>
    <PhotoContainer image={cat} text="Contact Us" minHeight="17vh" />
    <div className="contact-bottom container">
        <div className="box_contact">
          <h3>63 K+</h3>
          <span>Made Happy Animal</span>
        </div>
        <div className="box_contact">
          <h3>500 +</h3>
          <span>Permanent Resident</span>
        </div>
        <div className="box_contact">
          <h3>180 +</h3>
          <span>Successful Adoption</span>
        </div>
        <div className="box_contact">
          <h3>100 M+</h3>
          <span>Donation Completed</span>
        </div>
      </div>
      <div className="more_contact">
        <div className="more_contact-col">
          <h3>
            Send us a message <img src={msg_icon} alt="" />
          </h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            community.
          </p>
          <ul>
            <li>
              <img src={mail_icon} alt="" />
              ankitshahankit181@gmail.com
            </li>
            <li>
              <img src={phone_icon} alt="" />
              +91 8728952565
            </li>
            <li>
              <img src={location_icon} alt="" />
              New Delhi
              <br /> India
            </li>
          </ul>
        </div>
        <div className="more_contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
            />
            <label>Write your messages here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>
            <button type="submit" className="btn dark-btn">
              Submit now <img src={white_arrow} alt="" />
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
};

export default MoreContact;
