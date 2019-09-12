import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav className="external-header-nav">
            <Link className="nav-search-button" to="/search"><i className="fa fa-search"></i></Link>
            &nbsp;&nbsp;
            <Link className="nav-about-button" to="/about">Our story</Link>
            &nbsp;&nbsp;
            <button className="sign-in-button" onClick={() => openModal('Sign in')}>Sign in</button>
            &nbsp;&nbsp;
            <button className="get-started-button" onClick={() => openModal('Sign up')}>Get started</button>
        </nav>
    );

    const loggedInHeader = () => (
        <nav className="internal-header-nav">
            <Link className="nav-search-button" to="/search"><i className="fa fa-search"></i></Link>
            &nbsp;&nbsp;
            <Link className="nav-item" id="nav-notifications-button" to="/notifications"><i className="fa fa-bell"></i></Link>
            &nbsp;&nbsp;
            <button className="nav-item" id="nav-logout-button" onClick={logout}>Sign out</button>
            &nbsp;&nbsp;
            <Link className="nav-username" to="">{currentUser.username}</Link>    
        </nav>
    );

    let headerDisplay;
    headerDisplay = currentUser ? loggedInHeader() : sessionLinks();

    return (
        <header>
                <Link className="wordmark" to="/">Materia</Link>
                {headerDisplay}
        </header>
    );
};

export default Header;