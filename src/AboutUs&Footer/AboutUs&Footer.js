import React from 'react';
import './aboutUsAndFooterStyle.css';

function AboutUsAndFooter() {
  return (
    <div className="aboutus-and-footer">
      <CreateFooter />
    </div>
  );
}

function CreateFooter() {

  return (
    <div className="footer">
      <div className="footer-text-left">
        <span>About Us</span>
        <span>Blog</span>
        <span>FAQs</span>
        <span>Order Tracking</span>
        <span>Contact</span>
        <span>© By NordicMade</span>
      </div>
      <div className="footer-text-right">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <span>
          <i className="fa fa-facebook"></i>
        </span>
        <span>
          <i className="fa fa-instagram"></i>
        </span>
        <span>
          <i className="fa fa-twitter"></i>
        </span>
      </div>
    </div>
  );
}

export default AboutUsAndFooter;
