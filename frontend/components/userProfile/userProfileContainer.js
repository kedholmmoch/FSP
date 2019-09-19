import { connect } from 'react-redux';

import UserProfile from './userProfile';
import { fetchUser } from '../../actions/user_actions';
import { fetchEssays } from '../../actions/essay_actions';

const mapStateToProps = (state, ownProps) => {

  let userId = ownProps.match.params.userId
  let user = state.entities.users[userId];
  let essays = state.entities.essays

  return {
    user: user,
    essays: essays,
  };
};

const mapDispatchToProps = dispatch => {

  return {
    fetchUser: id => dispatch(fetchUser(id)),
    fetchEssays: filters => dispatch(fetchEssays(filters)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);