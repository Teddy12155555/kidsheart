import React, { useState, Component, useRef } from "react";
import { Slide, Zoom } from "react-slideshow-image";
import "../scss/record.scss";

class SubContainer extends React.Component {
  constructor(props) {
    super(props);
    this.recordDir = "/assets/Image/Record/";
    this.container = React.createRef();
    this.scrolling = false;
    this.start_left_x = 0;
    this.start_scroll_left = 0;
  }

  render() {
    return (
      <div
        className="sub-container"
        ref={this.container}
        onMouseDown={(e) => {
          this.scrolling = true;
          this.start_left_x = e.pageX;
          this.start_scroll_left = this.container.current.scrollLeft;
        }}
        onMouseUp={(e) => {
          this.scrolling = false;
        }}
        onMouseLeave={(e) => {
          this.scrolling = false;
        }}
        onMouseEnter={(e) => {}}
        onMouseMove={(e) => {
          if (!this.scrolling) return;
          e.preventDefault();
          let move = e.pageX - this.start_left_x;
          this.container.current.scrollLeft = this.start_scroll_left - move;
        }}
      >
        {this.props.cat_obj.subs.map((v, i) => {
          return (
            <div key={i} className="sub-cover">
              <div className="title">{v.title}</div>
              {v.coverSrc.map((iv, ii) => {
                return <img key={ii} src={`${this.recordDir}${iv}`}></img>;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default class Record extends React.Component {
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

    this.slideRef = null;

    this.state = {
      slideShow: 0,
    };

    this.ChangeSlide = this.ChangeSlide.bind(this);
    this.OnSlideChange = this.OnSlideChange.bind(this);

    this.pageData = [
      {
        category: "課程照片、影片",
        subs: [
          {
            title: "xx課程",
            coverSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
            fullSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
          },
          {
            title: "xx課程",
            coverSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
            fullSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
          },
          {
            title: "xx課程",
            coverSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
            fullSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
          },
          {
            title: "xx課程",
            coverSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
            fullSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
          },
          {
            title: "xx課程",
            coverSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
            fullSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
          },
          {
            title: "xx課程",
            coverSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
            fullSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
          },
          {
            title: "xx課程",
            coverSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
            fullSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
          },
        ],
      },
      {
        category: "課程照片、影片",
        subs: [
          {
            title: "xx課程",
            coverSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
            fullSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
          },
          {
            title: "xx課程",
            coverSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
            fullSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
          },
          {
            title: "xx課程",
            coverSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
            fullSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
          },
          {
            title: "xx課程",
            coverSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
            fullSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
          },
          {
            title: "xx課程",
            coverSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
            fullSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
          },
          {
            title: "xx課程",
            coverSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
            fullSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
          },
          {
            title: "xx課程",
            coverSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
            fullSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
          },
        ],
      },
    ];
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
      <div className="record">
        {this.pageData.map((v, i) => {
          return (
            <div key={i} className="category-container">
              <div className="title">{v.category}</div>
              <SubContainer cat_obj={v} />
            </div>
          );
        })}
      </div>
    );
  }
}
