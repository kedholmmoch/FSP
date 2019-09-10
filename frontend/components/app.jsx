import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';

import HeaderContainer from './header/header_container';
import SignInFormContainer from './session/SignInFormContainer';
import SignUpFormContainer from './session/SignUpFormContainer';


const App = () => (
    <div>
        <HeaderContainer />
        <Route path="/signup" component={SignUpFormContainer}/>
        <Route path="/login" component={SignInFormContainer}/>
    </div>
);

export default App;