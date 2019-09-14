import React from 'react';

class FeedScroll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // isFetching: true,
    };
  }

  // componentDidMount() {
  //   this.props.fetchEssays({filter: "unpublished"})
  //     .then(() => this.setState({ isFetching: false }))
  // }
  
  render() {
    // const { isFetching } = this.state; 
    
    const { essays } = this.props;

    function checkFilter(essayObj) {
      return (essayObj["featured"] === false);
    }

    const suggested = essays.filter(checkFilter);

    const titles = suggested.map((essayObj, idx) => (
      <li key={`title-${idx+1}`}>
        <h2>{essayObj["title"]}</h2>
      </li>
    ))

    return(
      // <div>
      //   {isFetching ? <div className="feed-scroll-container"/> : (
          <div className="feed-scroll-container">
            Feed Scroll Component!
            <ul>
              {titles}
            </ul>
          </div>
      //   )}
      // </div>
    )
  }
}

export default FeedScroll;