import React from 'react';
import { Link } from 'react-router-dom';

const FeedSubheader = () => {

    const subheaderElements = [
        ["HUMAN PARTS", "/"],
        ["SELF", "/"],
        ["CULTURE", "/"],
        ["WRITING", "/"],
        ["HEATED", "/"],
        ["CREATIVITY", "/"],
        ["HEALTH", "/"],
        ["ART", "/"],
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
        <div className="feed-subheader-list-container">
            <ul className="feed-subheader-list">
                <li key="link-home" className="subheader-home">
                    <Link to="/">HOME</Link>
                </li>
                {subheaderLinks}
            </ul>
        </div>
    );  
};

export default FeedSubheader;