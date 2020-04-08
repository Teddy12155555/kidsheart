import React, { useState, Component } from "react";
import "../scss/footer.scss";

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="seperator" />
      <div className="container">
        <div className="icons"></div>
        <div className="column">
          <div className="title">HOME</div>
          <div className="element">首頁</div>
          <div className="element">關於我們</div>
          <div className="element">服務項目</div>
          <div className="element">成果展示</div>
          <div className="element">活動項目</div>
        </div>

        <div className="column">
          <div className="title">LOCATION</div>
          <div className="element">公司地址</div>
        </div>

        <div className="column">
          <div className="title">HELP</div>
          <div className="element">聯絡我們</div>
        </div>

        <div className="column">
          <div className="title">SPONSOR</div>
        </div>
      </div>
    </div>
  );
}
