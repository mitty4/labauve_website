import React, { useState } from "react";
import { FaKeyboard } from 'react-icons/fa'
import {
  SiMysql,
  SiDocker,
  SiTensorflow,
  SiApachespark,
  SiSparkfun,
  SiPython,
  SiAmazonaws,
  SiGit,
  SiKubernetes
} from 'react-icons/si';


export default function Home(props) {

  return (
    <div style={{
      color:'rgb(107 110 115)',
      width:'90vw',
      display:'flex',
      justifyContent:'center',
      height:'75vh',
      alignItems:'center',
      flexDirection: 'column'
    }}>
    <FaKeyboard
      size='1.5em'
      color='white'
    />
      <br />
      <span>``` Type a word from above ```</span><br />
      <br />
      <span>``` to view more ```</span><br />
{/*      <span>  ↓ </span><br />
      <ul>
        <li style={{display:'inline', color:'white'}}> video | </li>
        <li style={{display:'inline', color:'white'}}> about | </li>
        <li style={{display:'inline', color:'white'}}> connect</li>
      </ul>
      <span>  ↓ </span><br />
      <span>``` Press enter ```</span>
*/}
    </div>
  );
}
