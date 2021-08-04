import React from 'react';
import githubImg from './assets/images/GitHub-Mark-Light-32px.png';
import linkedinImg from './assets/images/linkedin-32.png';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header className="header-wrap">
      <h1 className="name">
        <a href="#home" onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
            Luke Teal
        </a>
      </h1>
      <nav className="nav-links">
        <div className="nav-div">
        <a href="#about" onClick={() => handlePageChange('Home')}
          // Check to see if the currentPage is `About`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Home' ? 'flex-column nav-link active' : 'flex-column nav-link'}><strong>About</strong></a>
        <a href="#work" onClick={() => handlePageChange('Blog')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Blog' ? 'flex-column nav-link active' : 'flex-column nav-link'}><strong>Work</strong></a>
        <a href="#contact" onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'flex-column nav-link active' : 'flex-column nav-link'}><strong>Get in touch</strong></a>
        </div>
        <div className="nav-div">
          <a href="./Assets/downloadable/tealResume.pdf" download target="_blank" className="flex-column"><strong>Resume</strong></a>
          <a href="https://github.com/luketeal" download target="_blank" className="flex-column">
            <img src={githubImg}/>
          </a>
          <a href="https://linkedin.com/in/luke-teal-48408a45" download target="_blank" className="flex-column">
            <img src={linkedinImg}/>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavTabs;
