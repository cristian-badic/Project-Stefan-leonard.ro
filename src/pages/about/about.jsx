import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div class="section">
        <div class="container">
          <div class="content-section">
            <div class="title">
              <h1>About Me</h1>
            </div>
            <div class="content">
              <h3>Ma numesc Stefan Leonard si te astept sa facem o sumedenie de poze</h3>
              <p>
                Sunt creator de continut . Ma poti contacta pe facebook, instagram sau youtube. 
              </p>
            </div>
            <div class="social">
              <a
                target="_blank"
                href="https://www.facebook.com/stefan.istrate.393"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a target="_blank" href="https://www.youtube.com/c/StefanLeonard">
                <i class="fab fa-youtube"></i>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/stefan_leonard97/"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div class="image-section float-end">
            <img src="assets/images/stefan.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
