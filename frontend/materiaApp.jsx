// React
import React from 'react';
import ReactDOM from 'react-dom';

//testing

import {
    postUser,
    postSession,
    deleteSession
} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    
    // testing start

    window.postUser = postUser;
    window.postSession = postSession;
    window.deleteSession = deleteSession;

    // testing end
    
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Materia</h1>, root);
});