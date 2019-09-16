import { connect } from 'react-redux';

import UserEssaysIndex from './userEssaysIndex';
import { fetchEssays } from '../../actions/essay_actions';

const mapStateToProps = state => {

  const userEssays = Object.values(state.entities.essays);
  const users = state.entities.users;
  const session = state.session;

  return {
    currentUser: users[session.id],
    essays: userEssays,
    pageFilter: "unpublished",
  };
};

const mapDispatchToProps = dispatch => {

  return {
    fetchEssays: (filters) => dispatch(fetchEssays(filters)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEssaysIndex);