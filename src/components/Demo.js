import React, { useState, Component } from "react";
import "../scss/demo.scss";

export default class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.pieces = [
      {
        author: "XXX",
        name: "工作記憶",
        video: "https://www.youtube.com/watch?v=81mGCwdpe8k",
      },
      {
        author: "XXX",
        name: "前庭覺刺激",
        video: "https://www.youtube.com/watch?v=81mGCwdpe8k",
      },
      {
        author: "XXX",
        name: "觸覺系統",
        video: "https://www.youtube.com/watch?v=81mGCwdpe8k",
      },
      {
        author: "XXX",
        name: "本體覺刺激",
        video: "https://www.youtube.com/watch?v=81mGCwdpe8k",
      },
      {
        author: "XXX",
        name: "邏輯拼圖",
        video: "https://www.youtube.com/watch?v=81mGCwdpe8k",
      },
      {
        author: "XXX",
        name: "手眼協調",
        video: "https://www.youtube.com/watch?v=81mGCwdpe8k",
      },
      {
        author: "XXX",
        name: "視覺認知",
        video: "https://www.youtube.com/watch?v=81mGCwdpe8k",
      },
      {
        author: "XXX",
        name: "注意力",
        video: "https://www.youtube.com/watch?v=81mGCwdpe8k",
      },
    ];
    this.state = {
      viewing: null,
    };
    this.vidRef = React.createRef();

    this.GetIconUrl = this.GetIconUrl.bind(this);
    this.EndView = this.EndView.bind(this);
    this.StartView = this.StartView.bind(this);
  }

  GetIconUrl(video) {
    let v_id = video.match(/v=([a-zA-Z0-9]+)$/)[1];
    return `https://img.youtube.com/vi/${v_id}/maxresdefault.jpg`;
  }

  StartView(url) {
    this.setState({
      viewing: url,
    });
  }

  EndView() {
    if (this.vidRef.current != null) {
    }
    this.setState({
      viewing: null,
    });
  }

  render() {
    return (
      <div className="demo">
        <img
          src="/assets/Image/Demo/bg.png"
          style={{
            position: "absolute",
            maxWidth: "100%",
            // opacity: "0.7",
          }}
        ></img>
        <div className="page-title-container">
          <div className="page-title">
            <span>作品展示</span>
          </div>
        </div>

        <div className="item-container">
          {this.pieces.map((v, i) => {
            return (
              <div
                id={i}
                className="item"
                onClick={() => {
                  this.StartView(v.video);
                }}
              >
                <img className="thumb" src={this.GetIconUrl(v.video)}></img>
                <div className="info">
                  <span className="author">{v.author}作品</span>
                  <span className="name">{v.name}</span>
                </div>
              </div>
            );
          })}
        </div>
        {this.state.viewing != null ? (
          <div className="view-container" onClick={this.EndView}>
            <div className="vid-holder">
              <div className="spacing-16-9"></div>
              {/* <div className="exit">x</div> */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/81mGCwdpe8k"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
