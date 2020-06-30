import React, { useState, Component } from "react";

import "../scss/evaluation.scss";
import { useForm } from "react-hook-form";

import QUESTION_JSON_DATA from "../json/questions";

export default function Evaluation(props) {
  //console.log(Object.keys(QUESTION_JSON_DATA["A"]));
  const [pageIndex, setIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [info, setInfo] = useState([]);
  const [checkMap, setMap] = useState([]);
  var result = [];
  const { register, handleSubmit } = useForm();

  // Finish basic and submit
  const onInfoSubmit = (data) => {
    var infoJson = {
      name: data.name,
      phone: data.phone,
      babyAge: data.age,
      mail: data.mail,
      sex: data.sex,
    };
    console.log(infoJson);
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
  };

  // Pages with diff index
  const FormPage = (
    <form className="form-info" onSubmit={handleSubmit(onInfoSubmit)}>
      家長姓名
      <input name="name" ref={register} required />
      聯絡電話
      <input
        name="phone"
        ref={register}
        type="text"
        pattern="09\d{2}\-?\d{3}\-?\d{3}"
        required
      />
      寶貝年齡
      <select name="age" ref={register} required>
        <option value="A">3-7個月</option>
        <option value="B">8-12個月</option>
        <option value="C">13-24個月</option>
        <option value="D">25-36個月</option>
        <option value="E">37-48個月</option>
        <option value="F">49-60個月</option>
      </select>
      電子信箱
      <input name="mail" ref={register} required />
      第23對染色體
      <select name="sex" ref={register} required>
        <option value="XY">XY</option>
        <option value="XX">XX</option>
      </select>
      <button type="submit">開使檢測</button>
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

  const ResultPage = <div className="result-container">{}</div>;

  return (
    <div className="evaluation">
      {pageIndex == 0 && FormPage}
      {pageIndex == 1 && QuestionsPage}
      {pageIndex == 2 && ResultPage}
    </div>
  );
}
