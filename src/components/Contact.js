import React, { useState, Component } from "react";
import "../scss/contact.scss";

export default function Contact(props) {
  const [Send, setSend] = useState("送出");
  const SendEmail = () => {
    setSend("已送出！謝謝您！");
  };
  return (
    <div className="contact">
      <div className="container">
        <div className="left">
          <div className="cell">
            <img src="/assets/Image/Contact/IG.png"></img>
            <a href="#">童心匯 Instagram</a>
          </div>

          <div className="cell">
            <img src="/assets/Image/Contact/FB.png"></img>
            <a href="#">童心匯 臉書粉絲團</a>
          </div>

          <div className="cell">
            <img src="/assets/Image/Contact/Mail.png"></img>
            <a href="#">童心匯 信箱</a>
          </div>
          <a href="#">
            <msg>線上專人諮詢</msg>
          </a>
        </div>
        <div className="right">
          <div className="title">給童心匯一點建議或鼓勵</div>
          <form>
            <textarea name="message" />
            <button onClick={SendEmail}>{Send}</button>
          </form>
          <div className="title-2">您的寶貴意見</div>
          <div className="title-2">是我們進步的助力！</div>
        </div>
      </div>
    </div>
  );
}
