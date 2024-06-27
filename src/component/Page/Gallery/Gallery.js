import React, { useState } from "react";
import "./Gallery.css";

const images = [
  require("../../../images/7294348d-f284-40bf-8e62-295d3c85d0de.jpeg"),
  require("../../../images/d7b94117-07ca-4993-a02d-8d84322a3876.jpeg"),
  require("../../../images/yitag.jpg"),
  require("../../../images/photo_5976566633449243966_y.jpg"),
  require("../../../images/photo_5976566633449243979_y.jpg"),
  require("../../../images/photo_5976566633449243975_y.jpg"),
  require("../../../images/taxi2.jpg"),
  require("../../../images/taxi3.jpg"),
  require("../../../images/taxi4.jpg"),
  require("../../../images/photo_5976566633449243988_y.jpg"),
  require("../../../images/photo_5976566633449243961_y.jpg"),
  require("../../../images/photo_5976566633449243967_y.jpg"),
  require("../../../images/photo_5976566633449243953_y.jpg"),
  require("../../../images/photo_5976566633449243969_y.jpg"),
  require("../../../images/photo_5976566633449243989_y.jpg"),
  require("../../../images/photo_5976566633449243971_y.jpg"),
  require("../../../images/yitaj.jpg"),
  require("../../../images/yitz1.jpg"),
  // Add more image paths here
];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-heading">Images showing our previous projects</h1>
      <div className="gallery-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index}`}
            className="gallery-image"
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      {selectedImageIndex !== null && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img
            className="modal-content"
            src={images[selectedImageIndex]}
            alt={`Selected ${selectedImageIndex}`}
          />
          <button className="nav-button prev" onClick={prevImage}>
            &lt; Prev
          </button>
          <button className="nav-button next" onClick={nextImage}>
            Next &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
