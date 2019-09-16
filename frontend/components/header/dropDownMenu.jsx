import React from 'react';
import { Link } from 'react-router-dom';

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick(linkPath) {
    this.props.redirectFromDropDown(linkPath);
  }

  render() {

    const { 
      currentUser, 
      initials, 
      signOutFromDropDown,
      // redirectFromDropDown 
    } = this.props;

    return(
      <div>
        { currentUser ? (
          <ul>
            <li className="dd-user">
              <div id="dd-user-img">
                {initials}
              </div>
              <div className="dd-user-text">
                <button id="dd-user-username" 
                  onClick={() => this.handleLinkClick(`/users/${currentUser.id}`)}>
                  {currentUser.profile_name}</button>
                <button id="dd-user-username" 
                  onClick={() => this.handleLinkClick(`/users/${currentUser.id}`)}>
                  @{currentUser.username}</button>
              </div></li>
            <li className="dd-link">
              <button className="dd-link-about"
                onClick={() => this.handleLinkClick('/about')}>
                About Materia</button></li>
                
            <li className="dd-separator"></li>
            <li className="dd-link">
              <button className="dd-link-text" 
                onClick={() => this.handleLinkClick('/essays/new')}>
                New Essay </button></li>
            <li className="dd-link">
              <button className="dd-link-text"
                onClick={()=>this.handleLinkClick(`/users/${currentUser.id}/essays`)}>
                Essays</button></li>
            <li className="dd-link">
              <button className="dd-link-text" 
                onClick={() => this.handleLinkClick(`/users/${currentUser.id}/bookmarks`)}> 
                Bookmarks</button></li>

            <li className="dd-separator"></li>
            <li className="dd-link">
              <button className="dd-link-text"
                onClick={() => this.handleLinkClick(`/users/${currentUser.id}`)}>
                Profile</button></li>
            <li className="dd-link">
              <button className="dd-link-text" 
                onClick={() => this.handleLinkClick('/')}>Settings</button></li> 
            <li className="dd-link">
              <button className="dd-link-text" 
                onClick={() => this.handleLinkClick('/')}>Help</button></li>
            <li className="dd-link">
              <button onClick={signOutFromDropDown}>Sign Out</button></li>
          </ul>) : (nil) 
        }
      </div>
    )
  }
}

export default DropDownMenu;