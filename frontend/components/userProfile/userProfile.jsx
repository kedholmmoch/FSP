import React from 'react';
import moment from 'moment';

import { EssayIndexItem } from './essay_index_item';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: true,
      essays: {},
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
      .then(() => this.props.fetchEssays({
        filter: "published",
        user_id: this.props.match.params.userId,
      }))
      .then(() => this.setState({
        isFetching: false,
        essays: this.props.essays,
      }))
  }

  render() {

    if (this.state.isFetching) {
      return null;
    }

    const { user } = this.props;
    const joinedOn = moment(user['joined_on']).format('MMMM YYYY');

    let essays = Object.values(this.state.essays);

    console.log(essays);

    let featured = [];
    let remaining = [];

    essays.forEach(essay => {
      if (essay['featured']) {
        featured.push(essay)
      } else {
        remaining.push(essay)
      }
    });

    const essaysList = (essayArray) => (
      <ul>
        {
          essayArray.map((essay, idx) => (
            <li key={`essay-${essay.id}-${idx}`}>
              <EssayIndexItem essay={essay}
                author={user}/>
            </li>
          ))
        }
      </ul>
    )

    return (
      <div className="user-profile-outer">
        <div className="essay-article-topblank"></div>
        <div className="user-profile-container">
          <div className="user-profile-feature">
            <div className="user-profile-text">
              <div className="user-profile-name">
                <h1 id="user-profile-name">{user.profile_name}</h1>
                <button className="followButton">Follow</button>
              </div>
              <div className="user-profile-blurb">
                <p id="user-profile-blurb">{user.profile_blurb}</p>
              </div>
              <span className="profile-blurb-post-box">
                <div className="profile-blurb-post">
                  Materia member since {joinedOn}</div>
              </span>
              {/* ### Following . twitter link */}
            </div>
            <div className="user-profile-picture">
              <img src={user.image_url} alt={user.profile_name}/>
            </div>
          </div>

          {/* <nav> Profile  Claps  Highlights  Replies </nav> */}

          <div className="user-content-display-box">
            { (featured.length < 1) ? null :
            <div>
              <h4 className="profile-essay-index-label">Featured</h4>
              {essaysList(featured)}
            </div>
            }
            <br/>
            { (remaining.length < 1) ? null :
            <div>
              <h4 className="profile-essay-index-label">Recent</h4>
              {essaysList(remaining)}
            </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;