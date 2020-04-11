import React, { useState, Component } from "react";
import { Slide } from "react-slideshow-image";
import "../scss/homepage.scss";

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
    <div className="homePage bg-img">
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
      <div className="slogan">
        <msg id="title1">Welcome</msg>
        <msg id="title2">孩子成長最安心的依靠</msg>
        <msg id="desc">
          童心匯 - "讓飛魚飛" 致力給孩童最好的陪伴，成為啟發心靈的助手
        </msg>
        <div className="links">
          <a className="more" href="./working">
            看更多介紹
          </a>
          <a className="toabout" href="./working">
            前往關於我們
          </a>
        </div>
      </div>
    </div>
  );
}
