import React from 'react';

const PortfolioCard = ({ source, link, title, desc }) => {
  return (
    <div className="portfolio-card">
      <div className="image-portfolio">
        <a href={ link } target="_blank">
          <img className="img-fluid" src={ source } alt="" />
          <div className="overlay">
              <div className="text-image-portfolio">Visit →</div>
            </div>
        </a>
      </div>
      <h3 className="name">{ title }</h3>
      <p className="description">{ desc }</p>
    </div>
  );
};


export default PortfolioCard;