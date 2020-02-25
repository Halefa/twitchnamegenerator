import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const adjectives = ['Blue','Small','Soft','Expensive','Glittering'];
let randAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];

  class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= {adjective: null};
  
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        
        this.setState(state => ({          
          adjective: state.randAdjective
        }));
      }
      
      render() {
        return (
            <div>
              <h1>Your name is {this.state.adjective}</h1>
           
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


