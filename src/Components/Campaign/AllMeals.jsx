import React, { useContext } from "react";
import "./AllMeals.css";
import { AppContext } from "../context/AppContext";
import cat from "../../assets/Cat.jpg";

import PhotoContainer from "../PhotoContainer/PhotoContainer";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
const AllMeals = () => {
  const { setSelectedMeal } = useContext(AppContext);
  const { FoodCampaign } = useContext(AppContext);
  const navigate = useNavigate();

  const DonateForOneMeal = (meal) => {
    const titleForURL = meal.title.replace(/\s+/g, "-");
    setSelectedMeal(meal);
    navigate(`/SingleMeal/${titleForURL}`);
  };

  // console.log("Meals : ", FoodCampaign);
  return (
    <div>
      <PhotoContainer image={cat} text="All Meals" minHeight="30vh" />
      <div className="container allmeals-container">
        {FoodCampaign.map((meal) => (
          <div className="allmeal-card" key={meal.id}>
            <h4>{meal.title}</h4>
            <p>
              {" "}
              {meal.description.split(" ").slice(0, 68).join(" ")}
              {meal.description.split(" ").length > 40 && "..."}
            </p>
            <div className="btn-cover">
              <button
                className="allmeal-button"
                onClick={() => DonateForOneMeal(meal)}
              >
                Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllMeals;
