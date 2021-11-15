import React from 'react';
import {Header, Main, NavBar, Footer} from './Components';
import {BrowserRouter as Router} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Main/>
        <NavBar/>
        {/*<Footer/>*/}
      </div>
    </Router>
  );
}

export default App;
