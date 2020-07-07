import React, { useState, Component } from "react";
import "../scss/navbar.scss";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <ul>
        <li className="nav-cell">
          <button href="#" className="en-btn">
            EN
          </button>
        </li>

        <li className="nav-cell">
          <form className="search" action="">
            <input type="text" placeholder="Search" name="search" />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </li>

        <div className="nav-cell">
          <div className="dropdown">
            <button className="dropbtn">
              <i className="fa fa-caret-down"></i>
              活動資訊
            </button>
            <div className="dropdown-content">
              <a href="./working">最新開課</a>
              <a href="./working">親職講座</a>
              <a href="./working">公益活動</a>
            </div>
          </div>
        </div>

        <div className="nav-cell">
          <div className="dropdown">
            <button className="dropbtn">
              <i className="fa fa-caret-down"></i>
              成果展示
            </button>
            <div className="dropdown-content">
              <a href="./record">參與者回饋</a>
              <a href="./demo">著作 / 展示</a>
            </div>
          </div>
        </div>

        <div className="nav-cell">
          <div className="dropdown">
            <button className="dropbtn">
              <i className="fa fa-caret-down"></i>
              服務項目
            </button>
            <div className="dropdown-content">
              <a href="./evaluation">孩童評量</a>
              <a href="./teachers">優師培訓</a>
              <a href="./lesson">課程探索</a>
            </div>
          </div>
        </div>

        <div className="nav-cell">
          <div className="dropdown">
            <button className="dropbtn">
              <i className="fa fa-caret-down"></i>
              關於我們
            </button>
            <div className="dropdown-content">
              <a href="./brand">品牌故事</a>
              <a href="./contact">聯絡方式</a>
            </div>
          </div>
        </div>

        <li className="nav-head-img">
          <a href="./home">
            <img src="/assets/Image/logo.png"></img>
          </a>
        </li>
      </ul>
      <div className="seperator" />
    </div>
  );
}
