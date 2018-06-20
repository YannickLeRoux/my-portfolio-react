import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import { Jumbotron, Button } from 'reactstrap';

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
            imageSrc="https://unsplash.it/2000/1000"
            color='#F2EFEA'
            minHeight='75vh'
            parallaxOffset='100'
            style={{top: this.state.offsetHeight }}
            >
                <Jumbotron className="mx-5 my-3" style={ styles.jumboStyle }>
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                    <p className="lead">
                    <Button color="primary">Learn About Me</Button>
                    </p>
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