import React from 'react';
import Sidebar from '../sidebar/Sidebar'
import Content from '../contentAndPost/Content'
//import logo from './src/logo.svg';
import './App.css';  
import { BrowserRouter } from 'react-router-dom'
import HeaderContainer from '../header/HeaderContainer';


function App() {
  //console.log(props.state.profileReducer);
  
  return (
    
      <div className="App">
        <BrowserRouter>
          <HeaderContainer />
          <Sidebar />
          <Content />
        </BrowserRouter>
      </div>
    
  );
}

export default App;
