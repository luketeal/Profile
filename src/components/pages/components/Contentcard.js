import React from 'react';
import githubImg from '../../assets/images/GitHub-Mark-Light-32px.png';

function ContentCard(props) {
    return(
        <div class="contentcard">
            <div class="flagbox">
                <div class="flagtext">
                    <p><strong>{props.name}</strong></p>
                    <a href={props.repo} target="_blank">
                        <img src={githubImg}/>
                    </a>
                </div>
                <div class="flag"></div>
            </div>
            <a href={props.url} target="_blank">
                <img 
                src={props.Img}
                alt={props.alt}/>
            </a>
        </div>
    )
}

export default ContentCard;