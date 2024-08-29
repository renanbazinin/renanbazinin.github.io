
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios'


export default function ReddiAPIFUN() {
    const dispatch = useDispatch();
    const [data, setData] = useState(null);
    const [memes, setMemes] = useState(null);
    const pullReddit =async ()=>{
      await setData(null)
  
        const raw = await axios.get(`https://www.reddit.com/r/ani_bm/top.json?limit=10&t=week`)
  
        await setData((raw.data.data.children))

        console.table((raw.data.data.children[9].data))
        console.log("Is video? " + raw.data.data.children[9].data.selftext_html)

    }

      useEffect(() => {
        dispatch({type:"CHANGE-SEC",payload:"ReddiAPIFUN"})
         pullReddit();
     
      }, []);

    const randomPost = async()=>{
        await setData(null)

        const raw = await axios.get(`https://www.reddit.com/r/rickandmorty/top.json?limit=10&t=week`)
        await setMemes("RickAndMorty")
        await setData((raw.data.data.children))
        console.table((raw.data.data.children[9].data))

      }
      const discoverNewSubreddit = async() =>{
        await setData(null)
        const urlget ="https://www.reddit.com/subreddits/popular.json?limit=5000"
        const raw = await axios.get(urlget)
        const subredditCose = ((raw.data.data.children[Math.floor(Math.random() * 100)].data.display_name_prefixed))
        await setMemes(subredditCose)
        const rawPost = await axios.get(`https://www.reddit.com/${subredditCose}/top.json?limit=10&t=week`)
        console.table((rawPost.data.data.children))
        await setData((rawPost.data.data.children))
      }
    
  return (
    <div>

      <h3>Top 10 post from random subreddit</h3>
      <br/>
      <button onClick={discoverNewSubreddit}>Random subreddit</button>OR
      <br/>
    <button onClick={randomPost}>RickAndMory Subreddit </button>OR 
    <button onClick={pullReddit}> Ani_bm Subreddit</button>
    <br/>
      {memes!==null?<h1>Top 10 from {memes} - week</h1>:""}
        
        <br/>
        {data!=null?
            
           data.map((kid,i) => {
                return <div key={i} className='reddit-box'>
                    <br/>
                    <h4>Place {i+1}: {kid.data.title}</h4>
                    <br/>
                    {
                    kid.data.post_hint==="image"?
                    <img src={kid.data.url} width={"300px"}/>:
                    kid.data.is_video===true?
                    <video autoPlay name="media" width={"400px"}>
                    <source src={kid.data.media.reddit_video.fallback_url} type="video/mp4"/>
                    </video>:
                    kid.data.url_overridden_by_dest!=null?
                    <a href={kid.data.url_overridden_by_dest}  target="_blank" rel="noopener noreferrer">Link!</a>
                    
                    
                    :kid.data.selftext.length>1?<div>{kid.data.selftext}</div>:
                    "He didn't write in body. Only title "}
                    
                    <br/>
                    </div>
           })
        
        :<span>
          <img  style={{"width":"50px"}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"></img>
          <br/><h1>Reload Fun From Reddit</h1></span>}


    </div>
  )
}
