import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const adjectives = ['Blue','Small','Soft','Expensive','Glittering'];
const randAdjective = adjectives[Math.floor(Math.random() * adjectives.length)] + adjectives[Math.floor(Math.random() * adjectives.length)] + adjectives[Math.floor(Math.random() * adjectives.length)];

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }

class UserName extends React.Component {
constructor(props) {
    super(props);
    this.state= {adjective: randAdjective};
}

    render () {
        return (
            <h1>Your name is {this.state.adjective}</h1>
        );
    }
}

  function App() {
    return (
      <div>
        <UserName />
        <Toggle />
      </div>
    );
  }
  

// ======================

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );


