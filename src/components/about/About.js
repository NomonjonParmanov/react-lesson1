import React from "react";
import "./about.css";
import cardOne from "../../assets/images/card1.png";
import cardThree from "../../assets/images/card2.png";
import cardTwo from "../../assets/images/card3.png";
function About() {
  return (
    <div className="container">
      <h2 className="about">About Us</h2>
      <p className="content">
        Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque
        nisi felis non ultrices massa id egestas quam velit pretium nu.
      </p>
      <div className="cards">
        <div className="card">
          <img src={cardOne} alt="" />
          <p className="title">1. Schedule online</p>
          <p className="texts">
            Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
            sed n.
          </p>
        </div>
        <div className="card">
          <img src={cardThree} alt="" />
          <p className="title">2. Pay online easily</p>
          <p className="texts">
            Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
            sed n.
          </p>
        </div>
        <div className="card">
          <img src={cardTwo} alt="" />
          <p className="title">3. Get your house cleaned</p>
          <p className="texts">
            Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
            sed n.
          </p>
        </div>
      </div>
      <div className="cent">
        <form action="#">
          <button className="btn">Get a free quote</button>
          <button className="btn1">Explore services</button>
        </form>
      </div>
    </div>
  );
}

export default About;
