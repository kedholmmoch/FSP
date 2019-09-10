import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import SignUpFormContainer from '../../components/session/SignUpFormContainer';
import SignInFormContainer from '../../components/session/SignInFormContainer';

function Modal ({ modal, closeModal}) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'Sign up':
            component = <SignUpFormContainer />;
            break;
        case 'Sign in':
            component = <SignInFormContainer />;
            break;
        default:
            return null;
    }

    return(
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal,
    };
};

const mapDispatchToprops = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToprops)(Modal);