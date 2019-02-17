import React from 'react';

const PortfolioCard = ({
  source, link, title, desc
}) => (
  <section className="portfolio-card">
    <div className="image-portfolio">
      <a href={link} target="_blank" rel="noopener noreferrer" aria-label="website screenshot">
        <img className="img-fluid" src={source} alt="" />
        <div className="overlay">
          <div className="text-image-portfolio">Visit →</div>
        </div>
      </a>
    </div>
    <h3 className="name">{title}</h3>
    <p className="description">{desc}</p>
  </section>
);

export default PortfolioCard;
