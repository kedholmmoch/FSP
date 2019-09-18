import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class EssayShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.essay;
  }

  componentDidMount(){
    this.props.fetchEssay(this.props.match.params.essayId);
  }

  render(){

    const {essay} = this.props;

    if (!essay) {
      return null
    }

    const datetime = moment(essay["published_at"]).format("MMM Do");
    const minutesToRead = essay["minutes_to_read"];
    const profile_img = (essay.author_img) ? essay.author_img : "" ;

    return(
      <div className="essay-article-container">
        <div className="essay-article-topblank"></div>
        <div className="essay-article">
          <div className="article-title-super">
            <h1 className="article-title">{essay.title}</h1>
            <h2 className="article-summary">{essay.summary}</h2>
            <div className="article-title-sub">
              <div className="article-sub-photo">
                <Link to={`/users/${essay.user_id}`}>
                  <img src={profile_img} alt={essay.author}/>
                </Link>
              </div>
              <div className="article-sub-info">
                <span><Link className="article-sub-auth" 
                  to={`/users/${essay.user_id}`}>{essay.author}</Link>
                  &nbsp;&nbsp;&nbsp; <button className="followButton">
                    Follow</button></span>
                <span className="article-sub-date">{datetime}
                  &nbsp;&nbsp;&#183;&nbsp;&nbsp;
                {minutesToRead} min read </span>
              </div>
            </div>
          </div>
          <div className="article-image-container">
            <figure className="article-image-figure">
              { (essay.image_url) ? 
                <img src={essay.image_url} alt={essay.author}/> :
                null 
              }
            </figure>
          </div>
          <div className="article-body">
            <section>{essay.body}</section>
          </div>
        </div>

        <div className="essay-post-article">
          <div className="essay-post-container">
            <div className="article-tag-bar"></div>
            <div className="article-plaudits-bar"></div>
            <div className="article-end-info">
              <div className="article-author-end-feature">
                <div className="end-feature-container">
                  <div className="end-feature-photo">
                    <Link to={`/users/${essay.user_id}`}>
                      <img src={profile_img} alt={essay.author} />
                    </Link>
                  </div>
                  <div className="end-feature-info">
                    <div className="end-feature-auth-name">
                      <h5 id="written-by">WRITTEN BY</h5>
                      <div className="end-info-author">
                        <Link className="end-author-full-name"
                          to={`/users/${essay.user_id}`}>{essay.author}</Link>
                        <button className="followButton2">Follow</button>
                      </div>
                    </div>
                    <span className="essay-author-blurb">{essay.author_blurb}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="article-reply-bar">
              <div className="open-replies-div">
                <button className="essay-replies-button">
                  See responses {/*  lists number of replies  */}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="essay-article-footer">
          <div className="essay-footer-content">
            <div className="essay-footer-text">
              <Link className="wordmark-footer" to="/">Materia</Link>
              <div className="footer-right-nav">
                <h6 className="footer-nav-link">About</h6>
                <h6 className="footer-nav-link">Help</h6>
                <h6 className="footer-nav-link">Legal</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EssayShow;