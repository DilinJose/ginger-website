import React from "react";
import bathroom from "../../assets/Images/bathroom.png";
import "./Consultations.css";

const Consultations = () => {
  return (
    <div className="container consultations-wrapper">
      <div className="consultations-wrapper-one">
        <div className="consultations-wrapper-one-connect">
          <h1 className="consultations-wrapper-one-connect-headings">
            Get a free consultation.
            <br /> Just leave a request below
          </h1>
        </div>
        <div className="consultations-wrapper-one-input-card">
          <input
            type="text"
            placeholder="Your Mobile Number"
            className="consultations-wrapper-one-input"
          />
          <div className="consultations-wrapper-one-connect-buttons">
            <button className="btn-callback">CALLBACK</button>
            <button className="btn-refer">REFER A FRIEND</button>
          </div>
        </div>
      </div>
      <div className="consultations-wrapper-two">
        <img src={bathroom} alt="Bathroom Image" />
      </div>
    </div>
  );
};

export default Consultations;
