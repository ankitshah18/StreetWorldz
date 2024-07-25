import React from "react";
import "./MoreAbout.css";
import about_img from "../../assets/dogOne.jpg";
import PhotoContainer from "../PhotoContainer/PhotoContainer";
import cat from "../../assets/Cat.jpg";
const MoreAbout = () => {
  return (
    <>
      {" "}
      <PhotoContainer image={cat} text="Who we are" minHeight="30vh" />
      {/* <div className="photo container">
        <div className="photo-text">
          <h1>Who we are</h1>
        </div>
      </div> */}
      <div className="about-container container">
        <div className="section-1">
          {" "}
          <img src={about_img} alt="" height="100%" className="about_img" />
        </div>
        <div className="section-2">
          <div className="section_three_container">
            <h2 className="section_three_heading">
              <span>Who we are</span>
              <p>We are street-worldz</p>
            </h2>
            <div className="section_three_content">
              {" "}
              <p className="about_content">
                At Street Worldz, we are committed to providing a lifeline for
                ill, injured, and accidental animals in need. Our organization
                focuses on rescuing, treating, and sheltering these vulnerable
                animals, giving them a second chance at a happy and healthy
                life.
              </p>
              <p className="about_content">
                Our unwavering commitment to the well-being and recovery of
                these animals drives everything we do. We understand that
                accidents and illnesses can leave animals in desperate
                situations, and we are here to offer them a safe haven and the
                medical care they need.
              </p>
              <p className="about_content">
                Our team of skilled professionals and compassionate volunteers
                work tirelessly to rescue animals from various circumstances,
                including accidents, abuse, and neglect. We provide immediate
                medical attention, ensuring that their injuries are treated
                promptly and their pain is alleviated. From fractures and wounds
                to infections and diseases, we strive to rehabilitate each
                animal, working towards their full recovery.
              </p>
              <p className="about_content">
                Once the animals are stabilized and their medical needs are
                addressed, we provide them with a warm and comfortable shelter.
                Our facility is designed to meet their specific requirements,
                offering a nurturing environment where they can heal both
                physically and emotionally. Our dedicated staff ensures they
                receive proper nutrition, exercise, and socialization, promoting
                their overall well-being.
              </p>
              <p className="about_content">
                We invite you to explore our website to learn more about our
                rescue efforts, treatment protocols, and the impact we have made
                in the lives of countless animals. We also provide resources and
                educational materials to promote responsible pet ownership, as
                we believe that prevention is key to reducing the number of
                accidental and neglected animals.
              </p>
              <p className="about_content">
                Thank you for visiting Street Worldz. By supporting our cause,
                you are helping us save and improve the lives of ill, injured,
                and accidental animals, giving them the love and care they
                deserve. Together, we can make a profound difference in the
                lives of these precious beings.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="section-3"></div> */}
      </div>
    </>
  );
};

export default MoreAbout;
