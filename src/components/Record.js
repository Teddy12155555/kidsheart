import React, { useState, Component, useRef } from "react";
import { Slide, Zoom } from "react-slideshow-image";
import "../scss/record.scss";

class SubBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displaying: 0,
    };
    this.Arrange = this.Arrange.bind(this);
    this.fullSrcLength = this.props.fullSrc.length;
  }

  Arrange(start) {
    let ret = [];

    if (start < this.fullSrcLength) {
      ret = this.props.fullSrc.map((v, i) => {
        let distance = start - i;
        let front_z = Math.floor(this.fullSrcLength / 2) + 1;
        return (
          <div
            key={i}
            className={"container"}
            style={{
              marginLeft: `${distance * 200}px`,
              marginTop: `${Math.abs(distance) * 20}px`,
              zIndex: `${front_z - Math.abs(distance)}`,
            }}
            onClick={(e) => {
              this.setState({
                displaying: i,
              });
              e.stopPropagation();
            }}
          >
            <img src={`/assets/Image/Record/${this.props.fullSrc[i]}`}></img>
          </div>
        );
      });
    }

    return ret.reverse();
  }

  render() {
    return (
      <div
        className="browser"
        onClick={() => {
          this.props.browse_sub(null);
        }}
      >
        <div className="anchor">{this.Arrange(this.state.displaying)}</div>
        <div
          className="nav"
          style={{
            left: 0,
          }}
          onClick={(e) => {
            let newIndex = (this.state.displaying + 1) % this.fullSrcLength;
            this.setState({
              displaying: newIndex,
            });
            e.stopPropagation();
          }}
        >
          <img src="/assets/Image/Record/browser/prev.png"></img>
        </div>
        <div
          className="nav"
          style={{
            right: 0,
          }}
          onClick={(e) => {
            let newIndex = (this.state.displaying - 1) % this.fullSrcLength;
            newIndex = newIndex < 0 ? newIndex + this.fullSrcLength : newIndex;
            this.setState({
              displaying: newIndex,
            });
            e.stopPropagation();
          }}
        >
          <img src="/assets/Image/Record/browser/next.png"></img>
        </div>
      </div>
    );
  }
}

class SubContainer extends React.Component {
  constructor(props) {
    super(props);
    this.recordDir = "/assets/Image/Record/";
    this.container = React.createRef();
    this.scrolling = false;
    this.start_left_x = 0;
    this.start_scroll_left = 0;
    this.click_on_sub = null;
    this.click_pos = {
      x: 0,
      y: 0,
    };
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
        {this.props.cat_subs.map((v, i) => {
          return (
            <div
              key={i}
              className="sub-cover"
              onMouseDown={(e) => {
                this.click_on_sub = i;
                this.click_pos = { x: e.pageX, y: e.pageY };
              }}
              onMouseMove={(e) => {
                if (
                  this.click_on_sub != null &&
                  (e.pageX - this.click_pos.x) ** 2 +
                    (e.pageY - this.click_pos.y) ** 2 >
                    900
                ) {
                  this.click_on_sub = null;
                }
              }}
              onMouseUp={(e) => {
                if (this.click_on_sub == i) {
                  this.props.browse_sub(i);
                }
                this.click_on_sub = null;
              }}
            >
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

class CategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      browsing_sub: null,
    };
    this.browse_sub = this.browse_sub.bind(this);
  }

  browse_sub(i) {
    this.setState({
      browsing_sub: i,
    });
  }

  render() {
    return (
      <div className="category-container">
        {this.state.browsing_sub != null ? (
          <SubBrowser
            fullSrc={this.props.cat_obj.subs[this.state.browsing_sub].fullSrc}
            browse_sub={this.browse_sub}
          />
        ) : null}

        <div className="title">{this.props.cat_obj.category}</div>
        <SubContainer
          cat_subs={this.props.cat_obj.subs}
          browse_sub={this.browse_sub}
        />
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
            fullSrc: ["test (1).jpg", "test (1).jpg", "test (1).jpg"],
          },
          {
            title: "xx課程",
            coverSrc: ["test (1).jpg", "test (1).png", "test (2).png"],
            fullSrc: [
              "test (1).jpg",
              "test (1).png",
              "test (2).png",
              "test (1).jpg",
              "test (1).png",
              "test (2).png",
            ],
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
          return <CategoryContainer key={i} cat_obj={v} />;
        })}
      </div>
    );
  }
}
