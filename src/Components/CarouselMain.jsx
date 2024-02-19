import cardImg from "./../assets/cardimg.png";
import React, { useState, useEffect } from "react";

export default function Slider() {
  const images = [cardImg, cardImg, cardImg];

  return (
    <>
      <div className="h-100">
        <img
          src={cardImg}
          className={`carousel-slide object-cover transition-opacity duration-1000`}
        />
      </div>
    </>
  );
}
