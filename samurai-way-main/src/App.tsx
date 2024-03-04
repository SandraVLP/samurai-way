import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
    <Technologies />
    </div>
  );
}


const Header = () => {
  return (  <header>
    <p>Header </p>  
      </header>)

}


const Technologies = () => {
  return (
    <div>
      <ul>
        <li>js</li>
        <li></li>
        <li>react</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}
export default App;
