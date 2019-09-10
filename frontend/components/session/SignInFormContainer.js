import { connect } from 'react-redux';
// import React from 'react';

import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './sessionForm';

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
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);