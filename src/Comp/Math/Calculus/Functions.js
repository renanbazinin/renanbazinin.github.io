import axios from 'axios'
import React, { useState, useEffect } from 'react';

import { useSelector } from "react-redux"

import { useDispatch } from 'react-redux';

export default function Functions() {

  const dispatch = useDispatch();
  const storeData = useSelector(store => { return store })
  
    useEffect(() => {

      dispatch({type:"CHANGE-SEC",payload:"Functions"})


   }, []);


  return (
    <div>          
   
    <h3></h3>
 
    <div className='AboutHebraw'>
       פונקציות כללי:
        </div>
        <br/>    <br/>   
    <iframe
    frameborder="0"
    scrolling="no"
    src="https://drive.google.com/file/d/10nVVLOygd-4fmNK9eG1J_mpdy3lkYE0f/preview">


    </iframe>




    </div>
  )
}
