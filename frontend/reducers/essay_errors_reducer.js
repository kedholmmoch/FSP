import { 
    RECEIVE_ESSAY_ERRORS
} from '../actions/essay_actions';

const essayErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ESSAY_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default essayErrorsReducer;