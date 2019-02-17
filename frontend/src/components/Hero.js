import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import Button from './Button';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import '../assets/css/Paralax-Hero-Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offsetHeight: '56px'
    };
  }

  componentDidMount() {
    const navbar = document.querySelector('nav');
    this.setState({ offsetHeight: `${navbar.offsetHeight}px` });
  }

  render() {
    return (
      <section>
        <LazyHero
          imageSrc="https://images.unsplash.com/photo-1541075217473-93119871682d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e2eb08253df1eb24e6527cbc169440d&auto=format&fit=crop&w=2000&q=80"
          opacity={0.2}
          minHeight="60vh"
          parallaxOffset={100}
          style={{ padding: '-15px' }}
        >
          <div className="home-title-container">
            <FontAwesomeIcon icon={faQuoteLeft} style={{ marginRight: 20 }} size="1x" />
            <Typed
              className="homepage-title"
              typeSpeed={50}
              contentType="html"
              strings={[
                'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.<small> - Martin Fowler</small>'
              ]}
            />
            <FontAwesomeIcon icon={faQuoteRight} style={{ marginLeft: 20 }} size="1x" />
          </div>
          <Link to="/about">
            <Button>Learn About Me</Button>
          </Link>
        </LazyHero>
      </section>
    );
  }
}

export default Hero;
