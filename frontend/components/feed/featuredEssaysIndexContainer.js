import { connect } from 'react-redux';

import FeaturedEssaysIndex from './featuredEssaysIndex';
import { fetchEssays } from '../../actions/essay_actions';

const mapStateToProps = state => {

    const essays = Object.values(state.entities.essays)
    
    return {
        essays: essays,
    };
};

const mapDispatchToProps = dispatch => {

    return {
        fetchEssays: filters => dispatch(fetchEssays(filters))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedEssaysIndex);