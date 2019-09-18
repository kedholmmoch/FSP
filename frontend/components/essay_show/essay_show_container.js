import { connect } from 'react-redux';
import EssayShow from './essay_show';

import { fetchEssay } from '../../actions/essay_actions';

const mapStateToProps = (state, ownProps) => {

  let essayId = ownProps.match.params.essayId;
  let essay = state.entities.essays[essayId];

  return {
    essay: essay,
  };
};

const mapDispatchToProps = dispatch => {

  return {
    fetchEssay: id => dispatch(fetchEssay(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EssayShow);