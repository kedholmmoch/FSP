import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {

    return (
      <div className="user-profile-outer">
        <div className="essay-article-topblank"></div>
        <div className="user-profile-container">
          <div className ="user-profile-feature">
            User Profile!
          </div>
          <div className="user-content-display-box">

          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;