import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class HomePageContent extends Component {
    render() {
        return(
            <Container className="mb-5 text-center" style= {{marginTop: '50px'}}>
                  <h2>Welcome to my portfolio website!</h2>
              <h4>My name is Yannick Le Roux, <strong>Software</strong> and <strong>Web</strong> developer <em>in the making</em>.</h4>
              <Row className="tech-stack">
                  <Col md="4">
                    <img className="tech-stack--image" src={require('../assets/img/256px-React-icon.png')} />
                  </Col>
                  <Col md="4">
                    <img className="tech-stack--image" src={require('../assets/img/python-django-150x150.png')} />
                  </Col>
                  <Col md="4">
                    <img className="tech-stack--image" src={require('../assets/img/bootstrap-4.jpg')} />
                  </Col>
              </Row>


                  <p>I totally rebuilt it with <strong>React JS</strong>.</p>
                  <p><strong>Django Rest Framework</strong> takes care of the back-end, basically just serving the blog posts.</p>
		      <p>I like to make any kind of applications that could make your life easier or, very humbly, make the world a better place. :)</p>
            </Container>

        );

    }
};

export default HomePageContent;