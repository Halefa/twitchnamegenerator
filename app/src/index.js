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
          randName: null,
          clicked: false,
        };
  
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {       
        //capitalise_Words 
        function capitalise(string)
        {          
        return string.charAt(0).toUpperCase() + string.slice(1);
        }

        // let us have a variable
        let randAdj1 = this.state.adjectives1[Math.floor(Math.random() * this.state.adjectives1.length)];
        let randAdj2 = this.state.adjectives2[Math.floor(Math.random() * this.state.adjectives2.length)];
        let randNoun = this.state.nouns[Math.floor(Math.random() * this.state.nouns.length)];

        this.setState({    
          randName: capitalise(randAdj1) + capitalise(randAdj2) + capitalise(randNoun),
          clicked: true,
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


