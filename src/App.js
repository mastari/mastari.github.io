import React, { Component } from 'react';
import logo from './logo.svg';
import './main.css';
import { Button, Card, Row, Col, Icon, Modal, Carousel, Navbar, NavItem } from 'react-materialize';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-log" alt="logo" />
          <h2>Mastari</h2>
        </div>
        <p className="App-intro">
          Website in progress. Thanks for waiting!
        </p>
      </div>
    );
  }
}

export default App;
