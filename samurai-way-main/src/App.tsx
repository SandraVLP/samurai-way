import React from 'react';
import './App.css';
import { Header } from './layout/Header';
import { Navigation } from './layout/Navigation';
import { Content } from './layout/Content';

function App() {
  return (
    <div className="App-wrapper">
      <Header/>
    <Navigation/>
    <Content/>
    </div>
  );
}





export default App;
