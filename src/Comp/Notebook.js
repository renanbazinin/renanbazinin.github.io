import React, { useState, useEffect } from 'react';
import Induction from './Math/Calculus/Induction';

import { Routes, Route, Link ,useNavigate, Outlet,useParams } from "react-router-dom"
import { useDispatch } from 'react-redux';
export default function Notebook() {
    const dispatch = useDispatch();
    const [password,setPassword] = useState('');

    const [mov,setMov] = useState('');

    const checkWhatToPress = ()=>{
      const urlChack = document.URL.split('RenanBazininSite');
      const urlChackWithSlash = urlChack[1].split("/")
      console.log( document.querySelectorAll("a[href='#/Notebook']"))
      console.log(urlChack)
      let AddUrl="#/" 
      if(urlChackWithSlash[0]==='')
        AddUrl="/#/" 
      for(let i=1;i<urlChackWithSlash.length;i++){
          AddUrl+=urlChackWithSlash[i];
          console.log(document.querySelectorAll(`a[href='${AddUrl}']`))
          let theAclassChange = document.querySelectorAll(`a[href='${AddUrl}']`);
          if(theAclassChange[0]!=undefined)
          theAclassChange[0].className='a-pressed';
          AddUrl+="/"
      }
    }

    useEffect(()=>{

      dispatch({type:"CHANGE-SEC",payload:""})
      checkWhatToPress()

        if( localStorage.getItem('enter_id') ===process.env.REACT_APP_LOG_PASS || sessionStorage.getItem('enter_id')===process.env.REACT_APP_LOG_PASS)
        {
            console.log("good")
        
            setPassword(localStorage.getItem('enter_id'))
        }
    }, [password])

    const passwordChack = (e)=>{
      alert(`Wrong password. You typed: ${password}`)

    }

    const handlPass = (e)=>{

        sessionStorage.setItem('enter_id', e.target.value);
        localStorage.setItem('enter_id', e.target.value);
        setPassword(e.target.value)
    }

    const logOut = ()=>{

        sessionStorage.setItem('enter_id', "");
        localStorage.setItem('enter_id', "");
        setPassword()
    }
    const handleNav = (e)=>{
   

      const element = e.target
      let c = element.closest("div");
     const arrayOfA = c.getElementsByTagName('a')




    for (let btc of arrayOfA) {
      btc.className='';
     
      if(btc.innerHTML===e.target.innerHTML  )
       btc.className='a-pressed';
      
    } 
   
  }
  return (
    <div>
        <a href='https://renanbazinin.github.io/Renans-Notebook/'>מתחיל להכין גרסה חדשה למחברת של רנן 
        <br/>
        <h5>לחץ כאן למחברת של רנן 2.0</h5>
        </a>
        <br/>
 
        {
        password===process.env.REACT_APP_LOG_PASS || process.env.REACT_APP_LOG_PASS_ADMIN === password?
        <div>Welcome<br/>
            <button onClick={logOut}>Log Out</button>

                 <div  className='StudyHebraw'>
                 <br/>
               <div class="topnav-heb" style={{"margin":"0"}} >

              <a href="#/Notebook/FirstThingsCal" onClick={handleNav} >הקדמה</a>
            <a href="#/Notebook/Calculus" onClick={handleNav} >  אינפי/חדו"א</a>
            <a href="#/Notebook/SetTheory"  onClick={handleNav}>לוגיקה ותורת הקבוצות</a>
            <a href="#/Notebook/LeanC"  onClick={handleNav}>מבוא מדמח בשפת C</a>
   
            
            </div>

            
                
                <Outlet/>

         
                  </div>
        </div>:<div>
        Enter your password for enter
            <input type="text" onChange={(e)=>handlPass(e)} />
            <button onClick={passwordChack}>כניסה</button>
            </div>
    }




    </div>
  )
}
