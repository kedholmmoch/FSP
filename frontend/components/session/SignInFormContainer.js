import { connect } from 'react-redux';

import SessionForm from './sessionForm';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => {

    let errors = state.errors.session;
    return {
        errors: errors,
        formType: 'Sign in',
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);