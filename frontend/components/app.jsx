import React from 'react';

import {
    HashRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';

import Modal from './modal/modal';
import HeaderContainer from './header/header_container';

import { AuthRoute } from '../util/route_util';
import SignInFormContainer from './session/SignInFormContainer';
import SignUpFormContainer from './session/SignUpFormContainer';


const App = () => (
    <div>
        <Modal />
        <HeaderContainer />

        {/* <AuthRoute path="/signup" component={SignUpFormContainer}/>
        <AuthRoute path="/login" component={SignInFormContainer}/> */}
        
    </div>
);

export default App;