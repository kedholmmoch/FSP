import React from 'react'

import FeedSubheader from './feedSubheader';
import FeaturedEssaysIndex from './featuredEssaysIndex';
import FeedScroll from './feedScroll';
import FeedSidebar from './feedSidebar';

class Feed extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isFetching: true,
		}
	}

	componentDidMount() {
		this.props.fetchEssays({filter: "published" })
			.then(() => this.setState({ isFetching: false }))
	}

	render() {

		let { isFetching } = this.state;
		const {essays} = this.props;

		return (
			<div>
				{ isFetching ? <div className="main-content"/> : (
					<div className="main-content">
						<FeedSubheader />
						<FeaturedEssaysIndex essays={essays} />
						<div className="feed-lower-content">
							<FeedScroll essays={essays}/>
							<FeedSidebar essays={essays}/>
						</div>					
					</div>
				)}
			</div>
		);
	}
}

export default Feed;