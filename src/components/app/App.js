import React from 'react';
import Sidebar from '../sidebar/Sidebar'
import Content from '../contentAndPost/Content'

//import logo from './src/logo.svg';
import './App.css';  
import { BrowserRouter } from 'react-router-dom'
import HeaderContainer from '../header/HeaderContainer';
import Component from '../contentAndPost/myPosts/Component';


function App() {
  //console.log(props.state.profileReducer);
  
  return (
    
      <div className="App">
        <BrowserRouter basename = {process.env.PUBLIC_URL}>
          <HeaderContainer />
          <Sidebar />
          <Content />
          <Component />
        </BrowserRouter>
      </div>
    
  );
}

export default App;
