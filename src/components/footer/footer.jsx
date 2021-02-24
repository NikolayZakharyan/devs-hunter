import React from 'react';
import './footer.css';

export default function Footer() {
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
        <p><i>Copyright © 2021 DEVsHUNTER Team</i></p>
      </div>
      <div className="footer-text-middle">
        <a href="#">DEVsHUNTER</a>
      </div>

      <div className="footer-text-right">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <a  href="https://www.facebook.com/">
          <i className="fa fa-facebook"></i>
        </a>
        <a  href="https://www.instagram.com/">
          <i className="fa fa-instagram"></i>
        </a>
        <a  href="https://www.twitter.com/">
          <i className="fa fa-twitter"></i>
        </a>
        <a  href="https://www.github.com/">
          <i className="fa fa-github"></i>
        </a>
      </div>
    </div>
  );
}

