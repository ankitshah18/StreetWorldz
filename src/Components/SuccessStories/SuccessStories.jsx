import "./SuccessStories.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link, useNavigate } from "react-router-dom";
import white_arrow from "../../assets/white-arrow.png";
import { StoriesInfo } from "./StoriesData";
import { Heart } from "lucide-react";
import { getCardColor } from "./StoriesData";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Stories = () => {
  const { setSelectedStory } = useContext(AppContext);
  const navigate = useNavigate();

  const handleReadMore = (story) => {
    const titleForURL = story.title.replace(/\s+/g, "-"); // Replace spaces with dashes
    setSelectedStory(story);
    navigate(`/SingleStory/${titleForURL}`);
  };
  const handleSeeMore = () => {
    navigate("/allstories");
  };

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

      <div className="gallery">
        <OwlCarousel className="owl-theme" {...settings}>
          {StoriesInfo.map((item) => (
            <div className={`stories-card-${item.number}`} key={item.id}>
              <div className="stories-card" style={getCardColor(item.id)}>
                <img
                  src={item.image}
                  alt={`gallery-${item.number}`}
                  className="gallery-img"
                />
                {/* <img src={gallery_1} alt="gallery-1" className="gallery-img" /> */}
                <h3>{item.title}</h3>
                <p>
                  {item.description.split(" ").slice(0, 28).join(" ")}
                  {item.description.split(" ").length > 40 && "..."}
                </p>
                <div className="make-a-stories">
                  <button
                    className="donate-button"
                    onClick={() => handleReadMore(item)}
                  >
                    <Heart size={16} style={{ marginRight: "6px" }} />
                    <Link>Read More.</Link>
                  </button>
                  {/* <img src={white_arrow} alt="white-arrow" /> */}
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>

      <div className="button-container">
        <button className="btn dark-btn" onClick={handleSeeMore}>
          See more here <img src={white_arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Stories;

{
  /* <div className="stories-card-one">
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
          </div> */
}
