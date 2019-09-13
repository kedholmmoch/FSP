import React from 'react';

class FeaturedEssaysIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        
        const linksMiniList = (
            <ul className="featured-mini-list">
                <li>Mini</li>
                <li>List</li>
            </ul>
        );
        
        return(
            <div className="featured-essays-container">
                <ul className="featured-essays-list-wide">
                    <article className="first-feature">First Feature</article>
                    {linksMiniList}
                    <article className="second-feature">Second Feature</article>
                </ul>
                <h6>Featured Essays Index</h6>
            </div>     
        )
    };
}

export default FeaturedEssaysIndex;