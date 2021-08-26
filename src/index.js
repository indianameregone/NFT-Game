import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Game from "./game";
import Header from "./header";
import Board from "./board";
import facebook from './img/facebook.svg'
import twitter from './img/twitter.svg'
import instagram from './img/instagram.svg'


function App() {
  return (
    <div>
    <Header/>
    <div className='mainboard'>
      <div className='board'>        
        <Board/>
      </div>
      
      <div className="App">
        <Game/>
        <div className='btn-panel'>
          <button className="btn">Wallet</button><br/>       
          <button className="btn">Mint!!</button><br/>
          <button className='btn '><a href='https://indianameregone.github.io/portfolio/main.html'>About us</a></button>
       </div>
        <br/><br/>
        <div className='indorse'>
          <a href='https://indorse.io/'>Indorse</a><br/><br/>
          <a href='https://ipfs.io/'>IPFS</a><br/><br/>
          <img src={facebook} className='social-m'alt=''/>
          <img src={twitter} className='social-m'alt=''/>
          <img src={instagram } className='social-m'alt=''/> 
        </div>
         
      </div>     
    </div>    
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);