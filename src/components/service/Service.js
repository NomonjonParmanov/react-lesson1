import React from "react";
import "./sevices.css";
import serviceOne from "../../assets/images/service1.png";
import serviceTwo from "../../assets/images/service2.png";
import serviceThree from "../../assets/images/service3.png";
function Service() {
  return (
    <div className="container">
      <div className="service">
        <div className="cards">
          <div className="card">
            <img src={serviceOne} alt="" />
            <h2 className="title2">House cleaning</h2>
            <p className="text2">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className="card">
            <img src={serviceTwo} alt="" />
            <h2 className="title2">Office cleaning</h2>
            <p className="text2">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className="card">
            <img src={serviceThree} alt="" />
            <h2 className="title2">Industrial cleaning</h2>
            <p className="text2">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
