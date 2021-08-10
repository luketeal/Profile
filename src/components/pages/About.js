import React from 'react';
import profileImg from '../assets/images/luketeal.jpg';

export default function About() {
  return (
    <main>
        <article id="about" className="topmargin row-wrap">
            
            {/* <div className="titlecard flex-column">
                <h2>About me</h2>
            </div> */}

            <img 
            src={profileImg}
            alt="luke with a black jacket and a sky background"
            className="mypicture"/>

            <div className="aboutcontentwrap">
                <p className="slogan">Build<span> {String.fromCharCode(183)} </span>Learn<span> {String.fromCharCode(183)} </span>Fun</p>
                <p className="aboutcontent">A University of New Hampshire graduate in 2011, I
                    have a passion for learning new things, having fun outdoors with my family,
                    and traveling all around the world. The thing that has really gotten me going
                    these days is coding and web development. I've been participating in a coding 
                    bootcamp and I've enjoyed every minute of it.  Check out some of my work below.
                    I'm always interested in meeting new folks and learning something new so reach
                    out if you want! 
                </p>
            </div>
        </article>
    </main>
  );
}
