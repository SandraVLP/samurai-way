import React from 'react';
import './App.css';
import { Header } from './layout/Header';
import { Navigation } from './layout/Navigation';
import { Profile } from './layout/Profile/Profile';
import { GlobalStyles } from './styles/GlobalStyles';
import { Dialogs } from './layout/Dialogs/Dialogs';

function App() {
  return (
    <div className="App-wrapper">
      <Header/>
    <Navigation/>
    <Profile/>
    <Dialogs />
    <GlobalStyles />
    </div>
  );
}





export default App;
