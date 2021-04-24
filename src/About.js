import React, { useState } from "react";


export default function About(props) {


  return (

    <div style={{display:'flex', justifyContent:'space-around', flexDirection:'column',alignItems:'center', minHeight:'60vh', width:'95vw', maxWidth:'400px', overflow:'hidden'}}>
      When it comes to work and/or life...
      <ul>
        <li>
          I'm fast. Like really fast. Because if I'm not, my 1,2, and 3 year old will get into something they shouldn't.
        </li>
        <li>
          I like to learn new things just to say that I did.
        </li>
        <li>
          I believe that we should always seek out true, peaceful happiness instead of temporary satisfaction.
        </li>
        <li>
          Programming is the new reading - in 30 years, everyone will know how to code.
        </li>
        <li>
          And lastly, I want to be around people who value authenticity, compassion, hard work, discipline, and creativity.
        </li>
      </ul>
    </div>
  );
}
