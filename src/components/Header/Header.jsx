import React from "react";
import { HeaderImgData } from "../HeaderImgData";

import "./Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      {HeaderImgData.map((data) => (
        <>
          <img className="header-wrapper-image" src={data.image} />
          <h1 className="header-wrapper-heading1">WE MAKE <br/>YOUR HOME BETTER</h1>
          {/* <h1 className="header-wrapper-heading2">YOUR HOME BETTER</h1> */}

          <div className="rectangle-5">
            <h1 className="rectangle-5-header">{data.id}</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="23"
              viewBox="0 0 14 23"
              fill="none"
            >
              <path
                d="M13.187 1.755L3.38701 11.455L12.846 20.808L11.135 22.5L0.250011 11.733L1.33301 10.661L1.11901 10.449L11.548 0.134001L13.187 1.755Z"
                fill="black"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="23"
              viewBox="0 0 14 23"
              fill="none"
            >
              <path
                d="M0.25 20.879L10.05 11.179L0.591 1.82597L2.302 0.133972L13.187 10.901L12.104 11.973L12.318 12.185L1.889 22.5L0.25 20.879Z"
                fill="black"
              />
            </svg>
          </div>
        </>
      ))}
    </div>
  );
};

export default Header;
