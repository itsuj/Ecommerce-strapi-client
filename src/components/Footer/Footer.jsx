import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
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
          Welcome to Unis Shopping, where style knows no bounds. Discover a curated collection of timeless elegance and contemporary flair, tailored for the modern individual. From casual chic to sophisticated glam, our unis showcase versatility and inclusivity in every stitch. Elevate your wardrobe with pieces that transcend trends and celebrate individuality. 
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
           For Any Queries or Complaints Contact us on Email @sujitteam@gmail.com and X @realsujit_
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Unis</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;