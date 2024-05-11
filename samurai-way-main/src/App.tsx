import React from 'react';
import './App.css';
import { Header } from './layout/Header';
import { Navigation } from './layout/Navigation';
import { Profile } from './layout/Profile/Profile';
import { GlobalStyles } from './styles/GlobalStyles';
import { Dialogs } from './layout/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import { RootStateType } from './redux/state';



function App(props: {state: RootStateType}) {

  const addPost = (text:string) => {
    const newPost =       {
        id: 4,
        message: text,
        likesCount: 0,
      }
      props.state.profilePage.posts.push(newPost);
      console.log("lalla")
} 
  
  return (
    <div className="App-wrapper">
  
      <Header/>
    <Navigation/>
    <Route path="/profile" render={() => <Profile posts={props.state.profilePage.posts} addPost={addPost}/>}/>
    <Route path="/dialogs" render={() => <Dialogs messages={props.state.dialogsPage.messages} dialogs={props.state.dialogsPage.dialogs}/>}/>

    <GlobalStyles />

    </div>
  );
}





export default App;
