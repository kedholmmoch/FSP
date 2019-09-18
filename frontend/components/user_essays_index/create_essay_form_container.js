import { connect } from 'react-redux';

import EssayForm from './essay_form';
import { postEssay } from '../../actions/essay_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    essay: { title: '', body: ''},
    formType: 'Save Essay',
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    action: essay => dispatch(postEssay(essay)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EssayForm);