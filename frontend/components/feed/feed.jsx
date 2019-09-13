import React from 'react'

import FeedSubheader from './feedSubheader';
import FeaturedEssaysIndexContainer from './featuredEssaysIndexContainer';

class Feed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div className="main-content">
                <FeedSubheader /*className="feed-subheader"*/ />
                <FeaturedEssaysIndexContainer />
                <h6>This is the feed.</h6>
            </div>
        );
    }
}

export default Feed;