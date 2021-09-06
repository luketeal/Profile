import React from 'react';
import githubImg from './assets/images/GitHub-Mark-32px.png';
import linkedinImg from './assets/images/linkedin-3-32.png';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer({ currentPage, handlePageChange }) {
  return (
    <footer id="getintouch" className="row-wrap footercontent">
        {/* <ul className="footercontent"> */}
          <a href="https://github.com/luketeal" download target="_blank" className="flex-column">
            <img src={githubImg}/>
          </a>
          <a href="https://linkedin.com/in/luke-teal-48408a45" download target="_blank" className="flex-column">
            <img src={linkedinImg}/>
          </a>
          <a href="mailto:l.teal21@gmail.com?subject=Contact Luke Teal" className="flex-column">
            l.teal21@gmail.com
          </a>
        {/* </ul> */}
    </footer>
  );
}

export default Footer;
