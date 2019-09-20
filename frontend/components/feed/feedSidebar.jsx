import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

// const FeedSidebar = () => {}

class FeedSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      essays: this.props.essays,
    }
  }

  render() {

    // Need to change to published_at

    // function compareUpdated(essayA, essayB) {
    //   let dateA = Date.parse(essayA.updated_at_string);
    //   let dateB = Date.parse(essayB.updated_at_string);
    //   return dateB - dateA;
    // }

    // const recents = this.props.essays.sort(compareUpdated).take(3).map

    let essays = this.props.essays;

    if ( essays === undefined ) {
      return null
    }

    function compareUpdated(essayA, essayB) {
      let dateA = Date.parse(essayA.published_at_string);
      let dateB = Date.parse(essayB.published_at_string);
      return dateB - dateA;
    }

    let sortedEssays = essays.sort(compareUpdated);

    const recents = sortedEssays.slice(0, 3).map((essay, idx) => {
    // const recents = this.props.essays.slice(0, 3).map((essay, idx) => {
      const datetime = moment(essay["published_at"]).format("MMM Do");
      const minutesToRead = essay["minutes_to_read"];

      return (
        <li key={`essay-${idx}`}>

          { essay.image_url ? (
          <Link to={`/essays/${essay.id}`}>
            <img className="recent-item-img" 
                src={essay.image_url} alt={essay.title} />
          </Link>
          ) : ( <div className="empty-essay-img"></div> )
          }
          
          <div className="recent-item-info">
            <Link className="recent-item-title" to={`/essays/${essay.id}`}>
              {essay.title}</Link>
            <div className="recent-item-sub-info">
              <Link className="recent-item-auth"
                to={`/users/${essay.user_id}`}>
                {essay.author}</Link>
              <span className="recent-item-date">{datetime}
                &nbsp;&nbsp; &#183; &nbsp;&nbsp;
                      {minutesToRead} min read </span>
            </div>
          </div>
        </li>
      )
    });

    const recentlyPublished = () => {

      return (
        <div>
          <div className="recent-header">
            <h3 className="recent-header-text">Recently Published</h3>
            <img src="https://cdn-images-1.medium.com/proxy/1*K3oqw1Ed_6VMaql4HojuDg.png"
              alt="Recently Published"/>
          </div>
          <ol className="recents-list">
            {recents}
          </ol>
        </div>
      );
    }

    // const popularEssays;

    const FOOTER_ELEMENTS = [
      ["Help", "/"],
      ["Status", "/"],
      ["Writers", "/"],
      ["Blog", "/"],
      ["Careers", "/"],
      ["Privacy", "/"],
      ["Terms", "/"],
      ["About", "/about"]
    ]

    const footerLinks = FOOTER_ELEMENTS.map((link, idx) => {
      let text = link[0];
      let linkPath = link[1];

      return (
        <li key={text}>
          <Link className="feed-footer-link" to={linkPath}>
            {text}</Link>
        </li>
      );
    });

    return(
      <div className="feed-sidebar-container">
        {/* <div className="fixed-position-div"> */}
          <div className="feed-sidebar">
            <div className="recent-essays">{recentlyPublished()}</div>
            {/* <div className="popular-essays">{popularEssays}</div> */}
          </div>
          <footer className="feed-sidebar-footer">
            <div className="feed-footer-text">
              <ul>
                {footerLinks}
              </ul>
            </div>
          </footer>
        {/* </div> */}
      </div>
    );
  }
}

export default FeedSidebar;