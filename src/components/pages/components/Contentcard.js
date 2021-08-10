import React from 'react';
import githubImg from '../../assets/images/GitHub-Mark-Light-32px.png';

function ContentCard(props) {
    return(
        <div className="contentcard">
            <div className="flagbox">
                <div className="flagtext">
                    <p><strong>{props.name}</strong></p>
                    <a href={props.repo} target="_blank">
                        <img src={githubImg}/>
                    </a>
                </div>
                <div className="flag"></div>
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