import { connect } from 'react-redux';

import UserEssaysIndex from './userEssaysIndex';
import { fetchEssays, deleteEssay } from '../../actions/essay_actions';

const mapStateToProps = state => {

  const userEssays = Object.values(state.entities.essays);
  const users = state.entities.users;
  const session = state.session;

  return {
    currentUser: users[session.id],
    essays: userEssays,
    pageFilter: "published",
  };
};

const mapDispatchToProps = dispatch => {

  return {
    fetchEssays: (filters) => dispatch(fetchEssays(filters)),
    deleteEssay: id => dispatch(deleteEssay(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEssaysIndex);