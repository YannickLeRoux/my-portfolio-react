import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import { Jumbotron, Button } from 'reactstrap';
import '../assets/css/Paralax-Hero-Banner.css';

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
          <div>
            <LazyHero
            className="hero"
            imageSrc="../img/hero-background-technology.jpg"
            color='#F2EFEA'
            minHeight='75vh'
            parallaxOffset='100'
            style={{top: this.state.offsetHeight }}
            >
                <Jumbotron className="jumbotron hero-technology" style={ styles.jumboStyle }>
                <div class="container home-title-container">
                    <h1 className="homepage-title"><i class="fa fa-quote-left"></i> Any fool can write code that a computer can understand.
Good programmers write code that humans can understand.<i class="fa fa-quote-right"></i></h1>
                    <p style={{ color: 'white' }}> - Martin Fowler</p>
                    </div>
                    <Button className="btn btn-primary btn-lg hero-button anim-button" color="primary">Learn About Me</Button>
                </Jumbotron>
              </LazyHero>

          </div>
        );

    }
}

const styles = {
    jumboStyle: {
        backgroundColor: 'rgba(0,0,0,0.2)',

    }
};

export default Hero;