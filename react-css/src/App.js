import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Button = styled.button`
	border-radius: 3px;
	padding: 0.25em 1em;
	margin: 0 1em;
	background: transparent;
	color: palevioletred;
	border: 2px solid palevioletred;
`;

const Input = styled.input`
	padding: 0.5em;
	margin: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <Input
          placeholder="Hover here..."
          innerRef={x => { this.input = x }}
          onMouseEnter={() => this.input.focus()}
      />
      <Button>Normal Button</Button>
      </div>
    );
  }
}

export default App;
