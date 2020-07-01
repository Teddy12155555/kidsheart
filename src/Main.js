import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./Main.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import About from "./components/About";
import Teachers from "./components/Teachers";
import Evaluation from "./components/Evaluation";
import Courses from "./components/Courses";
import StillWorking from "./components/StillWorking";
import Brand from "./components/Brand";
import Record from "./components/Record";
import "./main.scss";

function Main() {
  return (
    <div className="">
      <Navbar />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/evaluation" component={Evaluation} />
        <Route path="/courses" component={Courses} />
        <Route path="/brand" component={Brand} />
        <Route path="/record" component={Record} />
        <Route path="/working" component={StillWorking} />

        <Redirect exact from="/" to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
