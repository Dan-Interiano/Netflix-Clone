import './App.css';
import React from 'react';
import Row from './Row';
import requests from "./requests.js"

function App() {


  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
    </div>
  );
}

export default App;
