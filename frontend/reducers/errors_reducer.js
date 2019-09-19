import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
// import essayErrorsReducer from './essay_errors_reducer';   //  Got rid of this...

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    // essays: essayErrorsReducer,   //  Here, too...
});

export default errorsReducer;