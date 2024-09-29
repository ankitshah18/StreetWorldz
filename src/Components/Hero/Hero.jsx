import Slider from "react-slick";
import "./Hero.css";
import { FaRegHeart } from "react-icons/fa";
import { LuDog } from "react-icons/lu";

import dog from "../../assets/dog.jpg";
import slide1 from "../../assets/slide1.jpg";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true, // Automatically shift slides
    autoplaySpeed: 5000, // Duration of 3 seconds
    pauseOnHover: false,
  };

  return (
    <section>
      <div className="container-fluid">
        <Slider {...settings} className="home_slider_Main">
          <div className="item">
            <img src={dog} className="w-100" alt="Slide 1" />
            <div className="info">
              <p>Help, Donate and Fundraise</p>
              <h2>Your Contribution is Important</h2>
              <button className="btn">
                <LuDog />
                Donate Now
              </button>
            </div>
          </div>
          <div className="item">
            <img src={slide1} className="w-100" alt="Slide 2" />
            <div className="info">
              <p>Help, Donate and Fundraise</p>
              <h2>Your Contribution is Important</h2>
              <button className="btn">
                <LuDog />
                Donate Now
              </button>
            </div>
          </div>
          <div className="item">
            <img src={dog} className="w-100" alt="Slide 3" />
            <div className="info">
              <p>Help them Today</p>
              <h2>
                Street Animals need Our
                <br />
                Protection
              </h2>
              <button className="btn">
                <LuDog />
                Donate Now
              </button>
            </div>
          </div>
          <div className="item">
            <img src={dog} className="w-100" alt="Slide 4" />
            <div className="info">
              <p>Small Effort Makes Big Change</p>
              <h2>
                Your Support Makes Us Save
                <br />
                Precious Lives
              </h2>
              <button className="btn">
                <LuDog />
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
