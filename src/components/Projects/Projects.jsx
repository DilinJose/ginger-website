import React from "react";
import "./Projects.css";
import img1 from '../../assets/Images/Path 292.svg'
import img2 from '../../assets/Images/Path 81.svg'
import img3 from '../../assets/Images/Rectangle 52.svg'

const Projects = () => {
  return (
    <div className="container projects-section-wrapper">
      <div className="projects-section-light">
        <img className="projects-section-light1" src={img3}/>
        <img className="projects-section-light2 ms-1" src={img2}/>

        <img className="projects-section-light3" src={img1}/>

      </div>
      <div className="projects-section-one">
        <h1 className="projects-section-one-heading1">
          Our Latest
          <br />
          Projects
        </h1>
        {/* <h1 className="projects-section-one-heading2">Projects</h1> */}
        <p className="projects-section-one-para">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et
          consequatur obcaecati harum deserunt sequi repellendus officiis eos ut
          placeat non asperiores molestiae aperiam, porro amet velit perferendis
          quis ipsam.
        </p>
        <div>
          <button className="projects-section-one-prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="24"
              viewBox="0 0 14 24"
              fill="none"
            >
              <path
                d="M1.612 13.226L1.832 13.006L0.720001 11.894L11.895 0.718994L13.65 2.47399L3.937 12.188L14 22.251L12.32 23.933L1.612 13.226Z"
                fill="#ACACAC"
              />
            </svg>
          </button>
          <button className="projects-section-one-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="25"
              viewBox="0 0 15 25"
              fill="none"
            >
              <path
                d="M0.686005 22.574L11.013 12.359L1.045 2.50099L2.847 0.718994L14.315 12.062L13.174 13.191L13.4 13.414L2.413 24.281L0.686005 22.574Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <p className="projects-section-one-more">View More</p>
      </div>

      <div className="projects-section-two">
        <div className="projects-section-two-cardone m-2">
          <div className="projects-section-two-bgimg1"></div>
          <div className="projects-section-two-img1">
            {" "}
            <h6 className="projects-section-two-heading1">lorem ipsam </h6>
          </div>
          <div className="projects-section-two-img1-gradiant"></div>
        </div>
        <div className="projects-section-two-cardone m-2">
          <div className="projects-section-two-bgimg2"></div>
          <div className="projects-section-two-img2">
            <h6 className="projects-section-two-heading1">lorem ipsam </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
