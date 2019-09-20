import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export const EssayIndexItem = ({ essay, author }) => {

  const datetime = moment(essay["published_at"]).format("MMM Do");
  const minutesToRead = essay["minutes_to_read"];

  const randomPlaudits = Math.floor(Math.random() * 1000) + 2;
  const randomReplies = Math.floor(Math.random() * 20) + 1;

  return(
    <div className="essay-index-item-container-general">
      <div className="essay-index-item-content">
        <div className="essay-index-item-head">
          <Link to={`/users/${author.id}`}>
            <img className="essay-index-item-user-img"
              src={author.image_url} alt={author.profile_name} />
          </Link>
          <div className="essay-index-item-info">
            <div className="essay-index-item-sub-info">
              <Link className="essay-index-item-auth"
                to={`/users/${author.id}`}>
                {essay.author}</Link>
              <span className="essay-index-item-date">{datetime}
                &nbsp;&nbsp; &#183; &nbsp;&nbsp;
                      {minutesToRead} min read </span>
            </div>
          </div>
        </div>

        <div className="essay-index-item-body">
          { (!essay.image_url) ? null :
          <div className="essay-index-item-figure">
            <Link to={`/essays/${essay.id}`}>
              <img src={essay.image_url} />
            </Link>
          </div>
          }
          <div className="essay-index-item-title">
            <Link to={`/essays/${essay.id}`}>
              {essay.title}
            </Link>
          </div>
          <div className="essay-index-item-summary">
            <Link  to={`/essays/${essay.id}`}>
              {essay.summary}
            </Link>
          </div>
        </div>

        <div className="essay-index-item-foot">
          <div className="essay-index-item-foot-left">
            <div className="essay-index-item-plaudits-container">
              <button className="essay-index-item-plaudit">
                <i className="fas fa-thumbs-up"></i>
              </button>
              <span className="essay-index-item-plaudits-number">{randomPlaudits}</span>
            </div >
          </div>
          <div className="essay-index-item-foot-right">
            <div className="essay-index-item-replies">
              {randomReplies} Replies
            </div>
            <div className="essay-index-item-bookmark">
              <i className="far fa-bookmark" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}