import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
        this.state={
            selectedLevel: "",
            toShowMenu: false
        };
    }
  render() {
    return (
      <div >
        <div className="App">Welcome to MySongs.com</div>
        <div className="headContainer">
        <input type="text" className="App-Search" placeholder="Search song"/>
        <div className="fa fa-search search-icon"></div>
        </div>
      </div>
    );
  }
}

export default App;
