import React, { Component } from 'react';
import { Container } from 'reactstrap';


class HomePageContent extends Component {
    render() {
        return(
            <Container className="container mb-5 text-center" style= {{marginTop: '50px'}}>
              <h1>Hi!</h1>
              <h3>My name is Yannick Le Roux</h3>
                  <h3><strong>Software</strong> and <strong>Web</strong> developper <em>in the making</em>.</h3>
              <p>I used <strong>Python</strong> to build the back-end of this project, <strong>React</strong>, <strong>CSS</strong>, <strong>Javascript</strong> and <strong>Bootstrap</strong> for the Front End. </p>
		      <p>I like to make any kind of applications that could make your life easier or, very humbly, make the world a better place. :)</p>
            </Container>

        );

    }
};

export default HomePageContent;