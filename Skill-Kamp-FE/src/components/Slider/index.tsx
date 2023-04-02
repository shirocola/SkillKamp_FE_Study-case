import React, { useState, useEffect } from "react";
import "./style.scss";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

type SliderProps = {
  images: string[];
};

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide, images]);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className="slider">
      <div className="slider__image">
        <img src={images[currentSlide]} alt="" />
        <div className="slider__controls">
          <button className="slider__controls__button slider__controls__button--prev" onClick={handlePrevSlide}>
            <ArrowBackIos fontSize="large" />
          </button>
          <button className="slider__controls__button slider__controls__button--next" onClick={handleNextSlide}>
            <ArrowForwardIos fontSize="large" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
