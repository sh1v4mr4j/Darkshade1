import React, { Component } from 'react';
import Header from  './components/common/Header'
import Left from './components/common/Left'
import Right from './components/common/Right'
import './App.css'
import './components/common/Right-Left.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <Header />
        </div>
        <div className="container" >
        <div className="row">
        <div className="col-md-5">
        <Left />
        </div>
        <div className="col-md-1">
        </div>
        <div className="col-md-6">
        <Right />
        </div>
        </div>
        </div>
        {/* <div className="Left">
          <Left />  
        </div>
        <div className="Right">
          <Right /> */}
        
        
      </div>
    );
  }
}

export default App;
