import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
          adjectives: ['Blue','Small','Soft','Expensive','Glittering'],
          randAdjective: null,
        };
  
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {       
        this.setState({          
          randAdjective: this.state.adjectives[Math.floor(Math.random() * this.state.adjectives.length)] + this.state.adjectives[Math.floor(Math.random() * this.state.adjectives.length)] + this.state.adjectives[Math.floor(Math.random() * this.state.adjectives.length)],
        });
      }
      
      render() {
        return (
            <div>
              <h1>Your name is {this.state.randAdjective}</h1>
           
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


