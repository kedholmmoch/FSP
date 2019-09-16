import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import DropDownMenu from './dropDownMenu';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
    }

    this.showDropdown = this.showDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.signOutFromDropDown = this.signOutFromDropDown.bind(this);
    this.redirectFromDropDown = this.redirectFromDropDown.bind(this);
  }

  showDropdown(e) {
    e.preventDefault();
    this.setState({
      showDropdown: true,
    }, () => {
      document.addEventListener('click', this.closeDropdown);
    });
  }

  closeDropdown() {
    if (!this.dropdownDOMel.contains(event.target)) {
      this.setState({
        showDropdown: false,
      }, () => {
        document.removeEventListener('click', this.closeDropdown);
      });
    }
  }

  signOutFromDropDown() {
    this.setState({
      showDropdown: false,
    }, () => {
      document.removeEventListener('click', this.closeDropdown);
    });
    this.props.logout();
  }

  redirectFromDropDown(linkPath) {
    this.setState({
      showDropdown: false,
    }, () => {
      document.removeEventListener('click', this.closeDropdown);
    });
    this.props.history.push(linkPath);
  }

  render() {

    const { currentUser, logout, openModal } = this.props;
    
    const avatarLink = (user) => {
      let fullName = user.profile_name;
      let nameArray = fullName.split(" ");
      let first = nameArray[0];
      let last = nameArray[nameArray.length - 1];

      return first[0] + last[0];
    };

    let dropdownMenu;
    dropdownMenu = (this.state.showDropdown === false) ? null : (
      <div className="dropdown"
        ref={(element) => {
          this.dropdownDOMel = element;
        }}
      >
        <DropDownMenu currentUser={currentUser} 
          logout={logout}
          signOutFromDropDown={this.signOutFromDropDown}
          redirectFromDropDown={this.redirectFromDropDown}
          initials={avatarLink(currentUser)}
        />
      </div>
    );

    const sessionLinks = () => (
      <nav className="external-header-nav">
        <Link id="nav-search-button" to="/search"><i className="fa fa-search"></i></Link>
        <Link className="nav-about-button" to="/about">Our story</Link>
        <button className="sign-in-button" onClick={() => openModal('Sign in')}>Sign in</button>
        <button className="get-started-button" onClick={() => openModal('Sign up')}>Get started</button>
      </nav>
    );

    const loggedInHeader = () => {

      return (
        <nav className="internal-header-nav">
          <Link className="nav-item" id="nav-search-button-internal" to="/search"><i className="fa fa-search"></i></Link>
          <Link className="nav-item" id="nav-notifications-button" to="/notifications"><i className="fa fa-bell"></i></Link>
          <button className="nav-item" id="nav-logout-button" onClick={logout}>Sign out</button>
          <div className="nav-username">
            <button onClick={this.showDropdown}>
              {avatarLink(currentUser)}
            </button>
            <div className="dropdown-background">{dropdownMenu}</div>
          </div>   
        </nav>
      )
    };

    let headerDisplay;
    headerDisplay = currentUser ? loggedInHeader() : sessionLinks();

    return (
      <header>
        <Link className="wordmark" to="/">Materia</Link>
        {headerDisplay}
      </header>
    )
  };
};

export default withRouter(Header);