import React from 'react';
import { Link } from 'react-router-dom';

const FeedSubheader = () => {

    const subheaderElements = [
        ["HOME", "/"],
        ["HUMAN PARTS", "/"],
        ["SELF", "/"],
        ["ART", "/"],
        ["CULTURE", "/"],
        ["WRITING", "/"],
        ["HEATED", "/"],
        ["CREATIVITY", "/"],
        ["HEALTH", "/"],
        ["PRODUCTIVITY", "/"],
        ["HUMOR", "/"],
        ["TECHNOLOGY", "/"],
        ["MORE", "/"]
    ];

    const subheaderLinks = subheaderElements.map((link, idx) => {
        let topic = link[0];
        let topicLink = link[1];
        return (
            <li key={`link-${idx}`} className="subheader-link">
                <Link to={topicLink}>{topic}</Link>
            </li>
        );
    });

    return (
        <div id="feed-subheader">
            <ul id="feed-subheader-list">
                {subheaderLinks}
            </ul>
        </div>
    );  
};

export default FeedSubheader;