import React, { Component } from 'react';
import './App.css';
import Popup from "reactjs-popup";

class App extends Component {
  constructor(props){
    super(props);
        this.state={
            selectedLevel: "Level first",
            toShowMenu: false,
            songsDetails:[]
        };
        this.fetchSongs = this.fetchSongs.bind(this);
        this.searchSongs = this.searchSongs.bind(this);
        this.fetchSongs();
    }

    _handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        this.searchSongs(e.target.value);
        console.log(this.state.songsDetails);
      }
      else if(e.key === 8){
        this.fetchSongs();
      }
    }

    fetchSongs(){
      fetch("http://127.0.0.1:5000/")
      .then(res => res.json())
      .then(
        (result) => {
         this.setState({songsDetails:JSON.parse(result).status});
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

    searchSongs(searchKeyword){
      fetch("http://127.0.0.1:5000/"+searchKeyword)
      .then(res => res.json())
      .then(
        (result) => {
         this.setState({songsDetails:JSON.parse(result).status});
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

  render() {
    return (
      <div >
        <div className="App">Welcome to Songs Collection</div>
        <div className="headContainer">
        <input type="text" className="App-Search" placeholder="Search song" onKeyDown={this._handleKeyPress}/>
        <div className="fa fa-search search-icon"></div>
        </div>
        <div className="songContainer">{Object.keys(this.state.songsDetails).map(key => (
          <Popup trigger={
            <div className="songs">
            <div>Song Name:- {this.state.songsDetails[key][0]}</div>
            <div>Artist:- {this.state.songsDetails[key][1]}</div>
            <div>Duration:- {this.state.songsDetails[key][14]}:00</div>
            <div>Song Rank:- {this.state.songsDetails[key][15]}</div>
            </div>
            } position="right center">
            <div><div>Song Name:- {this.state.songsDetails[key][0]}</div>
            <div>Artist:- {this.state.songsDetails[key][1]}</div>
            <div>Danceability:- {this.state.songsDetails[key][2]}</div>
            <div>Energy:- {this.state.songsDetails[key][3]}</div></div>
            <div>Key:- {this.state.songsDetails[key][4]}</div>
            <div>Loudness:- {this.state.songsDetails[key][5]}</div>
            <div>Modes:- {this.state.songsDetails[key][6]}</div>
            <div>Speechiness:- {this.state.songsDetails[key][7]}</div>
            <div>Acousticness:- {this.state.songsDetails[key][8]}</div>
            <div>Instrumental:- {this.state.songsDetails[key][9]}</div>
            <div>Liveness:- {this.state.songsDetails[key][10]}</div>
            <div>Valence:- {this.state.songsDetails[key][11]}</div>
            <div>Tempo:- {this.state.songsDetails[key][12]}</div>
            <div>Time Signature:- {this.state.songsDetails[key][13]}</div>
            <div>Duration:- {this.state.songsDetails[key][14]}</div>
            <div>Song Rank:- {this.state.songsDetails[key][15]}</div>
            </Popup>
          ))}</div>
      </div>
    );
  }
}

export default App;
