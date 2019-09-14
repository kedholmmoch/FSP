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
                
            </div>
        );
    }
}

export default Feed;