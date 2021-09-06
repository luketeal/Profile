import React from 'react';
import paddockImg from '../assets/images/paddock.png';
import concertCloudImg from '../assets/images/concertcloud.png';
import techBlogImg from '../assets/images/techblog.gif';
import codeQuizImg from '../assets/images/codequiz.png';
import budgetTrackerImg from '../assets/images/PWAbudgetTracker.gif';
import workoutTrackerImg from '../assets/images/workoutTracker.gif';
import ContentCard from './components/Contentcard';

export default function Work() {

  return (
    <main id="work" className="topmargin row-wrap">
        <div className="workcontent">
            <ContentCard 
                name='Paddock' 
                repo='https://github.com/luketeal/projectAwesome' 
                url='https://pddck.herokuapp.com/' 
                Img={paddockImg} 
                alt='an image of a website showing Paddock'
            />
            <ContentCard 
                name='Tech Blog' 
                repo='https://github.com/luketeal/techblog' 
                url='https://allabouttek.herokuapp.com/' 
                Img={techBlogImg} 
                alt='an image of a tech blogging website'
            />
            <ContentCard 
                name='Code Quiz' 
                repo='https://github.com/luketeal/projectAwesome' 
                url='https://luketeal.github.io/Code-Quiz/' 
                Img={codeQuizImg} 
                alt='an image of a Javascript quiz'
            />
            <ContentCard 
                name='Budget Tracker' 
                repo='https://github.com/luketeal/PWAbudgetTracker' 
                url='https://sheltered-castle-78350.herokuapp.com/' 
                Img={budgetTrackerImg} 
                alt='an image of a website showing a budget tracker application'
            />
            <ContentCard 
                name='Workout Tracker' 
                repo='https://github.com/luketeal/workoutTracker' 
                url='https://arcane-coast-95311.herokuapp.com/' 
                Img={workoutTrackerImg} 
                alt='an image of a website showing a workout tracker'
            />
            <ContentCard 
                name='Concert Cloud' 
                repo='https://github.com/luketeal/concertcloud' 
                url='https://luketeal.github.io/concertcloud/' 
                Img={concertCloudImg} 
                alt='an image of a website showing concert cloud'
            />
        </div>    
    </main>
  );
}
