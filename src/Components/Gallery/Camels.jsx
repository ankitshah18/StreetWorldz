import React, { useState } from "react";
import PhotoContainer from "../PhotoContainer/PhotoContainer";
import camel_one from "../../assets/camel_one.jpg";
import "./Camel.css";
import Footer from "../Footer/Footer";
import camel1 from "../../assets/camel-1.jpg";
import camel2 from "../../assets/camel-2.jpg";
import camel3 from "../../assets/camel-3.jpg";
import camel4 from "../../assets/camel-4.jpg";
import camel5 from "../../assets/camel-5.jpg";
import camel6 from "../../assets/camel-6.jpg";
import camel7 from "../../assets/camel-7.jpg";
import camel8 from "../../assets/camel-8.jpg";
import camel9 from "../../assets/camel-9.jpg";
import camel10 from "../../assets/camel-10.jpg";
import camel11 from "../../assets/camel-11.jpg";
import camel12 from "../../assets/camel-12.jpg";

const Camels = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    if (selectedImage === image) {
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
    }
  };

  const images = [
    camel1,
    camel2,
    camel3,
    camel4,
    camel5,
    camel6,
    camel7,
    camel8,
    camel9,
    camel10,
    camel11,
    camel12,
  ];
  return (
    <div className="camel-container">
      <PhotoContainer image={camel_one} text="Camels" minHeight="25vh" />
      <div className={`camel-gallery `}>
        {images.map((image, index) => (
          <div
            className="card"
            key={index}
            onClick={() => handleImageClick(image)}
          >
            <div
              className="image-item"
              key={index}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        ))}
      </div>
      <Footer />
      {selectedImage && (
        <div
          className="enlarged-image-container"
          onClick={() => handleImageClick(selectedImage)}
        >
          <img src={selectedImage} alt="Enlarged" className="enlarged-image" />
        </div>
      )}
    </div>
  );
};

export default Camels;
