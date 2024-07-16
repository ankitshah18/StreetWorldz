import React, { useRef, useState, useEffect } from "react";
import "./Testimonials.css";
import dog from "../../assets/puppy.jpg";
import cow from "../../assets/cow.jpg";
import camel from "../../assets/camel.jpg";
import { FaRegHeart } from "react-icons/fa";

const Testimonials = () => {
  const slider = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      slideToNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const slideToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const slideTo = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    slider.current.style.transform = `translateX(-${currentSlide * 100}%)`;
  }, [currentSlide]);

  return (
    <div className="testimonials container">
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={dog} alt="" />
              </div>
              <div className="text">
                <h2>Dog</h2>
                <p>
                  We urgently appeal to your compassion and generosity to help
                  us provide a lifeline for accidental stray dogs. With your
                  donation, we can offer vital medical care, nourishment, and
                  shelter to these vulnerable creatures. Every contribution, no
                  matter the amount, makes a significant impact on their lives.
                  Your kindness can alleviate their suffering and give them a
                  chance at a brighter future. Please donate today and join us
                  in our mission to rescue, rehabilitate, and rehome these
                  innocent beings. Together, we can make a profound difference
                  in the lives of accidental stray dogs and restore their hope
                  and happiness.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={cow} alt="" />
              </div>
              <div className="text">
                <h2>Camel</h2>
                <p>
                  We urgently seek your support to aid accidental stray cows in
                  dire need. These gentle creatures, abandoned or left to wander
                  aimlessly, face immense hardship without shelter, sustenance,
                  or medical attention. Your donation can provide critical care,
                  nutritious food, and safe shelters to these vulnerable cows,
                  offering them a chance at a dignified life. Every
                  contribution, no matter the size, makes a significant impact
                  on their well-being. With your compassion and generosity, we
                  can alleviate their suffering and create a compassionate
                  society that values all living beings. Please donate today to
                  make a difference in the lives of these innocent stray cows.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={camel} alt="" />
              </div>
              <div className="text">
                <h2>Cow</h2>
                <p>
                  We urgently appeal to your compassion and generosity to help
                  us provide a lifeline for accidental stray dogs. With your
                  donation, we can offer vital medical care, nourishment, and
                  shelter to these vulnerable creatures. Every contribution, no
                  matter the amount, makes a significant impact on their lives.
                  Your kindness can alleviate their suffering and give them a
                  chance at a brighter future. Please donate today and join us
                  in our mission to rescue, rehabilitate, and rehome these
                  innocent beings. Together, we can make a profound difference
                  in the lives of accidental stray dogs and restore their hope
                  and happiness.
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div className="dots">
          {[...Array(totalSlides)].map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => slideTo(index)}
            />
          ))}
        </div>
      </div>
      <div className="content">
        <div className="content-heading">
          <h2>Donations</h2>
          <p>Help,Donate & Fundraise</p>
        </div>
        <h5>
          Your donation will help us to provide Medical Services, Rescue, and
          Permanent Shelter to the voiceless so they can receive the love and
          medical attention they require.
        </h5>
        <button className="btn">
          <FaRegHeart />
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
