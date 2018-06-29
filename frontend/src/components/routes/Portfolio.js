import React from 'react';
import PortfolioCard from '../PortfolioCard';


const Portfolio = () => {
  return (
    <React.Fragment>
      <div className="portfolio">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Websites</h2>
            <p className="text-center">Before learning to code, I used to create website using Wordpress. See some below.</p>
          </div>
          <div className="row articles">
            <div className="col-sm-6 col-md-4 item">
              <PortfolioCard
              source={require('../../assets/img/djnewyork.jpg')}
              link="https://dj-newyork.com"
              title="DJ-NewYork Agency"
              desc="Made in 2017, this website allows the user to browse the talents of this agency and ask for their availability."
               />
            </div>

            <div className="col-sm-6 col-md-4 item">
                <PortfolioCard
              source={require('../../assets/img/raquelleroux.jpg')}
              link="https://raquelleroux.com"
              title="Raquel Le Roux Yoga"
              desc="I made this website in 2015. It includes some e-commerce solutions."
               />
              </div>


            <div className="col-sm-6 col-md-4 item">
              <PortfolioCard
              source={require('../../assets/img/djyanic.jpg')}
              link="https://dj-yanic.com"
              title="DJ Yanic"
              desc="I created this website in 2014 to promote my DJ activity. Wordpress."
               />
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Web Apps</h2>
            <p className="text-center">Developed with Python and Bootstrap.</p>
          </div>
          <div className="row articles">
            <div className="col-sm-6 col-md-6 item"><div className="image-portfolio">

              <a href="https://twitterpie.herokuapp.com/" target="_blank"><img
                className="img-fluid" src="" />
                <div className="overlay">
                  <div className="text-image-portfolio">Visit →</div>
                </div>
              </a>
            </div>
              <h3 className="name">Twitter Pie</h3>
              <p className="description">Flask app that takes a Twitter handle and returns a charts for the 10 most used words in the user feed.</p>
            </div>
            <div
              className="col-sm-6 col-md-6 item">
              <div className="image-portfolio">
                <a href="http://receipts-organizer.herokuapp.com/" target="_blank"><img
                  className="img-fluid" src="" />
                  <div className="overlay">
                    <div className="text-image-portfolio">Visit →</div>
                  </div>
                </a>
              </div>
              <h3 className="name">Receipts Organizer</h3>
              <p className="description">Create a user account and upload your receipts scans to keep them organized by date and category. Work in progress.</p>
            </div>
          </div>
        </div>


        <div className="portfolio">
          <div className="container">
            <div className="intro">

              <h2 className="text-center">Open Source Projects</h2>
              <p>Aller chercher le data sur github</p>

            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );

};



export { Portfolio };