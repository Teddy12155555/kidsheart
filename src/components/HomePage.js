import React, { useState, Component } from "react";
import { Slide } from "react-slideshow-image";
import "../scss/home.scss";

const slideImages = [
  "/assets/Image/slider0.jpg",
  "/assets/Image/slider1.jpg",
  "/assets/Image/slider2.jpg",
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

export default function HomePage(props) {
  return (
    <div className="homePage">
      <div className="slide-container">
        <Slide {...properties}>
          {slideImages.map((v, i) => {
            return (
              <div className="each-slide" key={i}>
                <img src={v} className="photo"></img>
              </div>
            );
          })}
        </Slide>
      </div>
    </div>
  );
}
