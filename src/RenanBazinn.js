import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import TimeLine from './TimeLine';

export default function RenanBazinn() {
  const storeData = useSelector(store => store);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({type: "CHANGE-SEC", payload: "RenanBazinin"});
  }, [dispatch]);

  const handleNav = (e) => {
    const element = e.target;
    let c = element.closest("div");
    const arrayOfA = c.getElementsByTagName('a');

    for (let btc of arrayOfA) {
      btc.className = '';
      if (btc.innerHTML === e.target.innerHTML) btc.className = 'a-pressed';
    }
  };

  return (
    <div>
      <div className="sub-nav">
        <a href="#/RenanBazinin" className='a-pressed' onClick={handleNav}>Renan Bazinin</a>
        <a href="#/TimeLine" onClick={handleNav}>TimeLine</a>
      </div>
      <div className="About">
        {storeData.lang === "en" ? "" : "עוד לא כתבתי בעברית"}
        <h2 className="profile-title">Renan Bazinin</h2>
        <p className="profile-intro">I'm a new student to computer science. I have always had a passion for computers.</p>
        <div className="profile-section">
          <h4 className="section-title">Points about me</h4>
          <ul className="section-list">
            <li>I studied at a program called computational science in Davidson institute and also software engineering (15 points in the Bagrut).</li>
            <li>In high school I participated in many Hackathons - second prize in one of them.</li>
            <li>I am still open to everything in this field. I like Web-Development, Algorithmics and hope to gain enough mathematical theory to explore the data science world.</li>
            <li>My project in software engineering was -"Discover the author of an anonymous book by data of many other books and authors", inspired by this <a className='NormalLink' href='https://languagelog.ldc.upenn.edu/nll/?p=5315'>Article</a>.</li>             
            <li>Second year at MTA (Academic Tel Aviv Yafo).</li>
          </ul>
        </div>
        <div className="profile-section">
          <h4 className="section-title">Skills</h4>
          <div>
            <h4 className="section-subtitle">High-level Programming Languages:</h4>
            <ul className="section-list">
              <li>JAVA</li>
              <li>CPP</li>
              <li>Python (100 score in 5 Point software engineering project)</li>
            </ul>
            <h4 className="section-subtitle">Web-Development:</h4>
            <ul className="section-list">
              <li>Advanced JavaScript (Async programming and callback functions)</li>
              <li>Node.js, React, MongoDB, and Express</li>
            </ul>
            <h4 className="section-subtitle">General:</h4>
            <ul className="section-list">
              <li>Excel (including VBA)</li>
              <li>Hebrew - Native language</li>
              <li>English - Very good. Scored 142/150 in the psychometry exam</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
