import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveSingleUser = user => ({
  type: RECEIVE_SINGLE_USER,
  user: user,
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users: users,
});

export const fetchUser = id => dispatch => (
  UserApiUtil.fetchUser(id)
    .then(user => dispatch(receiveSingleUser(user)))
);

export const fetchUsers = filters => dispatch => (
  UserApiUtil.fetchUsers(filters)
    .then(users => dispatch(receiveUsers(users)))
);