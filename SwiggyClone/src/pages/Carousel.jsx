import React, { useState, useEffect, useRef } from "react";
import { CARD_URL } from "../utils/constants";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Carousel = ({ carouselCards }) => {
  const carousel = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  useEffect(() => {
    if (carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    if (carousel.current !== null) {
      setMaxIndex(
        Math.floor(
          carousel.current.scrollWidth / carousel.current.offsetWidth
        ) - 1
      );
    }
  }, [carouselCards]);

  if (!carouselCards) return null;

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const moveNext = () => {
    if (currentIndex <= maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="w-full mx-auto h-64 flex flex-col my-4">
      <div className="flex items-center justify-between mt-10 px-4">
        <h3 className="font-bold text-3xl md-20 ml-40">              What's on your mind?</h3>
        <div className="flex gap-4">
          <Button
            onClick={movePrev}
            disabled={currentIndex === 0}
            icon={faArrowLeft}
          />
          <Button
            onClick={moveNext}
            disabled={currentIndex > maxIndex}
            icon={faArrowRight}
          />
        </div>
      </div>
      <div className="w-11/12 mx-auto h-52 relative overflow-hidden">
        <div
          ref={carousel}
          className="h-full pl-5 flex gap-8 overflow-hidden scroll-smooth"
        >
          {carouselCards.map((carouselCard) => (
            <img
              key={carouselCard.id}
              className="object-center h-full w-52 transition-transform hover:scale-110 duration-200 mix-blend-multiply cursor-pointer"
              src={CARD_URL + carouselCard.imageId}
              alt="card img"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
