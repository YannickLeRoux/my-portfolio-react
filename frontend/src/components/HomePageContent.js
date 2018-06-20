import React, { Component } from 'react';
import { Container } from 'reactstrap';


class HomePageContent extends Component {
    render() {
        return(
            <Container className="text-center" style= {{marginTop: '85px'}}>
              <p>Hi! I am Yannick Le Roux, <strong>Software</strong> and <strong>Web</strong> developper <em>in the making</em>.</p>
              <p>I used <strong>Python</strong> to build the back-end of this project, <strong>HTML</strong>, <strong>CSS</strong>, <strong>Javascript</strong> and <strong>Bootstrap</strong> for the Front End. </p>
		      <p>I like to make any kind of applications that could make your life easier or, very humbly, make the world a better place. :)</p>
            </Container>

        );

    }
};

export default HomePageContent;