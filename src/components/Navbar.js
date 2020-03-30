import React, { useState, Component } from "react";
import "../scss/navbar.scss";

export default function Navbar(props) {
  return (
    <div className="nav">
      <ul>
        <li className="nav-cell">
          <a href="default.asp">EN</a>
        </li>
        <li className="nav-cell">
          <a href="news.asp">Search</a>
        </li>

        <div className="nav-cell">
          <div className="dropdown">
            <button class="dropbtn">
              <i class="fa fa-caret-down"></i>
              活動資訊
            </button>
            <div class="dropdown-content">
              <a href="#">最新開課</a>
              <a href="#">親職講座</a>
              <a href="#">公益活動</a>
            </div>
          </div>
        </div>

        <div className="nav-cell">
          <div className="dropdown">
            <button class="dropbtn">
              <i class="fa fa-caret-down"></i>
              成果展示
            </button>
            <div class="dropdown-content">
              <a href="#">參與者回饋</a>
              <a href="#">著作 / 展示</a>
            </div>
          </div>
        </div>

        <div class="nav-cell">
          <div className="dropdown">
            <button class="dropbtn">
              <i class="fa fa-caret-down"></i>
              服務項目
            </button>
            <div class="dropdown-content">
              <a href="#">孩童評量</a>
              <a href="#">優師培訓</a>
              <a href="#">課程探索</a>
            </div>
          </div>
        </div>

        <div className="nav-cell">
          <div className="dropdown">
            <button class="dropbtn">
              <i class="fa fa-caret-down"></i>
              關於我們
            </button>
            <div class="dropdown-content">
              <a href="#">品牌故事</a>
              <a href="#">聯絡方式</a>
            </div>
          </div>
        </div>

        <li className="nav-head-img">
          <a href="./">
            <img src={require("../assets/Image/logo.png")}></img>
          </a>
        </li>
      </ul>
    </div>
  );
}
