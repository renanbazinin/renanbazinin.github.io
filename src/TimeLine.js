import React, { useState, useEffect } from 'react';
import { Timeline, Event } from "react-timeline-scribble";
import { Routes, Route, Link ,useNavigate} from "react-router-dom"
import { useSelector } from "react-redux"


export default function TimeLine() {
  useEffect(() => {
    console.log(storeData.lang)
  });
  const storeData = useSelector(store => { return store })
    const [cursor, setCursor] = useState('auto');
    const [styleY, setStyle] = useState({color:'black'});
    const changeCursor = async(e) => {



        if(e.type=="pointerover"){
        setCursor(prevState => {
            setStyle({color:'red'})
            return 'pointer';
            
        });
        return
      }
      
      await setStyle({color:'black'})

        setCursor(prevState => {

            return 'auto';
      });         


    }

    const navigate = useNavigate()
    const dataEnglish = <div className="About">
    <h1></h1>
    <Timeline>
      <Event interval={"1998"} title={"B-day"} subtitle={""} >
        Born in Israel
      </Event>
      <Event interval={"2014 – 2017"} title={"School"} subtitle={"High School Katzir"}>
        I learn in Nachshon Class, leadership class. 
        My majors Were :
        <ul>
        <li>5 points Math</li>
        <li>10 points Computers</li>
        <li>5 points Computational Science</li>
        <li>5 points Physics</li>
        <li>and..Hackathons, Mentoring robotic team and was instructor in science summer camp for middle school</li>
        </ul>
      </Event>
      <Event interval={"2017 – 2020"} title={"Army"} subtitle={"Medic and Head of clinic"}>
        Main things in army:
        <ul>
        <li>Excellence of Medical Services Center (Prize Of Colonol) </li>
        <li>Made program for ideal human resource extraction (Made in VBA)</li>
        <li style={styleY}  onClick={()=>{navigate("/Projects")}} onPointerOver={(e)=>changeCursor(e)} onPointerOut={(e)=>{changeCursor(e)}} >Made program for writing medical records (Personal project)</li>
 
        </ul>
      </Event>
      <Event interval={"2020 – 2022"} title={"discharged from army"} subtitle={"reserve duty and coronavirus"}>
        Main things
        <ul>
        <li>Learn react and advance JavaScript in KERNELiOS  </li>
        <li>Called to reserve service for vaccinate .After also made blood test and coronavirus test</li>
        <li>Mentor a FLL team, robotic competition for middle school</li>
    
      
        </ul>
      </Event>
    </Timeline>

    </div>

    const dataHebraw = 
    
    <div className="AboutHebraw">
    <h1></h1>
    <Timeline >
      <Event interval={"1998"} title={"יום הולדת"} subtitle={""} >
        נולדתי בישראל
      </Event>
      <Event interval={"2014 – 2017"} title={"בית ספר"} subtitle={"תיכון קציר"}>
        למדתי בכיתת נחשון, כיתת מנהיגות.
        המוגברים שלי היו
        <ul>
        <li>5 יחידות מתמטיקה</li>
        <li>10 יחידות מחשבים</li>
        <li>5 יחידות מדע חישובי</li>
        <li>5 יחידות פיסיקה</li>
        <li>והאקתונים , מדריך קבוצת רובוטיקה , מדריך קייטנה מדע לתלמידי חטיבת ביינים</li>
        </ul>
      </Event>
      <Event interval={"2017 – 2020"} title={"צבא"} subtitle={"חובש ואחראי מרפאה"}>
        דברים עיקריים מהצבא:
        <ul>
        <li>תעודת הצטיינות של מרכז שירותי רפואה (פרס אל"מ) </li>
        <li>תוכנה למיצוי משאבי אנוש (נבנה ב-VBA)</li>
        <li style={styleY}  onClick={()=>{navigate("#/Projects")}} onPointerOver={(e)=>changeCursor(e)} onPointerOut={(e)=>{changeCursor(e)}} >תוכנית לכתיבת תיעוד רפואי (פרויקט אישי)</li>
 
        </ul>
      </Event>
      <Event interval={"2020 – 2022"} title={"שחרור מצבא"} subtitle={"מילואים וקורונה"}>
        דברים עיקרים:
        <ul>
        <li>למדתי ריאקט וג'אווה סקירפט מתקדם</li>
        <li>נקראתי למילואים עבור חיסוני קורונה . לאחר מכן , גם ביצעתי דגימות דם ובדיקות קורונה</li>
        <li>מנטור קבוצת רובוטיקה ב-FLL עבור חטיבות ביינים</li>
    
      
        </ul>
      </Event>
    </Timeline>

    </div>

    const  lang  = "en";
  return (


<div className="About" >
        About Me:
        <div class="topnav"  style={{"margin":0}} >
        <a href="#/RenanBazinin"  >RenanBazinin</a>
        <a href="#/TimeLine" className='a-pressed'>TimeLine</a>
        </div>
        {storeData.lang==="en"?dataEnglish:dataHebraw}


    </div>

    
  )
}
