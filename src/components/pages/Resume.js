import React from 'react';
import resume from '../assets/downloadable/tealResume.pdf';

const dot = String.fromCharCode(183)

export default function Resume() {
  return (
    <main className="resumecontentwrap">
        <article id="resume" className="topmargin resumecontentwrap">

                <p className="slogan">Skills</p>
                <br/>
                <ul >
                    <li className="aboutcontent resumelist">HTML {dot} CSS {dot} JavaScript</li>
                    <li className="aboutcontent resumelist">Sequel {dot} Mongo {dot} GraphQL</li>
                    <li className="aboutcontent resumelist">React {dot} Handlebars {dot} JQuery</li>
                    <li className="aboutcontent resumelist">Bootstrap {dot} Bulma {dot} DayJS</li>
                    <li className="aboutcontent resumelist">Sequelize {dot} Passport {dot} Mongoose</li>
                    <li className="aboutcontent resumelist">Express {dot} Heroku {dot} Apollo</li>
                </ul>
                <a href={resume} download target="_blank" className="resumedownload"><strong>Resume</strong></a>
        </article>
    </main>
  );
}
