import React from 'react';
import './App.css';
import { Header } from './layout/Header';
import { Navigation } from './layout/Navigation';
import { Profile } from './layout/Profile/Profile';
import { GlobalStyles } from './styles/GlobalStyles';
import { Dialogs } from './layout/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';


export type PostType= {
  id: number,
  message: string,
  likesCount: number
}

export type dialogsFriendsType = {
  id: number,
  name: string
};

export type messagePropsType = {
  id: number,
  message: string

}

function App() {


  let postsData: Array<PostType> = [
    {
      id: 1,
      message: "Post1",
      likesCount: 2,
    },
    {
      id: 2,
      message: "Post2",
      likesCount: 5,
    },
    {
      id: 3,
      message: "Post3",
      likesCount: 10,
    },
  ];



let dialogsFriendsData: Array<dialogsFriendsType> = [
  {
    id: 1,
    name: "Sasha"
  },
  {
    id: 2,
    name: "Ivan"
  },
  {
    id: 3,
    name: "Sveta"
  }
]

let messageData: Array<messagePropsType> = [
  {
    id: 1,
    message: "Hi"
  },
  {
    id: 2,
    message: "How are you"
  },
  {
    id: 3,
    message: "Bye"
  }
]
  
  return (
    <div className="App-wrapper">
      <BrowserRouter>      
      <Header/>
    <Navigation/>
    <Route path="/profile" render={() => <Profile posts={postsData}/>}/>
    <Route path="/dialogs" render={() => <Dialogs messages={messageData} friendsData={dialogsFriendsData}/>}/>

    <GlobalStyles /></BrowserRouter>

    </div>
  );
}





export default App;
