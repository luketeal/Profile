import React from 'react';
import paddockImg from '../assets/images/paddock.png';
import concertCloudImg from '../assets/images/concertcloud.png';
import techBlogImg from '../assets/images/techblog.gif';
import githubImg from '../assets/images/GitHub-Mark-Light-32px.png';

export default function Work() {
  return (
    <main id="work" class="topmargin row-wrap">

    {/* <div class="titlecard flex-column">

        <h2>My Work</h2>
        
    </div> */}

    <div class="workcontent">

        <div class="contentcard">
            <div class="flagbox">
                <div class="flagtext">
                    <p><strong>Paddock</strong></p>
                    <a href="https://github.com/luketeal/projectAwesome"target="_blank">
                        <img src={githubImg}/>
                    </a>
                </div>
                <div class="flag"></div>
            </div>
            <a href="https://shielded-tor-91530.herokuapp.com" target="_blank">
                <img 
                src={paddockImg}
                alt="an image of a website showing Paddock"/>
            </a>
        </div>

        <div class="contentcard">
            <div class="flagbox">
                <div class="flagtext">
                    <p><strong>Concert Cloud</strong></p>
                    <a href="https://github.com/luketeal/concertcloud"target="_blank">
                        <img src={githubImg}/>
                    </a>
                </div>
                <div class="flag"></div>
            </div>
            <a href="https://luketeal.github.io/concertcloud/" target="_blank">
                <img 
                src={concertCloudImg}
                alt="an image of a website showing concert cloud"/>
            </a>
        </div>

        <div class="contentcard">
            <div class="flagbox">
                <div class="flagtext">
                    <p><strong>Tech Blog</strong></p>
                    <a href="https://github.com/luketeal/techblog"target="_blank">
                        <img src={githubImg}/>
                    </a>
                </div>
                <div class="flag"></div>
            </div>
            <a href="https://immense-meadow-35382.herokuapp.com/" target="_blank">
                <img 
                src={techBlogImg}
                alt="an image of a tech blogging website"/>
            </a>
        </div>

    </div>    
    </main>
  );
}
