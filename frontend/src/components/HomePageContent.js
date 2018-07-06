import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class HomePageContent extends Component {
    render() {
        return(
            <Container className="mb-5 text-center" style= {{marginTop: '50px'}}>
                  <h2>Welcome to my portfolio website!</h2>
              <p>My name is Yannick Le Roux, <strong>Software</strong> and <strong>Web</strong> developer <em>in the making</em>.</p>
              <Row className="tech-stack">
                  <Col md="4">
                    <img className="tech-stack--image" src={require('../assets/img/256px-React-icon.png')} />
                  </Col>
                  <Col md="4">
                    <img className="tech-stack--image" src={require('../assets/img/python-django-150x150.png')} />
                  </Col>
                  <Col md="4">
                    <img className="tech-stack--image" src={require('../assets/img/bootstrap4.png')} />
                  </Col>
              </Row>

<Container>
                  <p>Self taught, I had fun building this website with <strong>React JS</strong> for the UI and <strong>Django Rest Framework</strong> that takes care of the back-end, basically just serving the blog posts here.</p>
                  <p>Please visit the other sections to know more about me and my past works.</p>
		      <p>I like to make any kind of applications that could make your life easier or, very humbly, make the world a better place. :)</p>
            </Container>
            </Container>

        );

    }
};

export default HomePageContent;