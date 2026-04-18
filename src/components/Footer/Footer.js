import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrap">
        <div className="social-media">
          <div className="social-media-wrap">
            <div className="social-logo" style={{ fontSize: "35px", color: "red" }}>
              Petflix &nbsp;
              <a href="https://localhost:9292/pets" target="_blank" rel="noreferrer" className="a-link">
                Your new best friend 🐶
              </a>
            </div>
            <div className="social-icons">
              <div className="social-icons-link">
                <a href="https://www.instagram.com/pets/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div className="social-icons-link">
                <a href="https://www.facebook.com/pets.officially/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div>
              <div className="social-icons-link">
                <a href="https://twitter.com/pets" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
              <div className="social-icons-link">
                <a href="https://github.com/kenneymoh" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;