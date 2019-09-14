import { connect } from 'react-redux';

import FeedScroll from './feedScroll';
import { fetchEssays } from '../../actions/essay_actions';

const mapStateToProps = state => {

  const essays = Object.values(state.entities.essays);
  return {
    essay: essays,
  };
};

const mapDispatchToProps = dispatch => {

  return {
    fetchEssays: filters => dispatch(fetchEssays(filters)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedScroll);