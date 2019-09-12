import { connect } from 'react-redux';

import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './sessionForm';

// for demo user
import { login } from '../../actions/session_actions';
// end demo user

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
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        loginUser: (user) => dispatch(login(user)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);