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
import UserDraftsContainer
    from './user_essays_index/userDraftsContainer';
import UserPublishedContainer from './user_essays_index/userPublishedContainer';

import CreateEssayFormContainer from './user_essays_index/create_essay_form_container';
import UpdateEssayFormContainer from './user_essays_index/update_essay_form_container';

import EssayShowContainer from './essay_show/essay_show_container';
import UserProfileContainer from './userProfile/userProfileContainer';

const App = () => (
  <div className="page-content">
    <Modal />
    <HeaderContainer />
    <Switch>
      <ProtectedRoute exact path="/users/:userId/essays/public"  // User essays
        component={UserPublishedContainer} />
      <ProtectedRoute path="/users/:userId/essays/drafts"  // User drafts
        component={UserDraftsContainer} />
      <Route exact path="/users/:userId"                        // User profile
        component={UserProfileContainer} />
      <ProtectedRoute exact path="/users/:userId/essays/new"                // New Essay Form
        component={CreateEssayFormContainer} />  
      <ProtectedRoute exact path="/users/:userId/essays/:essayId/edit"     // Edit Essay Form
        component={UpdateEssayFormContainer} />           
      <Route exact path="/essays/:essayId"                   // Essay show page
        component={EssayShowContainer}/>
      <Route path="/" component={FeedContainer} />       { /* Home/Feed Page*/ }
    </Switch>
  </div>
);

export default App;