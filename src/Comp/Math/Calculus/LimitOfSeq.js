
import React, { useEffect } from 'react';

import { useSelector } from "react-redux"

import { useDispatch } from 'react-redux';

export default function LimitOfSeq() {

  const dispatch = useDispatch();
  const storeData = useSelector(store => { return store })
  
    useEffect(() => {

      dispatch({type:"CHANGE-SEC",payload:"LimitOfSeq"})
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
            גבול של סדרה:
        </div>

    <iframe
    frameborder="0"
    scrolling="no"
    src="https://drive.google.com/file/d/1-yQuwKvvyih6PFWmPSEPBi4f74FihaCM/preview">


    </iframe>





    </div>
  )
}
