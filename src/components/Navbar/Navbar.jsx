import React from "react";
import whatsapp from "../../assets/Images/whatsapp.svg";
import logo from "../../assets/Images/Group 3.svg";

import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light  p-0">
        {/* <div class="container-fluid "> */}
        <div class="container-fluid">
          
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <a class="navbar-brand" href="#">
           <img src={logo}/>
          </a>
            <ul class="navbar-nav w-50 d-flex justify-content-center align-items-center mx-auto mb-lg-0">
              <li class="nav-item me-3 ms-3 ">
                <a class="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item me-3 ms-3">
                <a class="nav-link" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li class="nav-item me-3 ms-3">
                <a class="nav-link" aria-current="page" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item me-3 ms-3">
                <a class="nav-link " aria-current="page" href="#">
                  Portfolio
                </a>
              </li>
              <li class="nav-item me-3 ms-3">
                <a class="nav-link" aria-current="page" href="#">
                  Connect
                </a>
              </li>
            </ul>
            <form class="d-flex m-0">
            <button class="btn-chat m-0 " type="submit">
              <img className="me-2" width={25}  src={whatsapp} />
              Quick Chat
            </button>
          </form>
          </div>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
