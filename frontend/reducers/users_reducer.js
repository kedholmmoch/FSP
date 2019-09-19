import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SINGLE_USER, RECEIVE_USERS } from '../actions/user_actions';

const usersReducers = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = Object.assign(
        {}, 
        state, 
        {[action.currentUser.id]: action.currentUser}
      );
      return newState;
    case RECEIVE_SINGLE_USER:
      newState = Object.assign(
        {},
        state,
        { [action.user.id]: action.user }
      );
      return newState;
    case RECEIVE_USERS:
      newState = Object.assign(
        {},
        state,
        action.users
      );
      return newState;
    default:
      return state;
  }
};

export default usersReducers;