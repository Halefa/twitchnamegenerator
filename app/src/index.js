import React from 'react';
import ReactDOM from 'react-dom';
import {adjectives1} from './adjectives1';
import {adjectives2} from './adjectives2';
import {nouns} from './nouns';
import './index.css';

  class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {    
          adjectives1: adjectives1,
          adjectives2: adjectives2,
          nouns: nouns,
          randAdjective1: null,
          randName: null,
          clicked: false,
        };
  
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {       
        // below will not work, because you set `randAdjective` "first", but it will actually NOT be set when you set randName
        // Makes sense

        // motherfuck. Now onwards to the solution

        // let us have a variable
        let randAdj = this.state.adjectives1[Math.floor(Math.random() * this.state.adjectives1.length)];

        this.setState({
          // that function isn't here yet, so, no capitalisation for you yet (just kidding, it does work with the code above) :(
          // randAdjective1: randAdj.capitalise()
          randAdjective1: randAdj,
          randName: randAdj // this works because the variable is in the scope, you can also use other this.state.variables, but they need to be set BEFORE, not in the same setState call - J: Mmmh, I thiiiink I can follow.
          // excellent
          // does it work as you expect?
          // PS: bonus orgasms: build a pure function that gets a string as an argument and returns the same string with an uppecased first letter (much easier than thinking about the .prototype thing and *this*)
          // Yes, I can see that randAdjectie1 changes and randName changes accordingly
          // I thought this was my project and not a task I get points for :P :D Hihihi
          //  :) *flies away
        f/l/ag
         flap
         flap

        })
        
        /*
        this.setState({
          randAdjective1: this.state.adjectives1[Math.floor(Math.random() * this.state.adjectives1.length)],
          randName: this.state.randAdjective1.charAt(0).toUpperCase() + this.state.randAdjective1.slice(1),
        });
 */
      }
      
      render() {
        if (this.state.clicked) {
          return (
            <div>
              <h1>Your name is {this.state.randName}</h1>             
           
              <button onClick={this.handleClick}>
          Again!
        </button>
            </div>
          );
        }
        return (
          <div>
            <h1>Click the button to generate your new Twitch name!</h1>             
         
            <button onClick={this.handleClick}>
        Generate!
      </button>
          </div>
        );
      }
  }
  

// ======================

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );


