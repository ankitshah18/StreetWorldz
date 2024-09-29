import "./Campaign.css";
import white_arrow from "../../assets/white-arrow.png";
import { FoodCampaign } from "./CampaignData";
import { getCardColor } from "./CampaignData";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { LuDog } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Campaign = ({ setRouteTitle }) => {
  const navigate = useNavigate();
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

  const handleDonateClick = (title) => {
    setRouteTitle(title);
    localStorage.setItem("routeTitle", title); // Save to localStorage
    navigate(`/featuredFoodCampaign/${encodeURIComponent(title)}`); // Navigate with title
  };

  return (
    <div className="campaign container">
      <div className="line-heading">
        <div className="dark-line"></div>
        <div className="campaign-heading">
          <h2>Make A Campaign</h2>
          <h3>Food Campaign</h3>
        </div>
      </div>

      <div className="gallery">
        <OwlCarousel className="owl-theme" {...settings}>
          {FoodCampaign.map((item) => (
            <div className={`campaign-card-${item.number}`} key={item.id}>
              <div className="campaign-card" style={getCardColor(item.id)}>
                <img
                  src={item.image}
                  alt={`gallery-${item.number}`}
                  className="gallery-img"
                />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={`make-a-campaign-${item.number}`}>
                  <Link
                    to={`/featuredFoodCampaign/${encodeURIComponent(
                      item.routName
                    )}`}
                  >
                    <button>
                      <LuDog size={25} /> Donate Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
        {/* <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" /> */}
      </div>
      <div className="button-container">
        <button className="btn dark-btn">
          See more here <img src={white_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Campaign;

{
  /* <div className="campaign-card-one">
            <div className="campaign-card">
              <img src={gallery_1} alt="gallery-1" className="gallery-img" />
              <h3>Donate Us To Buy Medicines For Injured Dogs</h3>
              <p>
                Dog Home Foundation is a beacon of hope for stray and injured
                dogs, providing a safe haven for over 500 dogs at our shelter.
              </p>
              <div className="make-a-campaign">
                <button>Make a Campaign</button>
              </div>
            </div>
          </div> */
}
