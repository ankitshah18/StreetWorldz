import React from "react";
import "../FoodCampaign/OneDayMeal.css";
import dog from "../../assets/meal-dog.jpg";
import Footer from "../../Components/Footer/Footer";
import injureddog from "../../assets/injured-dog.jpg";
import { LuDog } from "react-icons/lu";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import googlepay from "../../assets/googlepay.png";
import phonepay from "../../assets/phonepay.png";
import bhimupi from "../../assets/bhimupi.png";
const OneDayMeal = () => {
  return (
    <div>
      <div className="container">
        <div className="title-food">
          {" "}
          <h1>One Time Meal!</h1>
          <p>28-Sep-2024</p>
          <img src={dog} alt="" className="meal-img" />
          <div className="food-description">
            <p>
              Your donation will help us move our dogs to a permanent shelter so
              they can receive the love and medical attention they require.
            </p>

            <strong>(This donation is under 80G exempted)</strong>
            <br />
            <span>Donate via Card, UPI, &amp; Wallet (INR Only)</span>
          </div>
          <div className="description-and-payment">
            <div className="description-cards">
              <div className="description-card-one">
                <img src={injureddog} alt="" />
                <p>Current Situation:</p>
                <p>
                  Dog Home Foundation’s mission is to provide refuge and medical
                  care to dogs facing adversity, including those who are
                  accidental, paralyzed, abused, and suffering from diseases
                  such as cancer, distemper, parvo, and TVT (Transmissible
                  Venereal Tumor). Their commitment to rescuing and
                  rehabilitating animals is commendable, but the organization is
                  currently operating over its capacity, leading to a backlog of
                  dogs waiting for admission.
                </p>
                <p>
                  With more than 300 dogs under their care, the existing
                  facilities are strained, making it difficult to accommodate
                  the increasing number of rescues and medical cases. Despite
                  these challenges, Dog Home Foundation continues to rescue over
                  20 dogs daily, addressing emergencies and providing critical
                  care to those in dire need.
                </p>
              </div>
            </div>
            <div className="payement-cards">
              <div className="payment-card-one">
                <div className="header-one">
                  {" "}
                  <LuDog size={20} /> <h4> Share Via</h4>
                </div>
                <div className="card-one-logos">
                  <img src={facebook} alt="facebook" />
                  <img src={youtube} alt="" />
                </div>
              </div>
              <div className="payement-card-two">
                <div className="header-one">
                  {" "}
                  <LuDog size={20} /> <h4> Donate Via</h4>
                </div>
                <div className="money-section">
                  <h5 style={{ color: "#1bb7bc", fontSize: "16px" }}>
                    ₹9,114,394 raised out of ₹10,000,000
                  </h5>
                  <div className="progress-bar">
                    <div
                      className="bar"
                      style={{ color: "white", fontSize: "16px" }}
                    >
                      81%
                    </div>
                  </div>
                  <hr />
                  <div className="money-tabs">
                    <div
                      className="money-tab"
                      style={{
                        backgroundColor: "#6c757d",
                        borderColor: "#6c757d",
                        color: "white",
                      }}
                    >
                      ₹,1000
                    </div>
                    <div className="money-tab">₹2,000</div>
                    <div className="money-tab">₹3,000</div>
                    <div className="money-tab">₹4,000</div>
                  </div>
                  <div className="selected-amount">₹4,000</div>
                  <hr />
                  <h5 style={{ marginBottom: "15px" }}>UPI</h5>
                  <div className="payment-option-icons">
                    <div className="payment-icon">
                      <img src={googlepay} alt="" />
                      <p>Google Pay</p>
                    </div>
                    <div className="payment-icon">
                      <img src={phonepay} alt="" />
                      <p>Phone Pay</p>
                    </div>
                    <div className="payment-icon">
                      <img src={bhimupi} alt="" />
                      <p>Bhim Upi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OneDayMeal;
