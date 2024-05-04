import React from 'react';
import './App.css';
import { Header } from './layout/Header';
import { Navigation } from './layout/Navigation';
import { Profile } from './layout/Profile/Profile';
import { GlobalStyles } from './styles/GlobalStyles';
import { Dialogs } from './layout/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App-wrapper">
      <BrowserRouter>      
      <Header/>
    <Navigation/>
    <Route path="/profile" component={Profile}/>
    <Route path="/dialogs" component={Dialogs}/>

    <GlobalStyles /></BrowserRouter>

    </div>
  );
}





export default App;
