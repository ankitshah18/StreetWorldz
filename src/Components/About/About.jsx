import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
import CountUp from "react-countup";

const About = ({ setPlayState }) => {
  return (
    <>
      <div className="about container">
        <div className="about-right">
          <div className="line-heading">
            <div className="dark-line"></div>
            <div className="about-heading">
              <h2>About Us</h2>
              <h3>Who we are?</h3>
            </div>
          </div>

          <p>
            At StreetWorldz, we are dedicated to providing a lifeline for ill,
            injured, and accidental animals in need. Our organization
            specializes in rescuing, treating, and sheltering these vulnerable
            animals, giving them a second chance at a happy and healthy life.
          </p>
          <button className="btn-small">More About Us</button>
        </div>
        <div className="about-left">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/C23UPm3h8-U?si=yXHTkCyknZMlwreL"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="about-img"
          ></iframe>
          {/* about-img */}
          {/* <img src={about_img} alt=""  /> */}
        </div>
      </div>
      <div className="about-bottom container">
        <div className="box">
          <h3>
            <span>
              <CountUp start={0} end={100} />
              K+
            </span>
          </h3>
          <span>Made Happy Animal</span>
        </div>

        <div className="box">
          <h3>
            <span>
              <CountUp start={0} end={500} />+
            </span>
          </h3>
          <span>Permanent Resident</span>
        </div>

        <div className="box">
          <h3>
            <span>
              <CountUp start={0} end={180} />+
            </span>
          </h3>
          <span>Successful Adoption</span>
        </div>

        {/* <div className="box">
          <h3>
            <span>
              <CountUp start={0} end={100} />
              M+
            </span>
          </h3>
          <span>Donation Completed</span>
        </div> */}
      </div>
    </>
  );
};

export default About;
