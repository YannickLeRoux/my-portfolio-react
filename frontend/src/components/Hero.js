import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../assets/css/Paralax-Hero-Banner.css';

import { heroBackground } from '../assets/img/hero-background-technology.jpg';

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
            imageSrc='https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-0.3.5&s=413bf668e2139f6aae03f6355bcd59a7&auto=format&fit=crop&w=1051&q=80'
            color='rgb(0,0,0)'
            opacity={0.2}
            minHeight='75vh'
            parallaxOffset={100}
            style={{padding: '-15px' }}
            >
                <div className="container home-title-container">
                    <h1 className="homepage-title"><i className="fa fa-quote-left"></i> Any fool can write code that a computer can understand.
Good programmers write code that humans can understand.<i className="fa fa-quote-right"></i></h1>
                    <p style={{ color: 'white' }}> - Martin Fowler</p>
                    </div>
                    <Link to="/about">
                    <Button className="btn btn-primary btn-lg hero-button anim-button" color="primary">Learn About Me
                    </Button>
                    </Link>
              </LazyHero>

          </section>
        );

    }
}

const styles = {
    jumboStyle: {
        backgroundColor: 'rgba(0,0,0,0.2)',

    }
};

export default Hero;