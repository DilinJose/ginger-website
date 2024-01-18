import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="container services-wrapper">
      <div className="services-wrapper-one">
        <h1 className="services-wrapper-one-heading1">We are ready to offer</h1>
        <h1 className="services-wrapper-one-heading2">
          you the following services
        </h1>
      </div>

      <div className="services-wrapper-two">
        <div className="services-wrapper-two-card">
          <h1 className="services-wrapper-two-heading1">01</h1>
          <div>
            <h6 className="services-wrapper-two-heading6">
              Interior design and
            </h6>
            <h6 className="services-wrapper-two-heading6">
              Consultancy Services
            </h6>
          </div>
        </div>
        <div className="services-wrapper-two-card">
          <h1 className="services-wrapper-two-heading1">02</h1>
          <div>
            <h6 className="services-wrapper-two-heading6">
              Architectural Design and
            </h6>
            <h6 className="services-wrapper-two-heading6">
              Consultancy Services
            </h6>
          </div>
        </div>
        <div className="services-wrapper-two-card">
          <h1 className="services-wrapper-two-heading1">03</h1>
          <div>
            <h6 className="services-wrapper-two-heading6">
              Project Management and
            </h6>
            <h6 className="services-wrapper-two-heading6">
              Ccontract Administration
            </h6>
          </div>
        </div>
        <div className="services-wrapper-two-card">
          <h1 className="services-wrapper-two-heading1">04</h1>
          <div>
            <h6 className="services-wrapper-two-heading6">
              Special Painting and
            </h6>
            <h6 className="services-wrapper-two-heading6">Decoration</h6>
          </div>
        </div>
        <div className="services-wrapper-two-card">
          <h1 className="services-wrapper-two-heading1">05</h1>
          <div>
            <h6 className="services-wrapper-two-heading6">
              Hospitality Management and
            </h6>
            <h6 className="services-wrapper-two-heading6">
              CConsultancy ivision
            </h6>
          </div>
          <div className="services-wrapper-two-card-add">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
            >
              <path
                d="M31 15.5C31 6.93959 24.0604 0 15.5 0C6.93959 0 0 6.93959 0 15.5C0 24.0604 6.93959 31 15.5 31C24.0604 31 31 24.0604 31 15.5Z"
                fill="#FBB32E"
              />
              <path
                d="M15.5 10V21"
                stroke="#0D3627"
                stroke-width="1.6"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 15.5H21"
                stroke="#0D3627"
                stroke-width="1.6"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
