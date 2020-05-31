import React, { Component } from 'react';
import Overdrive from 'react-overdrive';
import { Container } from 'reactstrap';
import Button from '../Button';
import clockJS from '../../assets/js/clock';

class About extends Component {
  componentDidMount() {
    clockJS();
  }

  render() {
    return (
      <React.Fragment>
        <Container className="text-container">
          <div className="intro">
            <div className="section-blockquote mt-5 heading-padding">
              <blockquote>
                <p>
                  Teaching myself to code daily since May 2017, I enjoy solving real-life problems with what I learned.
                  <br />
                  For example, I started automating time consuming tasks at my current job...
                </p>
              </blockquote>
            </div>
            <Overdrive id="main-focus" duration={500}>
              <h1 style={{ marginTop: '.5em' }}>Currently</h1>
            </Overdrive>
            <h2>Frontend / React Developer @ EDF Renewables, San Diego</h2>
          </div>
          <hr />

          <div className="my-5">
            <div className="text-center">
              <a href="https://drive.google.com/file/d/1SmcuAdLwEfcLiPgvqFg1lbs3VjWy0q2K/view?usp=sharing">
                <Button>Download my Resume</Button>
              </a>
            </div>

            <br />
            <p className="mt-3">
              After working for ten years as a <strong>sound engineer</strong> and <strong>DJ</strong> in the music
              industry, I felt a strong desire to <strong>switch career</strong> in early 2017.
            </p>
            <p>
              I remembered that as a kid and then a teenager, I loved to create small scripts on my Atari STE, or even
              hack into some games. I just didn't know at that time if I had what it would take to, one day, become a{' '}
              <strong>professional developer</strong>.
            </p>

            <p>
              Then I discovered the impressive range and quality of online content designed to teach people like me, how
              to write code.
              <br />I decided to ask some informed people for advice and was told to give <strong>Python</strong> a
              try... I loved it!
            </p>

            <p>
              At first, I used my newly acquired skills to make my current job easier, writing scripts to organize
              automatically my music in my hard drive for example.
            </p>

            <div className="clock">
              <div className="clock-face">
                <div className="hand hour-hand" />
                <div className="hand min-hand" />
                <div className="hand second-hand" />
              </div>
            </div>
            {/* <h2 className="text-center mb-5">
              <FontAwesomeIcon icon={faQuoteLeft} /> Just put in the hours and stay focus!{' '}
              <FontAwesomeIcon icon={faQuoteRight} />
            </h2> */}

            <p>
              I continued teaching myself for months, switching to <strong>Javascript</strong>, then learning{' '}
              <strong>React</strong> as I had a strong desire to publish work on the web.
            </p>
            <p>
              Currently, I keep on setting time aside of work to deepen my programming skills, improving my knowledge of
              the React ecosystem by bringing <strong>TypeScript</strong> to the party, or discover new technologies. I
              discovered I really like strongly typed languages and was happy to be able to migrate the React codebase
              to TS at work.
            </p>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export { About };
