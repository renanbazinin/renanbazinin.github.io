
import React, { useState, useEffect } from 'react';

import axios from 'axios'
import { useDispatch } from 'react-redux';


export default function GuessTheSub() {


   const dispatch = useDispatch();

    const [randOrder,setRandOrder] =useState(0)
    const [subChose, setSubChose] = useState(null);
    const [data, setData] = useState(null);
    const [lastPostLink, setLastPostLink] = useState(null);
    const [subsRND,setSubsRND] = useState([])
    const [score,setScore] = useState({correct:false,score:0,waiting:true})
    const playerGuessed = (e)=>{
      //window.scrollTo({ top: 0, behavior: 'smooth' });

      const currentScore = score.score
      if(e.target.innerHTML === subChose)
        setScore({correct:true,score:currentScore+1,waiting:false})
      else
        setScore({correct:false,score:currentScore,waiting:false})

    }
    const pullReddit =async ()=>{
      await setData(null)
      await setRandOrder(Math.floor(Math.random() * 3))
      await setSubsRND(null)
      await setScore({...score,waiting:true})

        const raw = await axios.get(`https://www.reddit.com/subreddits/popular.json?limit=5000`)
        const length =raw.data.data.children.length
  
        const subRan = (raw.data.data.children[Math.floor(Math.random() * length)].data.display_name_prefixed)
        await setSubChose(subRan)

        
        const rawFromSub = await axios.get(`https://www.reddit.com/${subRan}/top.json?limit=10&t=week`)
        const indexRnd =Math.floor(Math.random() * 10)

        console.table(((rawFromSub.data.data.children[indexRnd])))
        await setData(rawFromSub.data.data.children[indexRnd])
        await setLastPostLink(rawFromSub.data.data.children[indexRnd].data.permalink)
        if(rawFromSub.data.data.children[indexRnd].data.media !== null)
          console.log(((rawFromSub.data.data.children[indexRnd].data.media.hls_url)))
        ////RANDOM SUB FUN
        const arrayOfRndSub =[]
        
        let popPost = await axios.get(`https://www.reddit.com/subreddits/popular.json?limit=5000`)
        while(arrayOfRndSub.length <3 ){

         
          let findSub = (popPost.data.data.children[Math.floor(Math.random() * length)].data.display_name_prefixed)
          if(findSub != subChose)
            arrayOfRndSub.push(findSub)

        }
        await setSubsRND(arrayOfRndSub)
        
        
    }

      useEffect(() => {
         pullReddit();
         dispatch({type:"CHANGE-SEC",payload:"GuessTheSub"})
      }, []);


  return (


    <div style={{"display":"flex" , "flexDirection":"column","justifyContent":"center","width": "100%"}}>
        {!score.waiting&&score.correct?<h1 style={{"color":"green"}}>WOW! +1 for you dude!</h1>:!score.waiting?<h1 style={{"color":"red"}}>Wrong! You need to know more reddit</h1>:""}
        {!score.waiting?<span>The correct ans is {subChose} <br/> <a href={`https://reddit.com${lastPostLink}`}  target="_blank" rel="noopener noreferrer" >Here is the link to the post</a></span>:""}
        <h2>Score : {score.score}</h2>
        <button onClick={pullReddit} style={{"width":"60%","alignSelf":"center"}}>Random</button>

        {!score.waiting?subChose:""}
        <br/><br/><br/>
        {data!==null?
        <div style={{"marginLeft":"10%", "marginRight":"10%","borderStyle":"solid"}}>
        {data.data.title}
        <br/>


        {
                data.data.post_hint==="image"?
                <img src={data.data.url} width={"300px"}/>:
                  data.data.is_video?
                    <video controls width="250" autoPlay>
                      <source src="data.data.media.reddit_video.fallback_url"  type="video/mp4" height="100px"/>
                    </video>:data.data.url_overridden_by_dest!=null?
                 
                    <a href={data.data.url_overridden_by_dest}  target="_blank" rel="noopener noreferrer">Link!</a>
                    :data.data.selftext.length>1?<div>{data.data.selftext}</div>:<span style={{"fontSize":"oblique"}}>
                    "He didn't write in body. Only title "</span>
                    
                    }

        </div>:
        "Finding you something funny"}
      <br/>
      {subsRND!==null&&score.waiting?<div>
        {randOrder===0?<div>
          <button onClick={(e)=>playerGuessed(e)}>{subChose}</button>
          <button onClick={(e)=>playerGuessed(e)}>{subsRND[0]}</button>
          <button onClick={(e)=>playerGuessed(e)}>{subsRND[1]}</button>
          <button onClick={(e)=>playerGuessed(e)}>{subsRND[2]}</button>
          </div>:
        
        randOrder===1?
        <div>
          <button onClick={(e)=>playerGuessed(e)}>{subsRND[0]}</button>
          <button onClick={(e)=>playerGuessed(e)}>{subChose}</button>
          <button onClick={(e)=>playerGuessed(e)}>{subsRND[1]}</button>
          <button onClick={(e)=>playerGuessed(e)}>{subsRND[2]}</button>
          </div>:
       randOrder ===2?
        <div>
          <button onClick={(e)=>playerGuessed(e)}>{subsRND[1]}</button>
          <button onClick={(e)=>playerGuessed(e)}>{subsRND[0]}</button>
          <button onClick={(e)=>playerGuessed(e)}>{subChose}</button>
          <button onClick={(e)=>playerGuessed(e)}>{subsRND[2]}</button>
          </div>:<div>
    
          <button onClick={(e)=>playerGuessed(e)}>{subsRND[0]}</button>
          <button onClick={(e)=>playerGuessed(e)}>{subsRND[1]}</button>
          <button onClick={(e)=>playerGuessed(e)}>{subsRND[2]}</button>
          <button onClick={(e)=>playerGuessed(e)}>{subChose}</button>
          </div>        
        }</div>:!score.waiting?<h2 onClick={pullReddit}>Click Here Or random for proceed</h2>:<span>scrambling options<br/><img  style={{"width":"50px"}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"></img></span>}
    </div>
  )
}
