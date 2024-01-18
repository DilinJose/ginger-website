import React from "react";
import "./Footer.css";
import connect from "../../assets/Images/Group 312.svg";

const Footer = () => {
  return (
    <div className="container footer-wrapper">
      <div className="footer-contact">
        <h6 className="footer-contact-header">
          We are a design provider to create an elegant and
          <br />
          clean design dream house with your partner and
          <br />
          family
        </h6>
        <div>
          <input
            className="footer-contact-input"
            type="text"
            placeholder="Email Id"
          />
          <button className="footer-contact-sent mt-1">Sent</button>
        </div>
        <div className="footer-contact-connect">
          <img src={connect} alt="Connect" />
        </div>
      </div>
      <div className="footer-menus">
        <div>
          <h5 className="footer-menus-heading">About</h5>
          <div>
            <h6 className="footer-menus-links">Interior</h6>
            <h6 className="footer-menus-links">Testimonials</h6>
            <h6 className="footer-menus-links">Our Services</h6>
            <h6 className="footer-menus-links">Portfolio</h6>
          </div>
        </div>
        <div>
          <h5 className="footer-menus-heading">About</h5>
          <div>
            <h6 className="footer-menus-links">Contact</h6>
            <h6 className="footer-menus-links">FAQ</h6>
          </div>
        </div>
        <div>
          <h5 className="footer-menus-heading">Contact</h5>
          <div>
            <h6 className="footer-menus-links">Live@gmail.com</h6>
            <h6 className="footer-menus-links">0487 2255</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
