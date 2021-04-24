import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { SiKaggle } from 'react-icons/si';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';


export default function Connect(props) {


  return (
<div style={{display:'flex', justifyContent:'space-around', flexDirection:'column',alignItems:'center', minHeight:'60vh', width:'95vw', maxWidth:'600px', overflow:'hidden'}}>
    <div style={{display:'flex', justifyContent:'space-around', flexDirection:'row',alignItems:'center', minHeight:'20vh', width:'90vw', maxWidth:'600px'}}>
      <a href="https://www.kaggle.com/mitchelllabauve" target="_blank">
        <SiKaggle size='4em' color='white'/>
      </a>
      <a href="https://www.linkedin.com/in/mitchell-labauve/" target="_blank">
        <AiFillLinkedin size='4em' color='white' />
      </a>
      <a href="https://github.com/mitty4" target="_blank">
        <AiOutlineGithub size='4em' color='white'/>
      </a>

    </div>
    <div style={{display:'flex', justifyContent:'space-around', flexDirection:'column',alignItems:'center', minHeight:'60vh', width:'95vw', maxWidth:'600px', overflow:'hidden'}}>
<iframe src="https://giphy.com/embed/3oriO7A7bt1wsEP4cw" width="480" height="336" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
<p size='1em'><a href="https://giphy.com/gifs/newquest-coffee-hands-3oriO7A7bt1wsEP4cw">via GIPHY</a>
</p>
   </div>
   </div>

  );
}
