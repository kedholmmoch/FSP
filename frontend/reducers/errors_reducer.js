import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import essayErrorsReducer from './essay_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    essays: essayErrorsReducer,
});

export default errorsReducer;