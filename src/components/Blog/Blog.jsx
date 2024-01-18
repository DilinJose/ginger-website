import React from "react";
import "./Blog.css";
import ourTeam from "../../assets/Images/our-team-1.png";
import { DotsGreySvg, DotsRedSvg } from "./DotsSvg";

const Blog = () => {
  return (
    <div className="container blog-wrapper">
      <div className="blog-wrapper-one">
        <div className="blog-card-one">
          <h1 className="blog-wrapper-one-heading">Thanks for your sweet</h1>
          <h1 className="blog-wrapper-one-heading">words to us</h1>
        </div>
        <div className="blog-card-two">
          <div className="blog-wrapper-one-img-card">
          <div className="blog-wrapper-one-dotsvgblue">
          <DotsGreySvg />
        </div>
            <img
              className="blog-wrapper-one-img"
              src={ourTeam}
              alt="Our Team"
            />
          </div>
          <div>
            <p className="blog-wrapper-one-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos perferendis est officia quas sunt adipisci vitae
              deleniti et facilis pariatur! Porro cupiditate dolore minima
              nesciunt, at laborum laudantium facilis omnis!
            </p>
            <h6 className="blog-wrapper-one-name">Sara Kristian</h6>
          </div>
        </div>
        <div className="blog-wrapper-one-change">
          <svg
            className="blog-wrapper-one-change-prev"
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="23"
            viewBox="0 0 13 23"
            fill="none"
          >
            <path
              d="M12.937 2.255L3.13701 11.955L12.596 21.308L10.885 23L1.14441e-05 12.233L1.08301 11.161L0.869012 10.949L11.298 0.634001L12.937 2.255Z"
              fill="black"
            />
          </svg>
          <svg
            className="blog-wrapper-one-change-next"
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="23"
            viewBox="0 0 13 23"
            fill="none"
          >
            <path
              d="M0.0629883 21.3788L9.86299 11.6788L0.403988 2.32579L2.11499 0.633789L13 11.4008L11.917 12.4728L12.131 12.6848L1.70199 22.9998L0.0629883 21.3788Z"
              fill="black"
            />
          </svg>
        </div>
       
        <div className="blog-wrapper-one-dotsvgred">
          <DotsRedSvg />
        </div>
      </div>
    </div>
  );
};

export default Blog;
