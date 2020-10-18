import React from 'react';
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Content from '../contentAndPost/Content'
//import logo from './src/logo.svg';
import './App.css';  
import { BrowserRouter } from 'react-router-dom'


function App() {
  //console.log(props.state.profileReducer);
  
  return (
    
      <div className="App">
        <BrowserRouter>
          <Header />
          <Sidebar />
          <Content />
        </BrowserRouter>
      </div>
    
  );
}

export default App;
