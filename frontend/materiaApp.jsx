// React
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//testing

import * as EssayApiUtil from './util/essay_api_util';

// import {
//    fetchEssay,
//    fetchEssays,
//    postEssay,
//    updateEssay,
//    deleteEssay
// } from './actions/essay_actions';

//testing end


document.addEventListener('DOMContentLoaded', () => {
  
  let store;

  if (window.currentUser) {

    const preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: { id: window.currentUser.id }
    };

    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  // testing start

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // window.fetchEssay = fetchEssay;
  // window.fetchEssays = fetchEssays;
  // window.postEssay = postEssay;
  // window.updateEssay = updateEssay;
  // window.deleteEssay = deleteEssay;

  // testing end
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});