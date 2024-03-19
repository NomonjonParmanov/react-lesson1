import React from "react";
import "./footer.css";
import logo from "../../assets/images/logo.png";
function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer__card">
          <h1 className="footer__card1">Quality cleaning for your home</h1>
          <p className="footer__card1__text">
            Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.
          </p>
        </div>
        <div className="footer__card">
          <h1 className="footer__card2">Contact us</h1>
          <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
          <p> (414) 567 - 2109</p>
          <p> contact@cleaning.com</p>
        </div>
        <div className="footer__card">
          <h1 className="footer__card3">Hours</h1>
          <h3 className="footer__card3__title">Monday to Friday</h3>
          <p>6:00 AM - 9:00 PM</p>
          <h3 className="footer__card3__title">Saturday & Sunday</h3>
          <p>8:00 AM - 8:00 PM</p>
        </div>
        <div className="footer__card">
          <h1>Get a free estimate</h1>
          <p className="phone">(414) 567 - 2109</p>
          <p>
            Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.
          </p>
          <button className="btn5">Request a free quote</button>
        </div>
      </div>
      <div className="footer__second">
        <div className="footer__logo">
          <img src={logo} alt="" />
        </div>
        <div className="link">
          <p>Copyright © Cleaning X | Designed by</p>
          <a href="/">BRIX Templates</a>
          <p>- Powered by</p>
          <a className="link2" href="/">
            Webflow
          </a>
          <a className="link2" href="/">
            Licenses
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
