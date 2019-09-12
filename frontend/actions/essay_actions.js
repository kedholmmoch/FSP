import * as EssayApiUtil from '../util/essay_api_util';

export const RECEIVE_ESSAYS = 'RECEIVE_ESSAYS';
export const RECEIVE_SINGLE_ESSAY = 'RECEIVE_SINGLE_ESSAY';
export const REMOVE_ESSAY = 'REMOVE_ESSAY';
export const RECEIVE_ESSAY_ERRORS = 'RECEIVE_ESSAY_ERRORS';


const receiveEssays = essays => ({
    type: RECEIVE_ESSAYS,
    essays: essays,
});

const receiveSingleEssay = essay => ({
    type: RECEIVE_SINGLE_ESSAY,
    essay: essay,
});

const removeEssay = essay => ({
    type: REMOVE_ESSAY,
    essayId: essay.id,
});

const receiveEssayErrors = errors => ({
    type: RECEIVE_ESSAY_ERRORS,
    errors: errors,
});


export const fetchEssays = () => dispatch => (
    EssayApiUtil.fetchEssays()
        .then(essays => dispatch(receiveEssays(essays)),
            err => dispatch(receiveEssayErrors(err.responseJSON))
    )
);

export const fetchEssay = id => dispatch => (
    EssayApiUtil.fetchEssay(id)
        .then(essay => dispatch(receiveSingleEssay(essay)),
            err => dispatch(receiveEssayErrors(err.responseJSON))
    )
);

export const postEssay = essay => dispatch => (
    EssayApiUtil.postEssay(essay)
        .then(essay => dispatch(receiveSingleEssay(essay)),
            err => dispatch(receiveEssayErrors(err.responseJSON))
    )
);

export const updateEssay = essay => dispatch => (
    EssayApiUtil.updateEssay(essay)
        .then(essay => dispatch(receiveSingleEssay(essay)),
            err => dispatch(receiveEssayErrors(err.responseJSON))
    )
);

export const deleteEssay = id => dispatch => (
    EssayApiUtil.deleteEssay(id)
        .then(essay => dispatch(removeEssay(essay)),
            err => dispatch(receiveEssayErrors(err.responseJSON))
    )
);