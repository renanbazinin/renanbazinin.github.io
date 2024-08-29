import React from 'react'
import { Routes, Route, Link ,useNavigate, Outlet,useParams } from "react-router-dom"


export default function Algorithms() {

  const handleNav = (e)=>{
   
    const element = e.target
    let c = element.closest("div");

     const arrayOfBTC = c.getElementsByTagName('button')




    for (let btc of arrayOfBTC) {
      btc.className='button-space';
      console.log(btc)
      if(btc.innerHTML===e.target.innerHTML)
       btc.className='button-pressed';
      
    } 
   
  }


    const navigate = useNavigate()
  return (
    <div className='algo-comp' >
        <div >

    <button  onClick={(e)=>{handleNav(e); navigate("HeapExam") }} className='button-space'>Heap</button>
    <button  onClick={(e)=>{handleNav(e);navigate("")}} className='button-space'>Fake Button For Exit</button>
  {/*
  
    <button  onClick={(e)=>{handleNav(e)}}  className='button-space'>Fake2</button>
    <button  onClick={(e)=>{handleNav(e)}}  className='button-space'>Fake3</button>
    <button  onClick={(e)=>{handleNav(e)}}  className='button-space'>Fake4</button>
    <button  onClick={(e)=>{handleNav(e)}}  className='button-space'>Fake5</button>
    <button  onClick={(e)=>{handleNav(e)}}  className='button-space'>Fake6</button>
    <button  onClick={(e)=>{handleNav(e)}}  className='button-space'>Fake7</button>
    <button  onClick={(e)=>{handleNav(e)}}  className='button-space'>Fake8</button>
      
    */}
    </div>
        <div className='algo-some '>

        <Outlet/>
        </div>
    </div>
  )
}
