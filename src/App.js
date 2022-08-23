import './App.css';
import Portfolio from './components/index';
import {React, useState} from 'react';
import {Routes,Route} from "react-router-dom"
import Service from './components/Service/service';

function App() {

  return (
    <div className="App">
   
      <Portfolio />
    </div>
  );
}

export default App;
