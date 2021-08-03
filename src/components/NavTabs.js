import React from 'react';
import githubImg from './assets/images/GitHub-Mark-Light-32px.png';
import linkedinImg from './assets/images/linkedin-32.png';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header class="header-wrap">
      <h1 class="name"><a href="#home">Luke Teal</a></h1>
      <nav class="nav-links">
        <div class="nav-div">
        <a href="#about" class="flex-column"><strong>About</strong></a>
        <a href="#work" class="flex-column"><strong>Work</strong></a>
        <a href="#getintouch" class="flex-column"><strong>Get in touch</strong></a>
        </div>
        <div class="nav-div">
          <a href="./Assets/downloadable/tealResume.pdf" download target="_blank" class="flex-column"><strong>Resume</strong></a>
          <a href="https://github.com/luketeal" download target="_blank" class="flex-column">
            <img src={githubImg}/>
          </a>
          <a href="https://linkedin.com/in/luke-teal-48408a45" download target="_blank" class="flex-column">
            <img src={linkedinImg}/>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavTabs;
