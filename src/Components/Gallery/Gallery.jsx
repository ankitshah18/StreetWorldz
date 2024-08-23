import React from "react";
import "./Gallery.css";
import cat from "../../assets/Cat.jpg";

import PhotoContainer from "../PhotoContainer/PhotoContainer";
import Footer from "../Footer/Footer";
import camel_one from "../../assets/camel_one.jpg";
import cow from "../../assets/cowtwo.jpg";
import dog from "../../assets/dog-1.jpg";

const Gallery = () => {
  return (
    <>
      <div className="gallery-container">
        <PhotoContainer image={cat} text="Gallery" minHeight="30vh" />

        <div className="cards">
          <div className="camel_card">
            <img src={camel_one} alt="" />
            <h4>Camels</h4>
          </div>
          <div className="cat_card">
            <img src={cat} alt="" />
            <h4>Cats</h4>
          </div>
          <div className="cow_card">
            <img src={cow} alt="" />
            <h4>Cow</h4>
          </div>
          <div className="dog_card">
            <img src={dog} alt="" />
            <h4>Dogs</h4>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Gallery;
