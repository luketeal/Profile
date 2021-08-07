import React from 'react';
import resume from '../assets/downloadable/tealResume.pdf';

const dot = String.fromCharCode(183)

export default function Resume() {
  return (
    <main className="resumecontentwrap">
        <article id="resume" className="topmargin resumecontentwrap">

                <p class="slogan">Skills</p>
                <br/>
                <ul >
                    <li class="aboutcontent resumelist">HTML {dot} CSS {dot} JavaScript</li>
                    <li class="aboutcontent resumelist">Sequel {dot} Mongo {dot} GraphQL</li>
                    <li class="aboutcontent resumelist">React {dot} Handlebars {dot} JQuery</li>
                    <li class="aboutcontent resumelist">Bootstrap {dot} Bulma {dot} DayJS</li>
                    <li class="aboutcontent resumelist">Sequelize {dot} Passport {dot} Mongoose</li>
                    <li class="aboutcontent resumelist">Express {dot} Heroku {dot} Apollo</li>
                </ul>
                <a href={resume} download target="_blank" class="resumedownload"><strong>Resume</strong></a>
        </article>
    </main>
  );
}
