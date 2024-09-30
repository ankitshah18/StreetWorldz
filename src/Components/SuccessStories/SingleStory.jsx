import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import PhotoContainer from "../PhotoContainer/PhotoContainer";
import cat from "../../assets/Cat.jpg";
import Footer from "../Footer/Footer";
import "./SingleStory.css";

const SingleStory = () => {
  const { selectedStory } = useContext(AppContext);
  console.log("SelectedStory", selectedStory);
  return (
    <div>
      <PhotoContainer image={cat} text={selectedStory.title} minHeight="30vh" />{" "}
      <div className="container story-container">
        <div className="story-description">
          <img src={selectedStory.image} alt="" />
          <p>{selectedStory.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleStory;
