import axios from 'axios'
import React, { useState, useEffect } from 'react';

import { useSelector } from "react-redux"

import { useDispatch } from 'react-redux';

export default function SubDense() {

  const dispatch = useDispatch();
  const storeData = useSelector(store => { return store })
  
    useEffect(() => {

      dispatch({type:"CHANGE-SEC",payload:"SubDense"})
      /*all this for get last url name
      const urlChackWithSlash = document.URL.split("/")
      console.log("From url "+urlChackWithSlash[urlChackWithSlash.length-1])
      setTypeSub(urlChackWithSlash[urlChackWithSlash.length-1])
      pullComments();
      */
  
   }, []);


  return (
    <div>          
   
    <h3>ידע ממולץ לפני: תכונת ארכימדס</h3>
 
    <div className='AboutHebraw'>
           צפיפות תת קבוצה:
        </div>
        <br/>    <br/>   
    <iframe
    frameborder="0"
    scrolling="no"
    src="https://drive.google.com/file/d/1-pCOKqu03Ye4nzCHCg8xCRDCuUpD8EOE/preview">


    </iframe>




    </div>
  )
}
