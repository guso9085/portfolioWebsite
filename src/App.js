import React, { Component } from 'react';
import './App.css';

var {SparkScroll, SparkProxy, sparkScrollFactory} =
  require('../node_modules/react-spark-scroll/lib/spark-scroll-gsap.js')({
    invalidateAutomatically: true
});


class App extends Component {
  render() {
    return (

      <div className="App">
        <div className="App-Background">
          <div className="App-Diamond"></div>
          <div className="App-BigBox"></div>
          <div className="App-Social">
            <ul>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/guso9085">
                  <div className="hvr-bounce-in github"></div>
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/gus-th-bus">
                  <div className="hvr-bounce-in soundcloud"></div>
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="/Resume.pdf">
                  <div className="hvr-bounce-in resume"></div>
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/gustavsolis/">
                  <div className="hvr-bounce-in photos"></div>
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gusoio">
                  <div className="hvr-bounce-in linkedin"></div>
                </a>
              </li>
            </ul>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="http://guso.io/v1/">
            <div className="App-Project-Head">
              <div className="App-Project-Inner-Title">
                Guso.io version 1.0
              </div>
              <div className="App-Project-Inner-Body">
                My first iteration of guso.io! I built this website from scratch using HTML/CSS and a bit of javascript
                during freshman year. The process taught me the basis of what I know now about
                web developement.
              </div>
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://devpost.com/software/sensai">
            <SparkScroll.div
              className="App-Project"
              timeline={{
                topBottom: {transform: 'translate3d(-1000px,0px,0px)'},
                centerCenter: {transform: 'translate3d(0px,0px,0px)'}
              }}>
              <div className="App-Project-Inner-Title">
                Sensai
              </div>
              <div className="App-Project-Inner-Body">
                A project we built at PennApps. Allows users to catalog your own self-teaching journey for various things 
                you'd like to learn, track your own progress through your self-assembled course, 
                and share your resulting course with others.
              </div>
            </SparkScroll.div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://devpost.com/software/seedling-x1pcod">
            <SparkScroll.div
              className="App-Project"
              timeline={{
                topBottom: {transform: 'translate3d(1000px,0px,0px)'},
                centerCenter: {transform: 'translate3d(0px,0px,0px)'}
              }}>
              <div className="App-Project-Inner-Title">
                Seedling
              </div>
              <div className="App-Project-Inner-Body">
                A project we built during HackTech. We built a web application that aims to use 
                startup data from places such as Slack, meeting transcripts, and emails in order to derive 
                cultural insight and recommend shifts in communication within a company.
              </div>
            </SparkScroll.div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://devpost.com/software/pencil-pushers">
            <SparkScroll.div
              className="App-Project"
              timeline={{
                topBottom: {transform: 'translate3d(-1000px,0px,0px)'},
                centerCenter: {transform: 'translate3d(0px,0px,0px)'}
              }}>
              <div className="App-Project-Inner-Title">
                Pencil Pushers
              </div>
              <div className="App-Project-Inner-Body">
                A project we built during Hack @ Brown 2017. It's a local co-op fast-paced competitive brawler
                where you have a javelin like pencil you must throw to eliminate the opponent and you each have 5 lives.
              </div>
            </SparkScroll.div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="http://guso.io/obama/">
            <SparkScroll.div
              className="App-Project"
              timeline={{
                topBottom: {transform: 'translate3d(1000px,0px,0px)'},
                centerCenter: {transform: 'translate3d(0px,0px,0px)'}
              }}>
              <div className="App-Project-Inner-Title">
                Obama-Markov
              </div>
              <div className="App-Project-Inner-Body">
                A web interface for a Markov chain that utilizes Obama's past speeches. 
                We built the Obama chain as a side project during Bronco's tackleSTEM.
              </div>
            </SparkScroll.div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://devpost.com/software/cube-runner-24o38g">
            <SparkScroll.div
              className="App-Project"
              timeline={{
                topBottom: {transform: 'translate3d(-1000px,0px,0px)'},
                centerCenter: {transform: 'translate3d(0px,0px,0px)'}
              }}>
              <div className="App-Project-Inner-Title">
                Cube Runner
              </div>
              <div className="App-Project-Inner-Body">
                A project I built during Local Hack Day. It's a side-scrolling endless 
                platformer that gradually gets faster the longer the game goes on. At the end, the top 5 
                leaderboards are displayed. This project was chosen as a Devpost staff pick, and featured on their newsletter.
              </div>
            </SparkScroll.div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://devpost.com/software/oodler">
            <SparkScroll.div
              className="App-Project"
              timeline={{
                topBottom: {transform: 'translate3d(1000px,0px,0px)'},
                centerCenter: {transform: 'translate3d(0px,0px,0px)'}
              }}>
              <div className="App-Project-Inner-Title">
                Oodler
              </div>
              <div className="App-Project-Inner-Body">
                Built at Hack CU 2017, Oodler is a fun chrome extension which replaces all vowels
                 with the word 'oodle'. Try it for yourself on the Chrome store!
              </div>
            </SparkScroll.div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://devpost.com/software/her-tkds0v">
            <div className="App-Project">
              <div className="App-Project-Inner-Title">
                "Her"
              </div>
              <div className="App-Project-Inner-Body">
                A project we built at Bronco's tackleSTEM. We built an Alexa-skill which integrates with the CleverBot API, 
                so that we could maintain a coherent conversation whenever we prompted "Her". We won Best Demo.
              </div>
            </div>
          </a>
          <div className="App-Skateboard"></div>
          <div className="footer">
            <div className="App-Creature"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
