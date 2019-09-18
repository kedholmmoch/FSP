import { connect } from 'react-redux';

import EssayForm from './essay_form';
import { postEssay } from '../../actions/essay_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.entities.users[state.session.id],
    essay: { title: '', body: ''},
    formType: 'Save essay',
    isFetching: false,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    action: essay => dispatch(postEssay(essay)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EssayForm);