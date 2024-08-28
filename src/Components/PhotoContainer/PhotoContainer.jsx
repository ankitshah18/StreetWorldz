import React from "react";
import PropTypes from "prop-types";
import "./PhotoContainer.css";

const PhotoContainer = ({ image, text, minHeight, className, ...args }) => {
  const containerStyle = {
    backgroundImage: `url(${image})`,
    minHeight: minHeight,
    ...args,
  };

  return (
    <div className={`photo ${className}`} style={containerStyle}>
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
  className: PropTypes.string, // Add className prop type
};

PhotoContainer.defaultProps = {
  minHeight: "30vh",
  className: "", // Default to an empty string if not provided
};

export default PhotoContainer;
