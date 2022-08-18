import { useState } from 'react'
import './App.css'
import React from "react";

function App() {
    return (
      <div className="App">
        <div className='header'>
        <h1>The World of Games</h1>
        </div>
        <div className='main'>
        <div id="circle" className="flip-coin" onClick={()=>{}} >
          <div className="front-side">
            <h2>TAIL</h2>
          </div>
          <div className="back-side">
            <h2>HEAD</h2>
          </div>
        </div>
        <h1>Click the coin!</h1>
        </div>
      </div>
    );
  }


export default App;
