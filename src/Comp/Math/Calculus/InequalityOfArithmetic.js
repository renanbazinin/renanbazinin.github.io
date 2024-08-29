
import React, { useEffect } from 'react';

import { useSelector } from "react-redux"

import { useDispatch } from 'react-redux';

export default function InequalityOfArithmetic() {

  const dispatch = useDispatch();
  const storeData = useSelector(store => { return store })
  
    useEffect(() => {

      dispatch({type:"CHANGE-SEC",payload:"InequalityOfArithmetic"})
      /*all this for get last url name
      const urlChackWithSlash = document.URL.split("/")
      console.log("From url "+urlChackWithSlash[urlChackWithSlash.length-1])
      setTypeSub(urlChackWithSlash[urlChackWithSlash.length-1])
      pullComments();
      */
  
   }, []);


  return (
    <div>          
   
    <h3>ידע ממולץ לפני: אי שיווינות , אינדוקציה</h3>
        <div className='AboutHebraw'>
            אי שיווין הממוצעים:
        </div>

    <iframe
    frameborder="0"
    scrolling="no"
    src="https://drive.google.com/file/d/1-u4D3Nx0L-MqTBGop7XujHuFr4Fp22Jn/preview">


    </iframe>





    </div>
  )
}
