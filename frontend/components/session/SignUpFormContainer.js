import { connect } from 'react-redux';

import SessionForm from './sessionForm';
import { signup } from '../../actions/session_actions';

const mapStateToProps = state => {

    let errors = state.errors.session;
    return {
        errors: errors,
        formType: 'Sign up',
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);