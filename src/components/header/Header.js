import React from "react";
import "./header.css";
import logos from "../../assets/images/logo.png";
function Header() {
  return (
    <div>
      <nav className="container">
        <ul className="nav_links">
          <li className="logos">
            <a href="">
              <img src={logos} alt="" />
            </a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Articles</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <ul className="nav_links">
          <li>
            <p className="cart">Cart ( 0 )</p>
          </li>
          <li>
            <button className="btn">Get a free quote</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
