import React, { useRef, useState, useEffect } from "react";
import "./Donations.css";
import { FaRegHeart } from "react-icons/fa";
import slidesData from "./SlideData";
import { LuDog } from "react-icons/lu";

const Donations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true); // Start fade-out effect
      setTimeout(() => {
        setFadeOut(false); // Reset fade-out effect
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
        setFadeIn(true); // Start fade-in effect
        setTimeout(() => {
          setFadeIn(false); // Reset fade-in effect
        }, 1000); // Duration of the fade-in effect
      }, 1000); // Duration of the fade-out effect
    }, 4000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [slidesData.length]);

  return (
    <div className="Donations container">
      <div className="slider">
        <ul>
          {slidesData.map((slide, index) => (
            <li
              key={index}
              className={
                index === currentSlide && fadeIn
                  ? "fade-in"
                  : index === currentSlide && fadeOut
                  ? "fade-out"
                  : ""
              }
              style={{ display: index === currentSlide ? "block" : "none" }}
            >
              <div className="slide">
                <div className="user-info">
                  <img src={slide.img} alt={slide.title} />
                </div>

                <div className="text">
                  <h2>{slide.title}</h2>
                  <p>{slide.text}</p>
                  <button className="btn_outline">
                    <LuDog />
                    Donate Now
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <div className="content-heading">
          <h2>Donations</h2>
          <p>Help, Donate & Fundraise</p>
        </div>
        <h5>
          Your donation will help us to provide Medical Services, Rescue, and
          Permanent Shelter to the voiceless so they can receive the love and
          medical attention they require.
        </h5>
        <button className="btn">
          <LuDog />
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Donations;
