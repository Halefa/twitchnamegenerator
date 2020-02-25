import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
          adjectives1: ['Loud','Shrill','Unique','Fast','Stupid'],
          adjectives2: ['Blue','Small','Soft','Expensive','Glittering'],
          nouns: ['Dingus','Sheep','Lemur','Alpaca','Emu','Binterong','Cassowary'],
          randName: null,
          clicked: false,
        };
  
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {       
        this.setState({          
          randName: this.state.adjectives1[Math.floor(Math.random() * this.state.adjectives1.length)] + this.state.adjectives2[Math.floor(Math.random() * this.state.adjectives2.length)] + this.state.nouns[Math.floor(Math.random() * this.state.nouns.length)],
          clicked: true,
        });
      }
      
      render() {
        if (this.state.clicked) {
          return (
            <div>
              <h1>Your name is {this.state.randName}</h1>             
           
              <button onClick={this.handleClick}>
          Generate!
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


