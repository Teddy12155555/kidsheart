import React, { useState, Component } from "react";
import { Slide, Zoom } from "react-slideshow-image";
import "../scss/brand.scss";

export default class Brand extends React.Component {
  constructor(props) {
    super(props);
    this.properties = {
      indicators: false,
      // duration: 1000,
      transitionDuration: 300,
      autoplay: false,
      infinite: true,
      arrows: true,
      pauseOnHover: true,
      prevArrow: <div></div>,
      nextArrow: <div></div>,
      onChange: (oldIndex, newIndex) => {
        this.OnSlideChange(newIndex);
      },
    };
    this.videos = [
      {
        name: "負 責 人 介 紹",
        url: "https://www.youtube.com/embed/VaEIUoqsEaY",
      },
      {
        name: "孩 子 學 習 需 面 臨 問 題",
        url: "https://www.youtube.com/embed/BNmkLoMcXIk",
      },
      { name: "專 注 力", url: "https://www.youtube.com/embed/dOzFcm0hdzQ" },
      { name: "觀 察 孩 童", url: "https://www.youtube.com/embed/te6BpZgO0aw" },
      {
        name: "幼 兒 學 習 區 規 畫 建 議",
        url: "https://www.youtube.com/embed/nJfBeZbs3AA",
      },
    ];

    this.links = [
      {
        name: "相關課程",
        url: "/working",
      },
      {
        name: "師資陣容",
        url: "/teachers",
      },
      {
        name: "玩具評測",
        url: "/evaluation",
      },
      {
        name: "其他平台",
        url: "/contact",
      },
    ];

    this.intro_texts = [
      `    「在校園鞦韆上，有一個孩子靜靜的坐在上面，手緊握繩索卻沒有任何聲音，乖乖地讓媽媽從背後推他盪鞦韆數十分鐘。」背景是治療師的我不由自主地觀察著，\
出於關心向這位每天出現在校園的媽媽攀談，我發現這位發展遲緩兒的媽媽內心是非常著急地，他怕如果不趕快幫兒子做復健與治療，兒子可能會從此錯過發展的黃金期，\
可是他又不能每天二十四小時在醫院做治療，而日子一天天的過去，想幫兒子卻又一籌莫展!`,
      `     相信這不只是我每天在課後校園中所見到的一個場景，如果細心觀察，不少人應該對類似的景象也不陌生。我常常在想如何能能幫上一點忙，\
讓這群無助又想盡辦法要孩子像一班人正常生活的父母，找到一個協助孩子的方法，我以職能治療師的身分曾在四家醫院工作的經驗以及特教管理教師所具有的訓練中，\
發現家長如果能找到合適的治療管道，又積極在家演練治療活動時，這些有特殊需求的孩子，就會有顯著的進步和功能的改善。家長是孩子進步與成長的最佳推手，\
但是推手需要醫療和教育專業團隊的意見和指導，才能發揮最大功效。`,
      `     從早期療育服務個案通被概況我們看到孩子在早療的需求日增，看到這些發展落後的個案，讓我們想到了折翅的飛魚，當飛魚不會飛而出現失落感與無力感，\
因此我們想要讓飛魚飛，飛往更高的藍天!`,
    ];

    this.sign_points = [
      "童心會能幫助您孩子健康成長",
      "優秀師資陣容看得清楚",
      ".....",
    ];
    this.slideRef = null;

    this.state = {
      slideShow: 0,
    };
    this.ChangeSlide = this.ChangeSlide.bind(this);
    this.OnSlideChange = this.OnSlideChange.bind(this);
  }

  ChangeSlide(i) {
    if (this.slideRef == null) return;
    this.slideRef.goTo(i);
  }

  OnSlideChange(newIndex) {
    this.setState({
      slideShow: newIndex,
    });
  }

  render() {
    return (
      <div className="brand">
        <img src="/assets/Image/Brand/background.png"></img>
        <div className="brand-container">
          <div className="video-slides">
            <Slide
              ref={(ref) => {
                this.slideRef = ref;
              }}
              {...this.properties}
            >
              {this.videos.map((v, i) => {
                return (
                  <div
                    key={i}
                    style={{ paddingTop: "56.25%", position: "relative" }}
                  >
                    <iframe
                      style={{ position: "absolute", top: 0, left: 0 }}
                      width="100%"
                      height="100%"
                      src={v.url}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                );
              })}
            </Slide>
            <div className="slide-indicators-container">
              {this.videos.map((v, i) => {
                return (
                  <div
                    className={"indicator" + (i == 0 ? "" : " append")}
                    key={i}
                    onClick={() => {
                      this.ChangeSlide(i);
                    }}
                  >
                    {this.state.slideShow == i ? (
                      <div className="current"></div>
                    ) : null}
                    {v.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="brand-intro">
            <div className="icons">
              <div className="logo">
                <img src="/assets/Image/logo.png"></img>
              </div>
              <div className="sign"></div>
            </div>
            <div className="intro-texts">
              {this.intro_texts.map((v, i) => {
                return (
                  <div id={i} className="intro-text">
                    {" "}
                    {v}
                  </div>
                );
              })}
            </div>

            {this.links.map((v, i) => {
              let p = 100 / (this.links.length + 1);
              return (
                <div
                  key={i}
                  className="intro-link"
                  style={{
                    left: `${p * (i + 1)}%`,
                  }}
                  onClick={() => {
                    window.location.href = v.url;
                  }}
                >
                  <div className="name">{v.name}</div>
                </div>
              );
            })}
          </div>
          <div className="slogan">
            <div className="title">贏在起跑點</div>
            <div className="points">
              {this.sign_points.map((v, i) => {
                return (
                  <div className="point">
                    <img src="/assets/Image/Brand/check.png"></img>
                    <span>{v}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* {slideImages.map((v, i) => {
            return (
              <div className="each-slide" key={i}>
                <img src={v} className="photo"></img>
              </div>
            );
          })} */}
      </div>
    );
  }
}
