import {
    RECEIVE_ESSAYS,
    RECEIVE_SINGLE_ESSAY,
    REMOVE_ESSAY
} from '../actions/essay_actions';

const essaysReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_ESSAYS:
            return action.essays;
        case RECEIVE_SINGLE_ESSAY:
            newState = Object.assign(
                {}, 
                state, 
                {[action.essay.id]: action.essay}
            );
            return newState;
        case REMOVE_ESSAY:
            newState = Object.assign({}, state);
            delete newState[action.essayId];
            return newState;
        default:
            return state;
    }
};

export default essaysReducer;