import "./SuccessStories.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

const Stories = () => {
  const settings = {
    loop: false,
    margin: 20,
    dots: false,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      600: {
        items: 2,
        dots: true,
      },
      1024: {
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
  };

  return (
    <div className="stories container">
      <div className="line-heading">
        <div className="dark-line"></div>
        <div className="stories-heading">
          <h2>Success Stories</h2>
          <h3>Our hurt to healed stories</h3>
        </div>
      </div>

      {/* Carousel for all devices */}
      <div className="gallery">
        <OwlCarousel className="owl-theme" {...settings}>
          <div className="stories-card-one">
            <div className="stories-card">
              <img src={gallery_1} alt="gallery-1" className="gallery-img" />
              <h3>Donate Us To Buy Medicines For Injured Dogs</h3>
              <p>
                StreetWorldz is a beacon of hope for stray and injured dogs,
                providing a safe haven for over 500 dogs at our shelter.
              </p>
              <div className="make-a-stories">
                <button>Read More.</button>
              </div>
            </div>
          </div>
          <div className="stories-card-one">
            <div className="stories-card">
              <img src={gallery_2} alt="gallery-1" className="gallery-img" />
              <h3>Donate Us To Buy Medicines For Injured Dogs</h3>
              <p>
                StreetWorldz is a beacon of hope for stray and injured dogs,
                providing a safe haven for over 500 dogs at our shelter.
              </p>
              <div className="make-a-stories">
                <button>Read More.</button>
              </div>
            </div>
          </div>
          <div className="stories-card-one">
            <div className="stories-card">
              <img src={gallery_3} alt="gallery-1" className="gallery-img" />
              <h3>Donate Us To Buy Medicines For Injured Dogs</h3>
              <p>
                StreetWorldz is a beacon of hope for stray and injured dogs,
                providing a safe haven for over 500 dogs at our shelter.
              </p>
              <div className="make-a-stories">
                <button>Read More.</button>
              </div>
            </div>
          </div>
          <div className="stories-card-one">
            <div className="stories-card">
              <img src={gallery_4} alt="gallery-1" className="gallery-img" />
              <h3>Donate Us To Buy Medicines For Injured Dogs</h3>
              <p>
                StreetWorldz is a beacon of hope for stray and injured dogs,
                providing a safe haven for over 500 dogs at our shelter.
              </p>
              <div className="make-a-stories">
                <button>Read More.</button>
              </div>
            </div>
          </div>
        </OwlCarousel>
        {/* <div className="stories-card">
            <img src={gallery_1} alt="gallery-1" className="gallery-img" />
            <h3>Donate Us To Buy Medicines For Injured Dogs</h3>
            <p>
              StreetWorldz is a beacon of hope for stray and injured
              dogs, providing a safe haven for over 500 dogs at our shelter.
            </p>
            <div className="make-a-stories">
              <button>Read More.</button>
            </div>
          </div>
          <div className="stories-card">
            <img src={gallery_2} alt="gallery-2" className="gallery-img" />
            <h3>Donate Us To Buy Medicines For Injured Dogs</h3>
            <p>
              StreetWorldz is a beacon of hope for stray and injured
              dogs, providing a safe haven for over 500 dogs at our shelter.
            </p>
            <div className="make-a-stories">
              <button>Read More.</button>
            </div>
          </div>
          <div className="stories-card">
            <img src={gallery_3} alt="gallery-3" className="gallery-img" />
            <h3>Donate Us To Buy Medicines For Injured Dogs</h3>
            <p>
              StreetWorldz is a beacon of hope for stray and injured
              dogs, providing a safe haven for over 500 dogs at our shelter.
            </p>
            <div className="make-a-stories">
              <button>Read More.</button>
            </div>
          </div>
          <div className="stories-card">
            <img src={gallery_4} alt="gallery-4" className="gallery-img" />
            <h3>Donate Us To Buy Medicines For Injured Dogs</h3>
            <p>
              StreetWorldz is a beacon of hope for stray and injured
              dogs, providing a safe haven for over 500 dogs at our shelter.
            </p>
            <div className="make-a-stories">
              <button>Read More.</button>
            </div>
            </div> */}
      </div>

      <div className="button-container">
        <button className="btn dark-btn">
          See more here <img src={white_arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Stories;
