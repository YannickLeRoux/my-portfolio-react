import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import Button from './Button';
import { Link } from 'react-router-dom';
import '../assets/css/Paralax-Hero-Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

class Hero extends Component {
    state = {
        offsetHeight: '56px'
    }

    componentDidMount() {
        setTimeout(() => {
            const navbar = document.querySelector('nav');
            this.setState({offsetHeight: navbar.offsetHeight + 'px'})
        }, 1000);
    }

    render() {

        return (
          <section>
            <LazyHero
            // className="hero"
            imageSrc='https://images.unsplash.com/photo-1530569673472-307dc017a82d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f9eeece2e75190a34dfc04fe751bf4ba&auto=format&fit=crop&w=668&q=80'
            color='rgb(255,42,5)'
            opacity={0.2}
            minHeight='60vh'
            parallaxOffset={100}
            style={{padding: '-15px' }}
            >
                <div className="home-title-container">
                    <h1 className="homepage-title">
                    <FontAwesomeIcon icon={faQuoteLeft} style={{ marginRight: 20}} size='xs'/>
                    Any fool can write code that a computer can understand.
                    Good programmers write code that humans can understand.
                    <FontAwesomeIcon icon={faQuoteRight} style={{ marginLeft: 20}}  size='xs'/>
                    </h1>
                    <p style={{ color: 'white' }}> - Martin Fowler</p>
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