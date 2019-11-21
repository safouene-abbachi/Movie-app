import React, { Component } from "react";
import MovieContainer from "./Components/MovieContainer";
import "./App.css";
import SearchMovie from "./Components/Search";
import Ratings from "./Components/Ratings";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchWords: "",
      star: ""
    };
  }
  searchHandler = event => this.setState({ searchWords: event.target.value });
  handlchange = newStar => this.setState({ star: newStar });

  render() {
    return (
      <>
        <div className="nav-search">
          <SearchMovie look={this.searchHandler} />
          <div className="stars">
            <Ratings rate={this.state.star} onChange={this.handlchange} />
          </div>
        </div>

        <div>
          <MovieContainer
            rate={this.state.star}
            search={this.state.searchWords}
          />
        </div>
      </>
    );
  }
}
export default App;
