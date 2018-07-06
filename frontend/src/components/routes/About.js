import React, { Component } from 'react';

import clockJS from '../../assets/js/clock';

class About extends Component {

	componentDidMount() {
		clockJS();
	}

	render() {
		return (
  <React.Fragment>
    <div className="container">
      <div className="intro">
        <div className="section-blockquote mt-5 heading-padding">
          <blockquote>
          <p>Teaching myself coding on a daily basis since May 2017, I enjoy solving real-life problems with what I learned.
          <br/> For example, I started automating time consuming tasks at my current job.</p>
        </blockquote>
        </div>
        <h1>My Objective:</h1><h2> Get a first developer job in 2018.</h2>
      </div>
      <hr/>
    </div>
    <div className="container">
      <div className="container my-5">
        <div className="text-center"><a href="http://yannick-dev.com/static/files/Resume-v7.pdf" target="_blank" className="btn btn-primary btn-lg hero-button anim-button mb-4" id="download" >Download my Resume</a></div>

        <br/>
        <p>After working for ten years as a sound engineer and DJ in the music industry, I felt a desire to switch career early 2017.<br/>

			I remembered that as a kid and then a teenager, I loved to create small scripts on my Atari STE, or even hack into some games. I just didn't know at that time if I had what it would take to, one day, become a professional developer.</p>

        <p>Then I discovered the impressive range and quality of online content designed to teach people, like me, how to write code.<br/>
			I decided to asked some informed people for advices and was told to give Python a try.</p>

        <p>I quickly completed a first course created by MIT, <em>Introduction to Computer Science and Python</em>, and
          <a href="https://courses.edx.org/certificates/094c7498fb13491b95ae05ff29ab9117" target="_blank"> achieved a passing grade.</a><br/>

			I enjoyed the course so much I became hooked on learning more about how to code.</p>


        <div className="clock">
          <div className="clock-face">
          <div className="hand hour-hand"></div>
          <div className="hand min-hand"></div>
          <div className="hand second-hand"></div>
        </div>
        </div>
        <h4 className="text-center mb-5"><i className="fa fa-quote-left"></i> Time to get my first developer job :) ! <i className="fa fa-quote-right"></i></h4>


        <p>The first personal projects I undertook were driven by the idea of making my current job (DJ) easier. <a href="https://github.com/YannickLeRoux/mp3_organizer" target="_blank">Organizing the music files</a> in
			my laptop or <a href="https://github.com/YannickLeRoux/DMC_Chart_Parser" target="_blank">reading through tons of blog articles and charts</a> to collect good tracks to play, could be very boring and repetitive. These things, I felt, could definitely be helped by a little bit of code.<br/><br/>

			Prior to this, I had been building websites using WordPress for years. But once I knew how to write my own code, I wanted to know how to build a website from scratch.</p>

        <p>As I was already familiar with HTML and CSS, I got into <a href="https://www.udemy.com/certificate/UC-5PRSEYVI/" target="_blank">Django</a> to learn to design a back-end. <br/>
	My first project was to create a <a href="http://receipts-organizer.herokuapp.com/" target="_blank">receipts organizer</a> app, one that could scan receipts and keep them organized in a database. I still have to make some improvements to it (i.e. the facility to scan with a phone, design, security, etc.,) but anybody can sign up for an account and import documents already scanned.</p>

        <p>I next decided to approve my JavaScript skills and learn React JS, following the <a href="https://courses.edx.org/certificates/ee19337ad1df495cb24f91648532eac3" target="_blank">University of Pennsylvania online course</a>.</p>

        <p>Currently, I continue to dive deeper into programming, improving my knowledge of <strong>React</strong> ecosystem...
        </p>
      </div>
    </div>

  </React.Fragment>
		);

	}

};



export {About};