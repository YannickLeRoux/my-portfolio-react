import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class HomePageContent extends Component {
    render() {
        return(
            <Container className="mb-5 text-center" style= {{marginTop: '50px'}}>
                  <h1>Welcome to my portfolio</h1>
              <h2 className="mt-5">My name is Yannick Le Roux, <strong>Software</strong> and <strong>Web</strong> developer <em>in the making</em>.</h2>
              <Row className="tech-stack">
                  <Col md="4">
                    <img className="tech-stack--image" src={require('../assets/img/256px-React-icon.png')} alt="react logo" />
                  </Col>
                  <Col md="4">
                    <img className="tech-stack--image" src={require('../assets/img/python-django-150x150.png')} alt="django logo" />
                  </Col>
                  <Col md="4">
                    <img className="tech-stack--image" src={require('../assets/img/redux-logo.png')} alt="redux logo" />
                  </Col>
              </Row>

                  <p>Self taught, I had fun building this website with: </p>
                  <ul>
                      <li><strong>React JS:</strong> Component Based UI</li>
                      <li><strong>Redux:</strong> Manage The App Global State, Stores The Blog Posts</li>
                      <li><strong>Apollo:</strong> Fetch A List Of Repositories From GitHub GraphQL Api</li>
                      <li><strong>Django:</strong> Create Blog Post Model And A REST Api</li>

                  </ul>
                  <p>Here is the <a target="_blank" rel="noopener noreferrer" href="https://github.com/YannickLeRoux/my-portfolio-react/tree/master/frontend">source code</a>.</p>
                  <p>Please visit the other sections to know more about me and my past works.</p>
		      <p>I like to make any kind of applications that could make your life easier or, very humbly, make the world a better place. :)</p>

            </Container>

        );

    }
};

export default HomePageContent;