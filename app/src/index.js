import React from "react";
import ReactDOM from "react-dom";
import { adjectives1 } from "./adjectives1";
import { adjectives2 } from "./adjectives2";
import { nouns } from "./nouns";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import "./index.css";
import logo from "./logo.png";
import copy from "./content_copy.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: logo,
      adjectives1: adjectives1,
      adjectives2: adjectives2,
      nouns: nouns,
      randName: null,
      clicked: false
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //capitalise_Words
    function capitalise(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // let us have a variable
    let randAdj1 = this.state.adjectives1[
      Math.floor(Math.random() * this.state.adjectives1.length)
    ];
    let randAdj2 = this.state.adjectives2[
      Math.floor(Math.random() * this.state.adjectives2.length)
    ];
    let randNoun = this.state.nouns[
      Math.floor(Math.random() * this.state.nouns.length)
    ];

    this.setState({
      randName:
        capitalise(randAdj1) +
        capitalise(randAdj2) +
        capitalise(randNoun),
      clicked: true
    });
  }

  render() {
    if (this.state.clicked) {
      return (
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="headline-name">
            <h1>Your name is </h1>

          <span className="purple name">
           {this.state.randName}  <CopyToClipboard text={this.state.randName}>
           <img src={copy} width="30" />
          </CopyToClipboard>
          </span>
          </div>

          <div className="button">
            <button className="" onClick={this.handleClick}>
              Again!
            </button>
          </div>

        <div className="footer">Made by <a href="https://twitch.tv/halefa">Halefa</a><br />
        No affiliation with Twitch</div>
      </div>
      );
    }
    return (
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="headline-generate">
          <h1>
            Click the<br /> button to generate<br /> your new
            <br />
            <span className="purple"> Twitch name</span>
          </h1>
        </div>

        <div className="button">
          <button className="" onClick={this.handleClick}>
            Generate!
          </button>
        </div>

        <div className="footer">Made by <a href="https://twitch.tv/halefa">Halefa</a><br />
        No affiliation with Twitch</div>
      </div>
    );
  }
}

// ======================

ReactDOM.render(<App />, document.getElementById("root"));
