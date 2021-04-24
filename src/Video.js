import React, { useState } from "react";
import ReactPlayer from "react-player"


export default function Video(props) {


  return (

    <div style={{display:'flex', justifyContent:'space-around', flexDirection:'column',alignItems:'center', minHeight:'60vh', width:'95vw', maxWidth:'600px', overflow:'hidden'}}>
    Why Machine Learning?
     <ReactPlayer
       url="https://youtu.be/6RrBmyWCJA8"
     />
   </div>
  );
}
