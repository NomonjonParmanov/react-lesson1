import React from "react";
import "./covid.css";
import covid from "../../assets/images/covid.png";
import tell from "../../assets/images/tell.svg";
function Covid() {
  return (
    <div className="container">
      <div className="covid ">
        <div className="left2">
          <img src={covid} alt="" />
        </div>
        <div className="right2">
          <h2 className="h2">Covid-19 sanitization</h2>
          <h1 className="title4">
            We follow guidelines to keep you safe from the COVID-19 virus
          </h1>
          <p className="text4">
            Lobortis mattis odio leo eget mauris met aliquet semper molestie
            sollicitudin congue massa mauris lectus.
          </p>
          <div className="icon">
            <button className="btn">Get a free quote</button>
            <img src={tell} width={55} alt="" />
            <p className="tell2">(414) 567 - 2109</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Covid;
