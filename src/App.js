import React, { Component } from 'react';
import logo from './logo.svg';
import './main.css';
import { Button, Card, Row, Col, Icon, Modal, Carousel, Navbar, NavItem } from 'react-materialize';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar brand="mastari.net" right>
          <NavItem href="#">Home</NavItem>
        </Navbar>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>OHMAST</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
