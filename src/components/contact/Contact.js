import React from "react";
import "./contact.css";
import phone from "../../assets/images/tell.svg";
function Contact() {
  return (
    <div className="container">
      <div className="contact">
        <div className="contact__left">
          <h1 className="contact__title">Contact Us</h1>
          <p className="contact__text">
            In dignissim euismod pretium amet enim a eu nam ut urna accumsan
            pellentesque lacus duis pharetra eutortor.
          </p>
          <div className="icon">
            <img src={phone} width={55} alt="" />
            <p className="tell3">(414) 567 - 2109</p>
          </div>
          <div className="line"></div>
          <h3 className="contact__title2">Not convinced yet?</h3>
          <p className="contact__text2">
            Massa bibendum consectetur maurisid gravida purus, dolor dui amet
            morbi non nunc urna purus diam.
          </p>
          <button className="btn6">Browse our packages</button>
        </div>
        <div className="contact__right">
          <div className="forms">
            <form className="form" action="#">
              <div className="inputs">
                <label htmlFor="">Full name</label>
                <input type="text" />
              </div>
              <div className="inputs">
                <label htmlFor="">Phone number</label>
                <input type="tell" />
              </div>
              <div className="inputs">
                <label htmlFor="">Address</label>
                <input type="text" />
              </div>
              <div className="inputs">
                <label htmlFor="">Email</label>
                <input type="email" />
              </div>
              <div className="inputs">
                <label htmlFor="">Requested service</label>
                <input type="text" />
              </div>
              <div className="inputs">
                <label htmlFor="">Day of service</label>
                <input type="text" />
              </div>
            </form>
            <div className="inputs">
              <label className="label2" htmlFor="">
                Add a note
              </label>
              <textarea></textarea>
              <button className="btn5">Submit message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
