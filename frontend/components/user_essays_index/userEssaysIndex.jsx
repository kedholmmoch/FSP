import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class UserEssaysIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: true,
    }
  }

  componentDidMount() {
    this.props.fetchEssays({
      user_id: this.props.currentUser.id,
      filter: this.props.pageFilter
    }).then(() => this.setState({ isFetching: false }))
  }

  render() {

    const { currentUser, essays, pageFilter } = this.props;

    let essaysList;

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
                <Link to="/essays/new">Write a story</Link>
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
          <div>
            <h2>This is the Essays List!</h2>
            {essaysList}
            <h2>This is the end of the Essays List!</h2>
          </div>
        </section>
      </div>
    );
  }
}

export default UserEssaysIndex;