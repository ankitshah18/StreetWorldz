import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import PhotoContainer from "../PhotoContainer/PhotoContainer";
import cat from "../../assets/Cat.jpg";
import Footer from "../Footer/Footer";
import "./AllStories.css";
import { useNavigate } from "react-router-dom";
import SingleStory from "./SingleStory";

const AllStories = () => {
  const { setSelectedStory } = useContext(AppContext);
  const { StoriesInfo } = useContext(AppContext);
  const navigate = useNavigate();
  const ReadFullStory = (story) => {
    const titleForURL = story.title.replace(/\s+/g, "-");
    setSelectedStory(story);
    navigate(`/SingleStory/${titleForURL}`);
  };
  // console.log("StoriesInfo", StoriesInfo);
  return (
    <div>
      <PhotoContainer image={cat} text="Success Stories" minHeight="30vh" />
      <div className="container allstories-container">
        {StoriesInfo.map((story) => (
          <div className="allstory-card" key={story.id}>
            <h4>{story.title}</h4>
            <p>
              {" "}
              {story.description.split(" ").slice(0, 68).join(" ")}
              {story.description.split(" ").length > 40 && "..."}
            </p>
            <div className="btn-cover">
              <button
                className="allstory-button"
                onClick={() => ReadFullStory(story)}
              >
                Read Full Story
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllStories;
