import { connect } from 'react-redux';

import Feed from './feed';
import { fetchEssays } from '../../actions/essay_actions';

const mapStateToProps = state => {

  const indexEssays = Object.values(state.entities.essays);
  
  return {
    essays: indexEssays,
  };
};

const mapDispatchToProps = dispatch => {

  return {
    fetchEssays: filters => dispatch(fetchEssays(filters)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);