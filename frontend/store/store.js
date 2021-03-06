import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger'; // comment out before pushing to Heroku
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(thunk))  // Actually most important to remove it from here
);

export default configureStore;