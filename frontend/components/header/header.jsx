import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav className="external-header-nav">
            <Link to="/search">Search</Link>
            &nbsp;&nbsp;
            <Link to="/about">About</Link>
            &nbsp;&nbsp;
            {/* <Link to="/login">Sign in</Link> */}
            <button onClick={() => openModal('Sign in')}>Sign in</button>
            &nbsp;&nbsp;
            {/* <Link to="/signup">Get started</Link> */}
            <button onClick={() => openModal('Sign up')}>Get started</button>
        </nav>
    );

    const loggedInHeader = () => (
        <nav className="internal-header-nav">
            <Link className="nav-item" to="/search">Search</Link>
            &nbsp;&nbsp;
            <Link className="nav-item" to="/notifications">Notifications</Link>
            &nbsp;&nbsp;
            <Link to="">{currentUser.username}</Link>
            &nbsp;&nbsp;
            <span className="nav-item"><button onClick={logout}>Sign out</button></span>
        </nav>
    );

    let headerDisplay;
    headerDisplay = currentUser ? loggedInHeader() : sessionLinks();

    return (
        <header>
                <Link to="/">Materia</Link>
                {headerDisplay}
        </header>
    );
};

export default Header;