import React from "react";
import "./article.css";
import articleOne from "../../assets/images/article1.png";
import articleTwo from "../../assets/images/article2.png";
function Article() {
  return (
    <div className="container">
      <div className="article">
        <div className="cards2">
          <div className="card2">
            <h1 className="title6">Articles & resources</h1>
            <img src={articleOne} alt="" />
            <h2 className="title5">
              8 best vacuum cleaners to clean any mess for your home in 2022
            </h2>
            <p className="text5">
              Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
              quis odio sit sit ac port titor sit males.
            </p>
            <div className="icon1">
              <p className="data">Jan 28, 2022</p>
              <div className="box"></div>
            </div>
          </div>
          <div className="card2">
            <button className="btn3">Get a free quote</button>
            <button className="btn2">Browse articles</button>
            <img src={articleTwo} alt="" />
            <h2 className="title5">
              How to properly disinfect your phone and other electronics
            </h2>
            <p className="text5">
              Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
              quis odio sit sit ac port titor sit males.
            </p>
            <div className="icon1">
              <p className="data">Feb 1, 2022</p>
              <div className="box"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
