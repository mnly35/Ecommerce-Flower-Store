import React from "react";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Collections</h1>
          <span>Anytime Flower </span>

          <span>Anniversary Flower </span>

          <span>Birthday Flower </span>

          <span>Funeral Flower</span>

          <span>Sympathy Flower</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>123 King St. Toronto, Ontario, Canada</span>
          <br />
          <span>+1 (437) 734 4437</span>
          <br />
          <span>info@magnolia.com</span>
          <br />
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">
            <SpaOutlinedIcon />
            Magnolias Flower
          </span>
          <br />
          <span className="copyright">
            <CopyrightOutlinedIcon />
            2023. All Rights Reserved.
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
