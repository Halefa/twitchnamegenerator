import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  const adjectives = ['Blue','Small','Soft','Expensive','Glittering'];
  const name = adjectives[Math.floor(Math.random() * adjectives.length)];

  const app = <Welcome name={name} />;

// ======================

  ReactDOM.render(
    app,
    document.getElementById('root')
  );


