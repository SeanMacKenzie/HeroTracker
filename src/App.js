import React from 'react';
// import { SearchBar } from ''

import './App.css';
import Comics from "./components/Comics";

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  }

  render() {
    const { search } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Hero Tracker</h1>
        </header>
        {/* <SearchBar placeholder='Type Here...' onChangeText={this.updateSearch} value={search} /> */}
        <Comics />
      </div>
    );
  }
}
