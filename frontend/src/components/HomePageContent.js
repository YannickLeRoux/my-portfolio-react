import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HomePageContent = () => (
  <Container className="mb-5 text-center text-container" style={{ marginTop: '50px' }}>
    <h1>Yannick Le Roux</h1>
    <h2 className="mt-5">
      <strong>Web</strong> and <strong>Mobile App</strong> developer.
    </h2>
    <hr />
    <Row className="tech-stack">
      <Col md="3">
        <img
          className="tech-stack--image"
          src={require('../assets/img/256px-React-icon.png')}
          alt="react logo"
        />
      </Col>
      <Col md="3">
        <img
          className="tech-stack--image"
          src={require('../assets/img/redux-logo.png')}
          alt="redux logo"
        />
      </Col>
      <Col md="3">
        <img
          className="tech-stack--image"
          src={require('../assets/img/graphql.png')}
          alt="graphql logo"
        />
      </Col>
      <Col md="3">
        <img
          className="tech-stack--image"
          src={require('../assets/img/python-django-150x150.png')}
          alt="django logo"
        />
      </Col>
    </Row>

    <h2>Self taught, I had fun building this website with: </h2>
    <div className="center-list">
      <ul className="list-group tech-stack--list">
        <li className="list-group-item">
          <strong>React JS </strong>
          <FontAwesomeIcon icon={faArrowRight} /> Components Based UI
        </li>
        <li className="list-group-item">
          <strong>Redux </strong>
          <FontAwesomeIcon icon={faArrowRight} /> Manage The App Global State, Store The Blog Posts
        </li>
        <li className="list-group-item">
          <strong>Apollo/GraphQL </strong>
          <FontAwesomeIcon icon={faArrowRight} /> Fetch A List Of Repositories From GitHub GraphQL
          Api
        </li>
        <li className="list-group-item">
          <strong>Django </strong>
          <FontAwesomeIcon icon={faArrowRight} /> Create Blog Post Model And RESTful Api
        </li>
      </ul>
    </div>
    <p>
      Here is the{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/YannickLeRoux/my-portfolio-react/tree/master/frontend"
      >
        source code
      </a>
      .
    </p>
    <p>Please visit the other sections to know more about me and my past works.</p>
    <p>
      I like to make any kind of applications that could make your life easier or, very humbly, make
      the world a better place. :)
    </p>
  </Container>
);

export default HomePageContent;
