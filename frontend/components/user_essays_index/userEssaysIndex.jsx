import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import moment from 'moment';

class UserEssaysIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: true,
      essays: this.props.essays,
    }
  }

  componentDidMount() {
    this.props.fetchEssays({
      user_id: this.props.currentUser.id,
      filter: this.props.pageFilter
    }).then(() => {
      this.setState({ 
        essays: this.props.essays,
        isFetching: false })
    })
  }

  render() {

    if (this.state.isFetching) {
      return null;
    }

    const { currentUser } = this.props;
    let { essays } = this.state;

    function compareUpdated(essayA, essayB) {
      let dateA = Date.parse(essayA.updated_at_string);
      let dateB = Date.parse(essayB.updated_at_string);
      return dateB - dateA;
    }

    let sortedEssays = essays.sort(compareUpdated)

    let essaysList = sortedEssays.map((essay, idx) => {
      
      let lastEdited = moment(essay["updated_at"]).fromNow();
      let minutesToRead = essay["minutes_to_read"];
      let wordCount = essay["word_count"];

      return (
        <li key={`user${currentUser.id}-essay${idx}`}>
          <div className="user-essay-index-item-super">
            <h3><Link to={`/users/${currentUser.id}/essays/${essay.id}/edit`}>
              {essay.title}</Link></h3>
            <div className="user-essay-index-preview-box">
              <p className="index-essay-preview">
                <Link to={`/users/${currentUser.id}/essays/${essay.id}/edit`}>
                  {essay.preview}</Link>
              </p>
            </div>
          </div>
          <div className="user-essay-index-item-sub">
            <div className="user-essay-index-item-info">
              <span className="user-essay-edit-count"> Last edited {lastEdited} {
                (wordCount === 0) ? <span></span> : 
                  <span>
                    &nbsp; &#183; &nbsp;
                    {minutesToRead} minute read ({wordCount} words) so far
                  </span>
                }
              </span>
            </div> 
            <div className="user-essay-index-item-options">
              <button><i className="fas fa-chevron-down"></i></button>
            </div>
          </div>
        </li>
        )
      }
    );

    return (
      <div className="user-essay-index">
        <div className="user-index-topblank"></div>
        <section className="user-index-main">
          <div className="user-index-header">
            <div className="user-index-title">
              <h1>Your stories</h1>
            </div>
            <div className="user-index-header-buttons">
              {/* <div> Import a story </div>*/}
              <div className="user-index-new-story">
                <Link to={`/users/${currentUser.id}/essays/new`}>Write a story</Link>
              </div>
            </div>
          </div>
          <div className="user-index-nav-box">
            <nav className="user-index-nav">
              <ul>
                <li>
                  <NavLink to={`/users/${currentUser.id}/essays/drafts`}
                    activeClassName="user-index-tab">Drafts</NavLink>
                </li>
                <li>
                  <NavLink to={`/users/${currentUser.id}/essays/public`}
                    activeClassName="user-index-tab">Published</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="user-essays-list-container">
            <ul>
            {essaysList}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default UserEssaysIndex;