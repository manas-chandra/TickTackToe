import React, { Component } from "react";
import TicTackContaner from './container/tictackContainer';
import {hot} from 'react-hot-loader';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Tic Tack Toe</h1>
        <TicTackContaner />
      </div>
    );
  }
}

export default hot(module)(App);
