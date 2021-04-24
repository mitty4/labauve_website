import './App.css';

import React, { Component, useState } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Connect from "./Connect";
import Home from "./Home";
import Video from "./Video";
import About from "./About";

function App() {

  const [name, setName] = useState("");
  const [homeRow, setHomeRow] = useState("→");
  const [videoRow, setVideoRow] = useState("");
  const [aboutRow, setaboutRow] = useState("");
  const [connectRow, setConnectRow] = useState("");

  const handleSubmit = (evt) => {
      evt.preventDefault();
      myFunction(name)
      setName("");
  }

  function myFunction(route) {
    let check = ['home','video','about','connect']
    let re = new RegExp('cd ./');
    let id = route.replace(re, '')
    const list = {
      "setHomeRow":setHomeRow,
      "setVideoRow":setVideoRow,
      "setaboutRow":setaboutRow,
      "setConnectRow":setConnectRow
    }
    if (check.includes(id)){
        document.getElementById(id).click();
        Object.keys(list).forEach(element => (String(element).toLowerCase().includes(name)) ? list[element]("→") : list[element](""))
    }else{
      return false;
    }

  }
  window.onload = function() {
    var input = document.getElementById("autofocus").focus();
    document.getElementById('home').click();
  };
  return (
    <HashRouter>

      <form
      className = "nav"
      onSubmit={handleSubmit}>

      <div>
        <ul>
          <li style={{display:'inline'}}><span className='arrow' style={{color:'white', fontSize:'1.4em'}}>{homeRow}</span> home | </li>
          <li style={{display:'inline'}}><span className='arrow' style={{color:'white', fontSize:'1.4em'}}>{videoRow}</span> video | </li>
          <li style={{display:'inline'}}><span className='arrow' style={{color:'white', fontSize:'1.4em'}}>{aboutRow}</span> about | </li>
          <li style={{display:'inline'}}><span className='arrow' style={{color:'white', fontSize:'1.4em'}}>{connectRow}</span> connect</li>
        </ul>
      </div>

        <label>


          Welcome: visitor$ {name}
          <span
            style={{fontSize:'calc(16px + 1.5vw)', color:'#39FF14'}}
            className="blink_me">
            &#9646;
          </span>

          <input
            autoComplete='off'
            id='autofocus'
            className='terminal'
            style={{
              backgroundColor:'#282C34',
              color:'#282C34',
              border:'none',
              outline:'none',
              cursor:'none',
              width:'10vw'
            }}
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
      </form>

        <div className='App-header'>
          <ul className="header" style={{display:'none'}}>
              <li><NavLink id='home' to="/">Home</NavLink></li>
              <li><NavLink id='video' to="/video">Video</NavLink></li>
              <li><NavLink id='about' to="/about">About</NavLink></li>
              <li><NavLink id='connect' to="/connect">Connect</NavLink></li>
          </ul>

          <div className="content" >
              <Route exact path="/" component={Home}/>
              <Route path="/video" component={Video}/>
              <Route path="/about" component={About}/>
              <Route path="/connect" component={Connect}/>
          </div>
        </div>
    </HashRouter>
  );
}

export default App;
