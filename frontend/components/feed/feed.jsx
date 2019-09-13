import React from 'react'
import FeedSubheader from './feedSubheader';

class Feed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        // const subheaderLinks = ["HOME", "HUMAN PARTS", "SELF", "ART", "CULTURE", 
        //         "WRITING", "HEATED", "CREATIVITY", "HEALTH", "PRODUCTIVITY", 
        //         "HUMOR", "TECHNOLOGY", "MORE"].map((link, idx) => (
        //            <li key={`link-${idx}`}> {link} </li>
        //         ));
        
        // // const subheaderLinks = topicLinks.map((link, idx) => (
        // //     <li></li>
        // // ))

        
        return (
            <div className="main-content">
                <FeedSubheader />
                <h2>This is the feed.</h2>
            </div>
        );
    }
}

export default Feed;