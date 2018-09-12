import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../assets/css/Footer-Dark.css';

const Footer = () => {
  const year = new Date().getFullYear().toString();
  return (
      <footer className="footer-dark">
        <div className="container">
          <div className="row">
            <div className="col item social">
              <a href="https://stackoverflow.com/users/8045609/yannick?tab=profile" aria-label="Stack Overflow">
              <FontAwesomeIcon icon={faStackOverflow} />
              </a>
              <a href="https://twitter.com/DJ_Yanic/" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://github.com/YannickLeRoux" aria-label="Git Hub">
              <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/yannick-le-roux/" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <p className="copyright">{`Yannick Le Roux © ${year}`}</p>
        </div>
      </footer>
    );
}

export default Footer;