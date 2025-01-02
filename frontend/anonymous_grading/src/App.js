import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProfesorPage from './classes/Profesor';
import {Route, Routes, Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ProfesorPage/>
    </div>
  );
}

export default App;
