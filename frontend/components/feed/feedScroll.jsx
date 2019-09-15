import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class FeedScroll extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    
    const { essays } = this.props;

    function checkFilter(essayObj) {
      return (essayObj["featured"] === false);
    }

    const suggested = essays.filter(checkFilter);

    const SCROLL_HEADER_MSGS =[
      "BASED ON YOUR READING HISTORY",
      "SUGGESTED TOPIC",
    ]

    function randScrollHeaderMsg() {
      let msgIdx = Math.floor(Math.random() * SCROLL_HEADER_MSGS.length);
      return SCROLL_HEADER_MSGS[msgIdx];
    }

    const scrollItems = suggested.map((essay, idx) => {
      const datetime = moment(essay["published_at"]).format("MMM Do");
      const minutesToRead = essay["minutes_to_read"];

      return(
        <li className="scroll-item" key={`scroll-item-${idx+1}`}>
          <div className="scroll-item-info">
            <span className="scroll-item-msg">{randScrollHeaderMsg()}</span>
            <Link className="scroll-item-title" to={`/essays/${essay.id}`}>
              {essay.title}</Link>
            <Link className="scroll-item-summary" to={`/essays/${essay.id}`}>
              {essay.summary}</Link>
            <div className="scroll-item-sub-container">
              <div className="scroll-item-sub-info">
                <Link className="scroll-item-auth"
                  to={`/users/${essay.user_id}`}>
                  {essay.author}</Link>
                <span className="scroll-item-date">{datetime}
                  &nbsp;&nbsp;&#183;&nbsp;&nbsp;
                    {minutesToRead} min read </span>
              </div>
              <div className="icon-div">
                <button>
                  <i className="far fa-bookmark"></i></button>
              </div>
              <div className="icon-div">
                <button>
                  <i className="fas fa-ellipsis-h"></i></button>
              </div>
            </div>
          </div>

          <Link className="scroll-item-img" to={`/essays/${essay.id}`}>
            <img src={essay.image_url} alt={essay.title} /></Link>
        </li>
      )
    })

    return(
      <div className="feed-scroll-container">
        <ul className="feed-scroll-list">
          {scrollItems}
        </ul>
      </div>
    )
  }
}

export default FeedScroll;