import React from "react";
import Slider from "react-slick";
import "./Hero.css";
import { FaRegHeart } from "react-icons/fa";

import dog from "../../assets/dog.jpg";
import slide1 from "../../assets/slide1.jpg";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <section>
      <div className="container-fluid">
        <Slider {...settings} className="home_slider_Main">
          <div className="item">
            <img src={dog} className="w-100" />
            <div className="info">
              <p>Help, Donate and Fundraise</p>
              <h2>Your Contribution is Important</h2>
              <button className="btn">
          <FaRegHeart />
          Donate Now
        </button>
            </div>
          </div>
          <div className="item">
            <img src={slide1} className="w-100" />
            <div className="info">
              <p>Help, Donate and Fundraise</p>
              <h2>Your Contribution is Important</h2>
              <button className="btn">
          <FaRegHeart />
          Donate Now
        </button>
            </div>
          </div>
          <div className="item">
            <img src={dog} className="w-100" />
            <div className="info">
              <p>Help them Today</p>
              <h2>Street Animals need Our<br/>
              Protection</h2>
              <button className="btn">
          <FaRegHeart />
          Donate Now
        </button>
            </div>
          </div>
          <div className="item">
            <img src={dog} className="w-100" />
            <div className="info">
              <p>Small effort Makes Big Change</p>
              <h2>Your Support Makes Us Saves<br/>
              Precious Lives</h2>
              <button className="btn">
          <FaRegHeart />
          Donate Now
        </button>
            </div>
          </div>

        </Slider>
      </div>
    </section>
  );
};

export default Hero;
