import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class FeaturedEssaysIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // isFetching: true,
        };
    }

    // componentDidMount() {   
    //     this.props.fetchEssays({filter: "featured"})
    //         .then(() => this.setState({ isFetching: false }))
    // }

    render() {
        // const { isFetching } = this.state;
        
        const { essays } = this.props;

        function checkFeatured(essayObj) {
          return (essayObj["featured"] === true)
        }

        let featured = essays.filter(checkFeatured)
      
        let featureOne = featured[0];
        let featureTwo = featured[1];
        let featureList = featured.slice(2, 5);

        function mainFeatureDisplay(essay) {
            const datetime = moment(essay["published_at"]).format("MMM Do");
            const minutesToRead = essay["minutes_to_read"];
            
            return(
                <div className="feat-container">
                    <Link className="feat-img" to={`/essays/${essay.id}`}>
                        <img src={essay.image_url} alt={essay.title} /></Link>
                    <div className="feat-info">
                        <div className="feat-head">
                            <Link className="feat-title" to={`/essays/${essay.id}`}>
                                {essay.title}</Link>
                            <Link className="feat-summary" to={`/essays/${essay.id}`}>
                                {essay.summary}</Link>
                        </div>
                        <div className="feat-sub-info">
                            <Link className="feat-auth" 
                                to={`/users/${essay.user_id}`}>
                                {essay.author}</Link>
                            <span className="feat-date">{datetime} 
                                &nbsp;&nbsp;&#183;&nbsp;&nbsp; 
                                {minutesToRead} min read </span>
                        </div>
                    </div>
                </div>
            );
        };

        function miniLink(essay) {
            const datetime = moment(essay["published_at"]).format("MMM Do");
            const minutesToRead = essay["minutes_to_read"];
            
            return (
                <div className="mini-link-container">
                    <Link to={`/essays/${essay.id}`}>
                        <img src={essay.image_url} alt={essay.title}/></Link>
                    <div className="minilink-essay-info">
                        <Link className="minilink-title" to={`/essays/${essay.id}`}>
                            {essay.title}</Link>
                        <div className="minilink-sub-info">
                            <Link to={`/users/${essay.user_id}`}>{essay.author}</Link>
                            <span className="feat-date">{datetime} 
                                &nbsp;&nbsp;&#183;&nbsp;&nbsp; 
                                {minutesToRead} min read 
                            </span>
                        </div>
                    </div>
                </div>
            )
        };

        const linksMiniList = (
            <ul className="featured-mini-list">
                { featureList.map((essay, idx) => (
                    <li key={`item=${idx}`}>
                        {miniLink(essay)}
                    </li>
                ))}
            </ul>
        );
            
            return(
                // <div>
                // {isFetching ? <div className="featured-essays-container"></div> : (
                    <div className="featured-essays-container">
                        <ul className="featured-essays-list-wide">
                            <article className="first-feature">{mainFeatureDisplay(featureOne)}</article>
                            {linksMiniList}
                            <article className="second-feature">{mainFeatureDisplay(featureTwo)}</article>
                        </ul>
                            <div id="all-featured-link">
                                <Link to="/essay/featured">SEE ALL FEATURED ></Link>
                            </div>
                        <div id="feature-end-padding"></div>
                    </div>
                //     )}
                // </div>     
            )
        }
    };

export default FeaturedEssaysIndex;