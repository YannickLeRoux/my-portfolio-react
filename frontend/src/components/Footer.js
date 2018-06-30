import React from 'react';
import '../assets/css/Footer-Dark.css';

const Footer = () => {
  return (
      <footer className="footer-dark">
        <div className="container">
          <div className="row">
            <div className="col item social">
              <a href="https://stackoverflow.com/users/8045609/yannick?tab=profile">
              <i className="fab fa-stack-overflow"></i>
              </a>
              <a href="https://twitter.com/DJ_Yanic/">
              <i className="fab fa-twitter"></i>
              </a>
              <a href="https://github.com/YannickLeRoux">
              <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/yannick-le-roux/">
              <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <p className="copyright">Yannick Le Roux © 2018</p>
        </div>
      </footer>
    );
}

export default Footer;