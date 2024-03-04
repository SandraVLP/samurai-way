import React from 'react';
import './App.css';
import { Header } from './layout/Header';
import { Navigation } from './layout/Navigation';
import { Profile } from './layout/Profile';

function App() {
  return (
    <div className="App-wrapper">
      <Header/>
    <Navigation/>
    <Profile/>
    </div>
  );
}





export default App;
