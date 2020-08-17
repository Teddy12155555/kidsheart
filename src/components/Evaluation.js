import React, { useState, Component } from "react";
import "../scss/evaluation.scss";
import { useForm } from "react-hook-form";
import { Slide } from "react-slideshow-image";

import QUESTION_JSON_DATA from "../json/questions";

export default function Evaluation(props) {
  //console.log(Object.keys(QUESTION_JSON_DATA["A"]));
  const [pageIndex, setIndex] = useState(0);

  const [questions, setQuestions] = useState([]);
  const [info, setInfo] = useState([]);
  const [checkMap, setMap] = useState([]);
  var result = [];
  const [TOY, setToy] = useState("");
  const { register, handleSubmit } = useForm();

  // Finish basic and submit
  const onInfoSubmit = (data) => {
    var infoJson = {
      name: data.name,
      phone: data.phone,
      babyAge: data.age,
      mail: data.mail,
      sex: data.sex,
      age: data.age,
    };
    if (data.sex == "XY") infoJson.sex = "男生";
    else infoJson.sex = "女生";
    switch (data.age) {
      case "A":
        infoJson.babyAge = "3-7個月";
        break;
      case "B":
        infoJson.babyAge = "8-12個月";
        break;
      case "C":
        infoJson.babyAge = "13-24個月";
        break;
      case "D":
        infoJson.babyAge = "25-36個月";
        break;
      case "E":
        infoJson.babyAge = "37-48個月";
        break;
      case "F":
        infoJson.babyAge = "49-60個月";
        break;
    }
    //console.log(infoJson);
    setIndex(1);
    setInfo(infoJson);
    var tmp = [];
    var result_ = [];
    for (var i in QUESTION_JSON_DATA[data.age]) {
      if (i % 2 == 0) {
        tmp.push(
          <div className={"question-cell bg-g"} key={i}>
            <div className={"text"}>
              {QUESTION_JSON_DATA[data.age][i].Question}
            </div>
            <div className={"check"}>
              <input
                name={i.toString()}
                type="checkbox"
                key={"check-" + i.toString()}
                ref={register}
                onChange={(e) => {
                  handleCheckbox(e);
                }}
              ></input>
            </div>
          </div>
        );
      } else {
        tmp.push(
          <div className={"question-cell bg-w"} key={i}>
            <div className={"text"}>
              {QUESTION_JSON_DATA[data.age][i].Question}
            </div>
            <div className={"check"}>
              <input
                name={i.toString()}
                type="checkbox"
                key={"check-" + i.toString()}
                ref={register}
                onChange={(e) => {
                  handleCheckbox(e);
                }}
              ></input>
            </div>
          </div>
        );
      }
      result_.push(false);
    }
    setQuestions(tmp);
    result = result_;
    setMap(result_);
    console.log(tmp);
  };
  // Finish questions and submit
  const onQuestionsSubmit = (data) => {};

  const handleCheckbox = (e) => {
    if (result[parseInt(e.target.name) - 1] == true) {
      result[parseInt(e.target.name) - 1] = false;
    } else {
      result[parseInt(e.target.name) - 1] = true;
    }
    setMap(result);
  };

  // Check result button click
  const checkResult = () => {
    setIndex(2);
    console.log(checkMap);
    let pairUnit = new Map();
    let data = QUESTION_JSON_DATA[info.age];
    let tokenArray = new Map();
    console.log(typeof data);
    for (var i in data) {
      tokenArray.set(data[i]["Element"].toString(), data[i]["Token"]);
      if (checkMap[i - 1]) {
        for (var j in data[i]["Element"]) {
          let insert = data[i]["Element"][j];
          if (pairUnit.has(insert)) {
            pairUnit.set(
              insert.toString(),
              pairUnit.get(insert.toString()) + 1
            );
          } else {
            pairUnit.set(insert.toString(), 1);
          }
        }
      }
    }
    pairUnit[Symbol.iterator] = function* () {
      yield* [...this.entries()].sort((a, b) => b[1] - a[1]);
    };
    pairUnit = [...pairUnit];

    let temp = 0;
    let tempMap = new Map();
    for (var sort in pairUnit) {
      if (pairUnit[sort][1] >= temp) {
        temp = pairUnit[sort][1];
        tempMap.set(pairUnit[sort][0], pairUnit[sort][1]);
      } else if (pairUnit[sort][1] < temp) {
        break;
      }
    }
    console.log(pairUnit);
    function loopMapElements(value, key, map) {
      if (tokenArray.has(key)) {
        let fix = tokenArray.get(key);
        map.set(key, value * (100 - 5 * fix));
      }
      //console.log(`m[${key}] = ${value}`);
    }
    tempMap.forEach(loopMapElements);
    tempMap = [...tempMap];
    //console.log(tempMap);
    if (tempMap != undefined) {
      console.log(tempMap[0]);
      if (tempMap[0] != undefined) {
        setToy(info.age + tempMap[0][0]);
        console.log(TOY);
      }
    }
  };

  // Pages with diff index
  const FormPage = (
    <form className="form-info" onSubmit={handleSubmit(onInfoSubmit)}>
      <div className="flex-left">
        <div className="info-cell parent-name">
          <msg>家長姓名</msg>
          <br />
          <input name="name" ref={register} required />
        </div>
        <div className="info-cell baby-age">
          <msg>寶貝年齡</msg>
          <br />
          <select name="age" ref={register} required>
            <option value="A">3-7個月</option>
            <option value="B">8-12個月</option>
            <option value="C">13-24個月</option>
            <option value="D">25-36個月</option>
            <option value="E">37-48個月</option>
            <option value="F">49-60個月</option>
          </select>
        </div>
        <div className="info-cell sex">
          <select name="sex" ref={register} required>
            <br />
            <option value="XY">男生</option>
            <option value="XX">女生</option>
          </select>
        </div>
      </div>
      <div className="flex-right">
        <div className="info-cell phone">
          <div className="block">
            <msg>聯絡電話</msg>
            <br />
            <input
              name="phone"
              ref={register}
              type="text"
              pattern="09\d{2}\-?\d{3}\-?\d{3}"
              required
            />
          </div>
        </div>
        <div className="info-cell mail">
          <msg>電子信箱</msg>
          <br />
          <input name="mail" ref={register} required />
        </div>
        <div className="info-cell submit ">
          <button type="submit">開使檢測</button>
        </div>
      </div>
    </form>
  );

  const QuestionsPage = (
    <div className="question-container">
      <form
        className="question-field"
        onSubmit={handleSubmit(onQuestionsSubmit)}
      >
        <div className="question-title">請選擇以下孩子符合之選項</div>
        <div className="questions">{questions}</div>
        <button type="submit" className="send-none" id="send-btn"></button>
      </form>
      <button
        id="send-btn-real"
        type="submit"
        className="send-btn"
        onClick={checkResult}
      >
        確認送出
      </button>
    </div>
  );

  const ResultPage = (
    <div className="result-container">
      <div className="toy-container">
        <img
          src={"/assets/Image/Evaluation/Toy/" + TOY + ".png"}
          className="toy-image"
        ></img>
        <div className="toy-info">
          <div className="title">
            <a>孩子檢測結果</a>
          </div>
          <div className="info">
            <a>
              寶寶年齡：{info.babyAge}
              {"\n"}
            </a>
            <a>
              性別：{info.sex}
              {"\n"}
            </a>
            <a>
              適合玩具：{TOY}
              {"\n"}
            </a>
            <div className="info-btn">
              <a href="working">與專人諮詢</a>
              <a href="evaluation">再試一次</a>
            </div>
          </div>
        </div>
      </div>
      <div className="recommand">
        <div className="title">
          <a>其他推薦玩具</a>
        </div>
        <div className="recommand-container"></div>
      </div>
      <div className="toy-slogan">
        <img
          src={"/assets/Image/Evaluation/slogan.png"}
          className="slogan-image"
        ></img>
        <div className="slogan-btn">
          <a href="teachers">優師培訓</a>
          <a href="working">相關課程</a>
        </div>
      </div>
    </div>
  );

  // Slider field
  const slideImages = [
    "/assets/Image/Evaluation/Slider/1.png",
    "/assets/Image/Evaluation/Slider/1.png",
    "/assets/Image/Evaluation/Slider/1.png",
    "/assets/Image/Evaluation/Slider/1.png",
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

  return (
    <div className="evaluation">
      {pageIndex == 0 && (
        <div className="index-0">
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
          <div className="text-img">
            <img src={"/assets/Image/Evaluation/text.png"} className=""></img>
          </div>
          <div className="middle-img">
            <img
              src={"/assets/Image/Evaluation/img1.png"}
              className="image1"
            ></img>
          </div>
          <div className="bg-field">
            <div className="squre-img">
              <img
                src={"/assets/Image/Evaluation/img2.png"}
                className="image2"
              ></img>
            </div>
            <div className="info-container">{FormPage}</div>
          </div>
        </div>
      )}
      {pageIndex == 1 && QuestionsPage}
      {pageIndex == 2 && ResultPage}
    </div>
  );
}
