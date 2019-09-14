import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class FeaturedEssaysIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFetching: true,
        };
    }

    componentDidMount() {
        
        this.props.fetchEssays({filter: "featured"})
            .then(() => this.setState({ isFetching: false }))
    }

    render() {

        const { isFetching } = this.state;

         // let featured = this.props.essays;

        // if (featured === undefined) {
        //     this.setState({ isFetching: true })
        // }

        // if (!this.state.isFetching) {

        console.log(moment().format());
        
        let featured = this.props.essays;
        // console.log(featured);

        // let featuredOne = featured[0];
        // console.log(featuredOne);
            
        let featureOne = featured[0];
        // console.log(featureOne);
        let featureTwo = featured[1];
        let featureList = featured.slice(2, 5);

        function mainFeatureDisplay(essay) {
            const datetime = moment(essay["published_at"]).format("MMM Do");

            return(
            <div>
                <Link to={`/essays/${essay.id}`}><img src={essay.image_url} alt={essay.title} /></Link>
                <Link to={`/essays/${essay.id}`}>{essay.title}</Link>
                <Link to={`/essays/${essay.id}`}>{essay.summary}</Link>
                <Link to={`/users/${essay.user_id}`}></Link>
                <h4>{datetime} &nbsp;&nbsp;&nbsp;&nbsp; 5 min read </h4>
            </div>
            );
        };

        const linksMiniList = (
            <ul className="featured-mini-list">
                <li>Mini</li>
                <li>List</li>
            </ul>
        );
            
            return(
                <div>
                { isFetching ? <div></div> : (
                <div className="featured-essays-container">
                    <ul className="featured-essays-list-wide">
                        <article className="first-feature">{mainFeatureDisplay(featureOne)}</article>
                        {linksMiniList}
                        <article className="second-feature">{mainFeatureDisplay(featureTwo)}</article>
                    </ul>
                    <h6>Featured Essays Index</h6>
                </div>
                )}
                </div>     
            )
        }
    };

export default FeaturedEssaysIndex;