import React from "react";
import "./Designers.css";
import team1 from "../../assets/Images/team-1.png";
import team4 from "../../assets/Images/team-4.png";
import { DesignersData } from "./DesignersData";

const Designers = () => {
  return (
    <div className="container designers-wrapper">
      <div className="designers-wrapper-one">
        <h1>
          Professional <br /> designers in <br /> our team
        </h1>
      </div>
      <div className="designers-wrapper-two">
        {/* {DesignersData.map(({ id, image, name }) => ( */}
        <div className="designers-wrapper-two-card">
          <img className="designers-wrapper-two-img" src={team4} />
          <h6 className="designers-wrapper-two-name">Sara Christian</h6>
          <h6 className="designers-wrapper-two-desc">lorem Ipsam</h6>
        </div>

        <div className="designers-wrapper-two-card border">
          <img className="designers-wrapper-two-img" src={team1} />
          <h6 className="designers-wrapper-two-name">Sara Christian</h6>
          <h6 className="designers-wrapper-two-desc">lorem Ipsam</h6>
        </div>
        <div className="designers-wrapper-two-card">
          {/* <div className="designers-wrapper-two-rectangle5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="14"
              viewBox="0 0 32 14"
              fill="none"
            >
              <path d="M32 0H0V14H32V0Z" fill="#FBB32E" />
            </svg>
          </div>
          <div className="designers-wrapper-two-rectangle6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="35"
              viewBox="0 0 14 35"
              fill="none"
            >
              <path d="M14 35L14 0L0 0L0 35H14Z" fill="#FBB32E" />
            </svg>
          </div> */}
          <img className="designers-wrapper-two-img" src={team4} />
          <h6 className="designers-wrapper-two-name">Sara Christian</h6>
          <h6 className="designers-wrapper-two-desc">lorem Ipsam</h6>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default Designers;
