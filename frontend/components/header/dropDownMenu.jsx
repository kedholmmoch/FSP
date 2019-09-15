import React from 'react';
import { Link } from 'react-router-dom';

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { currentUser, initials, signOutFromDropDown } = this.props;

    return(
      <div>
        { currentUser ? (
          <ul>
            <li className="dd-user">
              <div id="dd-user-img">
                {initials}
              </div>
              <div className="dd-user-text">
                <Link id="dd-user-name" to={`/users/${currentUser.id}`}>
                  {currentUser.profile_name}</Link>
                <Link id="dd-user-username"to={`/users/${currentUser.id}`}>
                  @{currentUser.username}</Link>
              </div></li>
            <li className="dd-link"><Link className="dd-link-about" 
                to="/about">About Materia</Link></li>
            <li className="dd-separator"></li>
            <li className="dd-link"><Link className="dd-link-text" 
                to="/essays/new">New Essay</Link></li>
            <li className="dd-link"><Link className="dd-link-text" 
                to={`/users/${currentUser.id}/essays`}>Essays</Link></li>
            <li className="dd-link"><Link className="dd-link-text" 
                to={`/users/${currentUser.id}/bookmarks`}>Bookmarks</Link></li>
            <li className="dd-separator"></li>
            <li className="dd-link"><Link className="dd-link-text" 
                to={`/users/${currentUser.id}`}>Profile</Link></li>
            <li className="dd-link"><Link className="dd-link-text" 
                to="">Settings</Link></li>
            <li className="dd-link"><Link className="dd-link-text" 
                to="">Help</Link></li>
            <li className="dd-link">
              <button onClick={signOutFromDropDown}>Sign Out</button></li>
          </ul>) : (nil) 
        }
      </div>
    )
  }
}

export default DropDownMenu;