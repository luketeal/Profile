import React from 'react';

export default function Contact() {
  return (
    <main id="getintouch" class="topmargin row-wrap bottommargin">
        {/* <div class="titlecard flex-column">
            <h2>Contact Info</h2>
        </div> */}
        <ul class="footercontent">
            <li>l.teal21@gmail.com</li>
            <li>508.873.5448</li>
            <li>Dover <span>{String.fromCharCode(183)}</span> NH</li>
        </ul>
    </main>
  );
}
