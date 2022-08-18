import { useState } from 'react'
import './App.css'
import React from "react";




function App() {

  const [side, setSide] = useState(0)
  const [frontside, setFrontside] = useState(0)
  const [backside, setBackside] = useState(0)
  const [style, setStyle] = useState(0)
  let heads = frontside 
  let tails = backside 
  
  function flipcoin(){
    let frontorback = Math.floor(Math.random() * 2)
    if(frontorback === 1)  setFrontside(frontside + 1)
    else if (frontorback === 0)  setBackside(backside + 1)
    setSide(frontorback)
  }

    return (
      <div className="App">
        <div className='header'>
        <h1>The World of Games</h1>
        </div>
        <div className='table'>
        <h3>Head: {heads} </h3>
        <h3>Tail: {tails} </h3>
        </div>
        <div className='main'>
        <div id="circle" className="flip-coin" onClick={flipcoin} >
          <div className="front-side">
            <h2 >{side === 1 ? "heads".toUpperCase(): "tails".toUpperCase()}</h2>
          </div>
          <div className="back-side">
            <h2>{side === 2 ? "heads".toUpperCase() : "tails".toUpperCase()}</h2>
          </div>
        </div>
        <h1>Click the coin!</h1>
        </div>
      </div>
    );
  }


export default App;
