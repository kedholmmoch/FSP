import React from 'react';

import {
  HashRouter,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal/modal';
import HeaderContainer from './header/header_container';
import FeedContainer from './feed/feedContainer';
import UserEssaysIndexContainer
    from './user_essays_index/userEssaysIndexContainer';
import UserProfileContainer from './userProfile/userProfileContainer';
import NewEssayFormContainer 
    from './user_essays_index/new_essay_form_container';
import EditEssayFormContainer 
    from './user_essays_index/edit_essay_form_container';
import EssayShowContainer from './essay_show/essay_show_container';


// import SignInFormContainer from './session/SignInFormContainer';
// import SignUpFormContainer from './session/SignUpFormContainer';


const App = () => (
  <div className="page-content">
    <Modal />
    <HeaderContainer />
    <Switch>
      <ProtectedRoute exact path="/users/:userId/essays"   // User drafts/essays
        component={UserEssaysIndexContainer} />
      <Route exact path="/users/:userId"                   // User profile
        component={UserProfileContainer} />
      <ProtectedRoute exact path="/essays/:essayId/edit"   // Edit Essay Form
        component={EditEssayFormContainer} />
      <ProtectedRoute exact path="/essays/new"             // New Essay Form
        component={NewEssayFormContainer} />             
      <Route exact path="/essays/:essayId"                  // Essay show page
        component={EssayShowContainer}/>
      <Route path="/" component={FeedContainer} />       { /* Home/Feed Page*/ }
    </Switch>
  </div>
);

export default App;