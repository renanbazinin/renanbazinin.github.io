import logo from './logo.svg';
import './App.css';
import RenanBazinn from './RenanBazinn';
import Projects from './Projects';
import TimeLine from  './TimeLine'
import Stream from './Comp/Stream';
import HeapExam from './Comp/HeapExam'
import Algorithms from './Comp/Algorithms';
import ReddiAPIFUN from './Comp/ReddiAPIFUN'
import GuessTheSub from './Comp/GuessTheSub'
import Guess from './Comp/Guess'
import Notebook from './Comp/Notebook';
import axios from 'axios'

import FirstThingsCal from './Comp/Math/Calculus/FirstThingsCal'
import Induction from './Comp/Math/Calculus/Induction';
import Calculus from './Comp/Math/Calculus/Calculus'
import InequalityOfArithmetic from './Comp/Math/Calculus/InequalityOfArithmetic';
import SubDense from './Comp/Math/Calculus/SubDense';
import Neighborhood from './Comp/Math/Calculus/Neighborhood'
import LimitOfSeq from './Comp/Math/Calculus/LimitOfSeq';
import LimitOfSeqArithmetic from './Comp/Math/Calculus/LimitOfSeqArithmetic'
import InfntyLimitOfSeq from './Comp/Math/Calculus/InfntyLimitOfSeq';
import InfntyLimitArithmetic from './Comp/Math/Calculus/InfntyLimitArithmetic';
import LimitingBehavior from './Comp/Math/Calculus/LimitingBehavior';
import ConvergenceTests from './Comp/Math/Calculus/ConvergenceTests'
import BlockedAndMono from './Comp/Math/Calculus/BlockedAndMono'
import LemaOfCantor from './Comp/Math/Calculus/LemaOfCantor'
import SubSeries from './Comp/Math/Calculus/SubSeries'
import BolzanoWeierstrass from './Comp/Math/Calculus/BolzanoWeierstrass'
import UpperLowerBounds from './Comp/Math/Calculus/UpperLowerBounds'
import CauchySequence from './Comp/Math/Calculus/CauchySequence'
import Functions from './Comp/Math/Calculus/Functions'


import SetTheory from './Comp/Math/SetTheoryAndLogics/SetTheory';

import LeanC from './Comp/Math/LeanC';

import {Nav , Navbar, NavLink,Container,NavDropdown}from 'react-bootstrap';

import React, { useState, useEffect } from 'react';
import { Routes, Route, Link ,useNavigate, Switch,useParams } from "react-router-dom"

import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';




function App() {
  document.title = 'Renan Bazinin Site';

  const storeData = useSelector(store => { return store })
  const dispatch = useDispatch();
  const [lang,setLang] = useState('he');

  const [humanChack,setHumanChack] = useState({});

  const [comment,setComment] = useState({"type":"הערה","text":"","subject":"","name":"אנונימי"});

  const [allcomment,setAllcomment] = useState();
  const herokuURL = process.env.REACT_APP_HERO_API

  useEffect(()=>{

    pullComments();
    checkWhatToPress()
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const ans = num1+num2;
    setHumanChack({num1:num1,num2:num2,ans:ans})


  }, [])

  
    const handlVal = (e)=>{
      setComment({...comment,type:e.target.value})
    }

    const handlValText = (e)=>{
      setComment({...comment,text:e.target.value})
    }

    const pullComments = async()=>{
       const raw = await axios.get(herokuURL)
       console.log(raw.data)
       setAllcomment(raw.data)

    }
    const handlValName = (e)=>{
      setComment({...comment,name:e.target.value})

    }

  const checkWhatToPress = ()=>{
    const urlChack = document.URL.split('RenanBazininSite');
    const urlChackWithSlash = urlChack[1].split("/")
    console.log( document.querySelectorAll("a[href='#/Notebook']"))
    console.log(urlChack)
    let AddUrl="#/" 
    for(let i=1;i<urlChackWithSlash.length;i++){
        AddUrl+=urlChackWithSlash[i];
        console.log(document.querySelectorAll(`a[href='${AddUrl}']`))
        let theAclassChange = document.querySelectorAll(`a[href='${AddUrl}']`);
        if(theAclassChange[0]!=undefined)
        theAclassChange[0].className='a-pressed';
        AddUrl+="/"
    }
  }


  const delCom = async (id)=>{
    const delURLNew = herokuURL+id
    const res = axios.delete(delURLNew)
    console.log(res)
  }



  const sendComment = async()=>{


    if(humanChack.ans===parseInt(humanChack.robotSaid)){
      console.log(comment)
      const respondDB = await axios.post(`${herokuURL}`,{...comment,subject:storeData.sec})
      console.log(respondDB)
      pullComments();



    }else
    alert("you are robot or can do math . hence you can't reply")

    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const ans = num1+num2;
    setHumanChack({num1:num1,num2:num2,ans:ans})


   }



  const toggleLang = (e)=>{

      if("English" === e.target.value)
        setLang("en")
      else
        setLang("he")
      const langForRedux = e.target.value.toUpperCase()

        dispatch({type:langForRedux})
  }

 const handlMath = (e)=>{
    setHumanChack({...humanChack,robotSaid:e.target.value})
 }

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
    <div className="App" >
    
      <link
          rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <h1>Renan The Student <a href="#/RenanBazinin" > <img src='https://i.imgur.com/Eb5gEmq.png' style={{width:"30px"}}/></a></h1>
     
      <div className='About'>
        
        <select 
        onChange={(e)=>{toggleLang(e)}}
        style={{
          backgroundColor: "#252525",
          color: "white",
          borderColor: "black",
          borderRadius: "5px",
          padding: "5px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        <option defaultValue >English</option>
        <option>עברית</option>
      </select>

        </div>
      <div class="topnav">
        <a href="#/RenanBazinin" onClick={handleNav}> About Me</a>
        <a href="#/Projects"  onClick={handleNav}>Projects</a>
        <a href="#/Guess"  onClick={handleNav}>Guess The Sub (Reddit)</a>
        <a href="#/ReddiAPIFUN"  onClick={handleNav}>Top 10 (Reddit)</a>
        <a href="#/Notebook" onClick={handleNav}>המחברת של רנן</a>
        
      </div>
      

   


     
    
      <Routes >
        <Route path='/' element={<RenanBazinn  />}/>
        <Route path='/RenanBazinin/' element={<RenanBazinn/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/TimeLine' element={<TimeLine />}/>
        <Route path='/Stream' element={<Stream/>}/>
        <Route path='/Algorithms' element={<Algorithms/>}>
          <Route path="HeapExam" element={<HeapExam />} />
   

        </Route>
        <Route path='/ReddiAPIFUN' element={<ReddiAPIFUN/>}/>
        <Route path='/GuessTheSub' element={<GuessTheSub/>}/>

        <Route path='/Guess' element={<Guess/>}/>

        <Route path='/Notebook' element={<Notebook />}>
          <Route path='FirstThingsCal' element={<FirstThingsCal/>} />
          <Route path="Calculus" element={<Calculus  />} >
             <Route path="Induction" element={<Induction  />} />
             <Route path='InequalityOfArithmetic' element={<InequalityOfArithmetic/>} />
             <Route path='SubDense' element={<SubDense/>} />
             <Route path='LimitOfSeq' element={<LimitOfSeq/>} />
             <Route path='Neighborhood' element={<Neighborhood/>} />
             <Route path='LimitOfSeqArithmetic' element={<LimitOfSeqArithmetic/>}/>
             <Route path='InfntyLimitOfSeq' element={<InfntyLimitOfSeq/>}/>
             <Route path='InfntyLimitArithmetic' element={<InfntyLimitArithmetic/>}/>
             <Route path='LimitingBehavior' element={<LimitingBehavior/>}/>
             <Route path='ConvergenceTests' element={<ConvergenceTests/>}/>
             <Route path='BlockedAndMono' element={<BlockedAndMono/>}/>
             <Route path='LemaOfCantor' element={<LemaOfCantor/>}/>
             <Route path='SubSeries' element={<SubSeries/>}/>
             <Route path='BolzanoWeierstrass' element={<BolzanoWeierstrass/>}/>
             <Route path='UpperLowerBounds' element={<UpperLowerBounds/>}/>
             <Route path='CauchySequence' element={<CauchySequence/>}/>
             <Route path='Functions' element={<Functions/>}/>
             Functions
          </Route>
          <Route path='LeanC' element={<LeanC/>}/>
          <Route path='SetTheory' element = {<SetTheory/>} />
        </Route>
    
      </Routes>
    


    {allcomment!==null?
      <div className='comments-class' style={{display:"none"}}>
                        <div > 
        
                      <label>
                        סוג תגובה
                        <br/>

                      <select onChange={(e)=>{handlVal(e)}}>
                        <option>הערה</option>
                        <option >תיקון</option>
                        <option >שאלה</option>
                      </select>
                      </label><br/>
                      <textarea dir='rtl' placeholder='כתוב כאן את תגובתך' onChange={(e)=>{handlValText(e)}} ></textarea>
                      <br/><br/>
                      <input type={"text"} placeholder='אנונימי' onChange={(e)=>{handlValName(e)}} />
                      <br/><br/>
                      Human verification : <strong> {humanChack.num1} + {humanChack.num2} </strong>= <input type={"text"} style={{"width":"5%"}} onChange={(e)=>{handlMath(e)}} />
                      {humanChack.ans===parseInt(humanChack.robotSaid)?<img src='https://cdn.pixabay.com/photo/2016/08/21/18/48/emoticon-1610518_960_720.png' style={{"width":"35px"}} />:
                      <img src='https://cdn.pixabay.com/photo/2019/06/22/14/42/robot-4291692_960_720.png' style={{"width":"30px"}} />}
                      <br/>
                      <button onClick={sendComment}>שלח</button>
              </div>
              
               {storeData.sec} - נושא התגובות 
              <div >
                      {allcomment!=null?allcomment.map((commentAPI,i)=>{
                        if(commentAPI.subject===storeData.sec)
                          return <span key={i+'span'}><div key={i} className='comments'>
                            {localStorage.getItem('enter_id')===process.env.REACT_APP_LOG_PASS_ADMIN?<img className='Del-Com' src='https://cdn.pixabay.com/photo/2012/04/02/16/12/x-24850_960_720.png' onClick={()=>delCom(commentAPI._id)}></img>:""}
                           <br/>שם:{commentAPI.name===undefined?"אנונימי":commentAPI.name} סוג:{commentAPI.type}<br/><span style={{"fontSize":"x-large"}}>{commentAPI.text}</span><br/></div><br/></span>
                      }):""}
            </div>
    </div>:<span> תגובות <br/><img src='https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-5.jpg' style={{"width":"200px"}}/></span>}

      <div className='demi-div'></div>
      <footer>
      Email: <a href = "mailto: renanbazinin2@gmail.com">renanbazinin2@gmail.com</a>

        
      </footer>
    </div>
    
  );
}

export default App;
