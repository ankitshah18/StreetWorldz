
import "./Campaign.css";
import gallery_1 from "../../assets/gallery-1.png";
import white_arrow from "../../assets/white-arrow.png";

const Campaign = () => {
  return (
    <div className="campaign container">
      <div className="line-heading">
        <div className="dark-line"></div>
        <div className="campaign-heading">
          <h2>Make A Campaign</h2>
          <h3>Featured Campaign</h3>
        </div>
      </div>
      <div className="gallery">
        <div className="campaign-card-one">
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
        </div>
        <div className="campaign-card-two">
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
        </div>
        <div className="campaign-card-three">
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
        </div>
        <div className="campaign-card-four">
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
        </div>

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
