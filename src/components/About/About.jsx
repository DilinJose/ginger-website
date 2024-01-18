import React from "react";
import "./About.css";
import { DotSvg } from "./svg";

const About = () => {
  return (
    <div className="container">
      <div className="about-card">
        <div className="about-section">
          <div className="about-section-card-one">
            <div className="about-section-svg">{/* <DotSvg /> */}</div>
            <h1 className="about-section-year">25</h1>
          </div>
          <div className="about-section-card-two">
            <h1 className="about-section-heading1">Year experience <br/> in interior designing</h1>
            <p className="about-section-para">
              With an experience of more than 26 years, we pride ourselves in
              ensuring<br/> that we provide our clients with exquisite design and excellent
              quality<br/> service. Responsive to our Clients Vision, we are committed to
              design that<br/> expresses the interrelationships between architecture and space
              and to<br/>create a
            </p>
          </div>
        </div>

        <div className="about-section-card-three">
          <div className="mb-2">
            <h1 className="about-section-numbers">300+</h1>
            <h6 className="about-section-customers">
              Happy
              <br />
              Customers
            </h6>
          </div >
          <div className="about-section-dot mb-2"></div>
          <div className="mb-2">
            <h1 className="about-section-numbers">10+</h1>
            <h6 className="about-section-customers">
              Happy
              <br /> Customers
            </h6>
          </div>
          <div className="about-section-dot mb-2"></div>
          <div className="mb-2">
            <h1 className="about-section-numbers">50+</h1>
            <h6 className="about-section-customers">
              Happy
              <br /> Customers
            </h6>
          </div>
        </div>

        <div className="about-section-card-four">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
          >
            <path
              d="M36 70.5C55.0538 70.5 70.5 55.0538 70.5 36C70.5 16.9462 55.0538 1.5 36 1.5C16.9462 1.5 1.5 16.9462 1.5 36C1.5 55.0538 16.9462 70.5 36 70.5Z"
              stroke="#FFFEFC"
              stroke-width="3"
            />
            <path
              d="M53 35.9999L28.5 50.5469L28.5 21.4529L53 35.9999Z"
              fill="white"
            />
          </svg>
          <div>
            <h6>Lorem Ipsum is simply </h6>
            <h6>dummy text</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
