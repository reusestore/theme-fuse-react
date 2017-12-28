import * as Actions from '../actions';

const mailsReducer = function (state = [], action) {
    switch ( action.type )
    {
        case Actions.GET_MAILS:
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    }
};

export default mailsReducer;