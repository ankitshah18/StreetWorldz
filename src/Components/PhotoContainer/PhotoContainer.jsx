import React from "react";
import PropTypes from "prop-types";
import "./PhotoContainer.css";

const PhotoContainer = ({ image, text, minHeight, ...args }) => {
  console.log(image);
  const containerStyle = {
    backgroundImage: `url(${image})`,
    minHeight: minHeight,
    ...args,
  };

  return (
    <div className="photo" style={containerStyle}>
      <div className="photo-text">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

PhotoContainer.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  minHeight: PropTypes.string,
};

PhotoContainer.defaultProps = {
  minHeight: "30vh", // Default min-height if not provided
};

export default PhotoContainer;
