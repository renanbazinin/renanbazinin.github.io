
import React, { useEffect } from 'react';

import { useSelector } from "react-redux"

import { useDispatch } from 'react-redux';

export default function Neighborhood() {

  const dispatch = useDispatch();
  const storeData = useSelector(store => { return store })
  
    useEffect(() => {

       const res =  dispatch({type:"CHANGE-SEC",payload:"Neighborhood"})
       console.log("res = " + res)
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
           כמעט לכל n וסביבה
        </div>

    <iframe
    frameborder="0"
    scrolling="no"
    src="https://drive.google.com/file/d/100_iqA59zMtgI7ymbmxRB4EUKhb5y4UG/preview">


    </iframe>





    </div>
  )
}
