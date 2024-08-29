import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';
import TimeLine from './TimeLine'
export default function RenanBazinn() {
  const storeData = useSelector(store => { return store })
  const dispatch = useDispatch();
  
  useEffect(() => {

    dispatch({type:"CHANGE-SEC",payload:"RenanBazinin"})
  }, []);
  const handleNav = (e)=>{
   

        const element = e.target
        let c = element.closest("div");
      const arrayOfA = c.getElementsByTagName('a')




      for (let btc of arrayOfA) {
        btc.className='';
        console.log(btc)
        if(btc.innerHTML===e.target.innerHTML)
        btc.className='a-pressed';
        
      } 
    
    }
  return (
    <div className="About" >
      About Me: 
        <div class="topnav" style={{"margin":0}} >
        <a href="#/RenanBazinin" className='a-pressed' >RenanBazinin</a>
        <a href="#/TimeLine" >TimeLine</a>
        </div>
      {storeData.lang==="en"?"":"עוד לא כתבתי בעברית"}
        <h2 style={{"textAlign":"center"}}>Renan Bazinin</h2><br/>
        I'm a new student to computer science.  I have always had a passion for computers
        <h4 style={{"textDecoration":"underline"}}>Points about me</h4>
            <div>
            <ul>
                  <li>I studied at a program called computational science in Davidson institute and also software engineering (15 points in the Bagrut).</li>
                  <li>In high school I participated in many Hackathons - second prize in one of them</li>
                  <li>I still open to everything in this field. I like Web-Development , Algorithmics and hope to gain enough mathematical theory to explor data science world </li>
                  <li>My project in software engineering was -"Discover the author of anonymous book by data of many other books and authors" inspire by this <a className='NormalLink' href='https://languagelog.ldc.upenn.edu/nll/?p=5315'>Article</a></li>             
                  <li>Seconds year at MTA (Academic Tel Aviv Yafo) </li>

                  
              </ul>
        <h3 style={{"textDecoration":"underline"}}>knowledge</h3>    
            <div >
              <br/>
            High-level programming language:
                <ul>
      

                  <li>JAVA</li>
                  <li>CPP</li>
                  <li>Python from project in 5 Point the software engineering (100 score)</li>
                  </ul>
                  Web-Development:
                  <ul>
                   <li>Advanced JavaScript (Async programming and call-back functions)</li>
                    <li>Node.js , React , MongoDB and Express</li>
               
                    </ul>
                    General
                    <ul>
                  <li>Excel (inculding VBA)</li>
                  <li>Hebrew-Native language</li>
                  <li>English-very good. score 142/150 in psychometry exam</li>
              </ul>
            </div>     
           
            </div>
    </div>
  )
}
