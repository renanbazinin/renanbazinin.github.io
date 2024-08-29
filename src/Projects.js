import React, { useState, useEffect } from 'react';
import { Routes, Route, Link ,useNavigate} from "react-router-dom"
import './App.css';

import { useSelector } from "react-redux"

import { useDispatch } from 'react-redux';


const projects = [
  {
    title: "Anamenztron",
    image: 'https://renanbazinin.github.io/Anamnezatron1/images/anamnaz1high.png',
    short: "Helping the user to write medical record quickly and more efficient. Anamenztron = Anamnesis + tron",
    story: "This is a very special project in my heart. Back in 2019, I was in the army. I was a medic and stationed in a big clinic. On a normal day, I encountered at least 50 patients. Because of many legal laws in medical care, I needed to record many elaborate medical terms. This was so exhausting. Like 90% of the cases were with similar patterns. I knew Web programming languages and had an idea to make life easy. But the problem with the army is that you can't import web environment without hell. And I was only a medic. So I did it with pure vanilla JavaScript. Wrote in notepad++.",
    link: 'https://renanbazinin.github.io/Anamnezatron1/'
  },
  {
    title: "FreeTV",
    short: "Site the show the free Channels I found, mostly the basic channels from Israel",
    link: 'https://renanbazinin.github.io/myTV',
    image: 'https://i.imgur.com/opmOlZ5.png'
  },
  {
    title: "News Fetcher",
    image: 'https://i.imgur.com/y6Zos1q.png',
    short: "News from famous sites",
    story: "The News Fetcher site aggregates the latest news from multiple sources, including BBC, NYT, Ynet, Maariv, N12, Rotter, Walla, Calcalist, and Haaretz, providing users with a consolidated view of current events.",
    link: 'https://renanbazinin.github.io/allNews/public/index.html'
  },

  {
    title: "FullStack Course , From KERNELiOS",
    short: "Site destined to manager who runs movie-rental store (like BlockBuster)",
    story: "After I discharged from the army, I got a free course in fullstack. I learned advanced JavaScript, React, and NoSQL (using Mongo). The course project was to create a site for a manager who runs a movie-rental store. The site allows the manager to manage movies and subscribers. Because in Heroku the _id is changing, I temporarily gave all other users that will create all permissions. So don't create new users. Only create/edit members (subscribers). Also, you can edit/add movies.",
    link: 'https://github.com/renanbazinin/FinalFullStack-Movies-managage/'
  },
  
];



export default function Projects() {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  function goLeft() {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
  }

  function goRight() {
    setCurrentIndex((currentIndex + 1) % projects.length);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    function handleKeyDown(event) {
      switch (event.key) {
        case 'ArrowLeft':
          goLeft();
          break;
        case 'ArrowRight':
          goRight();
          break;
        default:
          break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);
  useEffect(() => {


    dispatch({type:"CHANGE-SEC",payload:"Projects"})
  }, []);

  const storeData = useSelector(store => { return store })
    const navigate = useNavigate()
  return (
    <div style={{"backgroundColor":"#252525","marginLeft":"10%","marginRight":"10%"}}>
      <h1>Projects</h1>
      <div className='project-display'>
        <img src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png" alt="Left" onClick={goLeft}    style={{ transform: "rotate(180deg)" , width:"4%" }} />
        <span>Showing project number {currentIndex + 1} of {projects.length}</span>
        <img src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png" alt="Right" onClick={goRight} style={{width:"4%" }}/>
        <div className='project'>
          <h5>{projects[currentIndex].title}</h5>
          <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
          <img src={projects[currentIndex].image} style={{width:"100px"}}/>
           </a>     
           <br/> <br/> <br/> <br/> 
           <div className='About'>
            <strong>short:</strong> {projects[currentIndex].short}
            <br/><br/> 
            <strong>Story:</strong> {projects[currentIndex].story}
          </div>
          <button onClick={()=>{window.open(projects[currentIndex].link,'_blank');}}>Go To Site</button>
        </div>
      
      </div>
    </div>
  );
}
