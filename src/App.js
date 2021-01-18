import React, { useState, useEffect } from 'react';
import Comics from './components/Comics';

import './App.css';
import SearchPage from './components/SearchPage';

export default class App extends React.Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Hero Tracker</h1>
        </header>
        <div>
          <SearchPage />
        </div>
      </div>
    );
  }
}
