import React from "react";
import "./hero.css";
import home from "../../assets/images/home.png";
import phone from "../../assets/images/tell.svg";
function Hero() {
  return (
    <div>
      <div className="home container">
        <div className="left">
          <h1>Quality cleaning for your home</h1>
          <p className="text">
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>
          <div className="icon">
            <button className="btn">Get a free quote</button>
            <div className="icon">
              <img src={phone} width={50} alt="" />
              <p className="tell">(414) 567 - 2109</p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={home} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
