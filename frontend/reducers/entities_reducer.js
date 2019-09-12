import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import essaysReducer from './essays_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    essays: essaysReducer,
});

export default entitiesReducer;

