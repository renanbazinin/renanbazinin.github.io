import axios from 'axios'
import React, { useState, useEffect } from 'react';

import { useSelector } from "react-redux"

import { useDispatch } from 'react-redux';

export default function SubDense() {

  const dispatch = useDispatch();
  const storeData = useSelector(store => { return store })
  
    useEffect(() => {

      dispatch({type:"CHANGE-SEC",payload:"UpperLowerBounds"})
      /*all this for get last url name
      const urlChackWithSlash = document.URL.split("/")
      console.log("From url "+urlChackWithSlash[urlChackWithSlash.length-1])
      setTypeSub(urlChackWithSlash[urlChackWithSlash.length-1])
      pullComments();
      */
  
   }, []);


  return (
    <div>          
   
    <h3></h3>
 
    <div className='AboutHebraw'>
            גבול עליון ותחתון חלקי:
        </div>
        <br/>    <br/>   
    <iframe
    frameborder="0"
    scrolling="no"
    src="https://drive.google.com/file/d/10VghZ6zQCvuh11UACknHcc1xzLxtF01b/preview">


    </iframe>




    </div>
  )
}
