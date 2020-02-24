import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const adjectives = ['Blue','Small','Soft','Expensive','Glittering'];
const randAdjective = adjectives[Math.floor(Math.random() * adjectives.length)] + adjectives[Math.floor(Math.random() * adjectives.length)] + adjectives[Math.floor(Math.random() * adjectives.length)];

class Toggle extends React.Component {  
    render() {
      return (
        <button onClick={this.handleClick}>
          Generate!
        </button>
      );
    }
  }

class UserName extends React.Component {
    render () {
        return (
            <h1>Your name is {this.state.adjective}</h1>
        );
    }
}
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
              <UserName value={this.state.adjective} />
              <Toggle />
            </div>
          );
      }
  }
  

// ======================

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );


