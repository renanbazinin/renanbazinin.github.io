import axios from 'axios'
import React, { useState, useEffect } from 'react';

export default function Induction() {

  const herokuURL = process.env.REACT_APP_HERO_API
  const [comment,setComment] = useState({"type":"","text":"","subject":"Induction","name":"אנונימי"});
  const [type,setType] = useState();
  const [allcomment,setAllcomment] = useState();
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
    useEffect(() => {
      const urlChackWithSlash = document.URL.split("/")
      console.log("From url "+urlChackWithSlash[urlChackWithSlash.length-1])
      setType(urlChackWithSlash[urlChackWithSlash.length-1])
      pullComments();
  
   }, []);

   const sendComment = async()=>{

    
    const respondDB = await axios.post(`${herokuURL}`,comment)
    console.log(respondDB)
    pullComments();



   }
  return (
    <div>          
      {type}
        <div className='AboutHebraw'>
            אינדוקציה:
        </div>
     
    <iframe
    frameborder="0"
    scrolling="no"
    src="https://drive.google.com/file/d/1-kk7vGWF6sNMawKnhDGZCxyKjmJFO6eq/preview">


    </iframe>
    
 
    <div>Comments
      <label>
        סוג תגובה
        <br/>

        <select onChange={(e)=>{handlVal(e)}}>
          <option>הערה</option>
          <option >תיקון</option>
          <option >שאלה</option>
        </select>
      </label><br/>
      <textarea placeholder='כתוב כאן את תגובתך' onChange={(e)=>{handlValText(e)}} ></textarea>
      <br/><br/>
      <input type={"text"} placeholder='אנונימי' onChange={(e)=>{handlValName(e)}} />
      <br/><br/>
      <button onClick={sendComment}>שלח</button>
      </div>
      <div>
        {allcomment!=null?allcomment.map((comment,i)=>{
          if(comment.subject==="Induction")
            return <span key={i+'span'}><div key={i} className='comments'>שם:{comment.name===undefined?"אנונימי":comment.name} סוג:{comment.type}<br/><span style={{"fontSize":"x-large"}}>{comment.text}</span><br/></div><br/></span>
        }):""}
      </div>
    </div>
  )
}
