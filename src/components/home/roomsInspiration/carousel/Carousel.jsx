import React, { useEffect, useState } from "react";
import "./carousel.scss";
import ImageDescription from "./imageDescription/ImageDescription";
import { IoPlayCircleSharp, IoStopCircleSharp } from "react-icons/io5";
import { carouselImages } from "../../../../assets/cloudImages/cloudImages";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [transitionClass, setTransitionClass] = useState("");

  useEffect(() => {
    let autoplay;
    if (isAutoplay) {
      autoplay = setInterval(() => {
        handleNextImage();
      }, 5000);
    }
    return () => clearInterval(autoplay);
  }, [isAutoplay]);

  const handleNextImage = () => {
    setTransitionClass("fade-out");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
      setTransitionClass("fade-in");
    }, 500);
  };

  const handlePrevImage = () => {
    setTransitionClass("fade-out");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
      );
      setTransitionClass("fade-in");
    }, 500);
  };

  const handleDotClick = (index) => {
    setTransitionClass("fade-out");
    setTimeout(() => {
      setCurrentIndex(index);
      setTransitionClass("fade-in");
    }, 500);
  };

  return (
    <div className="carousel-container">
      <div className={`current-image ${transitionClass}`}>
        <LazyLoadImage
          src={carouselImages[currentIndex].src}
          alt="Current"
          onError={() =>
            console.log(
              "Image failed to load:",
              carouselImages[currentIndex].src
            )
          }
        />

        <div className="image-description">
          <ImageDescription
            number={
              currentIndex + 1 < 10
                ? `0${currentIndex + 1}`
                : `${currentIndex + 1}`
            }
            title={carouselImages[currentIndex].title}
            description={carouselImages[currentIndex].description}
          />
          <div className="next-button" onClick={handleNextImage}>
            <img src="../../../../../src/assets/icons/rightArrow1.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="carousel-view-dots">
        <div className={`carousel-view ${transitionClass}`}>
          <LazyLoadImage
            src={carouselImages[(currentIndex + 1) % carouselImages.length].src}
            alt="Next"
            onError={() =>
              console.log(
                "Image failed to load:",
                carouselImages[(currentIndex + 1) % carouselImages.length].src
              )
            }
          />
          <div className="prev-button" onClick={handlePrevImage}>
            <img
              src="../../../../../src/assets/icons/rightanglearrow.svg"
              alt=""
            />
          </div>
        </div>
        <div className="dots-autoplay">
          <div className="dots-container">
            <div className="dots">
              {carouselImages.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
          <div onClick={() => setIsAutoplay(!isAutoplay)} className="autoplay">
            {isAutoplay ? (
              <IoStopCircleSharp size={28} className="controls" />
            ) : (
              <IoPlayCircleSharp size={28} className="controls" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
