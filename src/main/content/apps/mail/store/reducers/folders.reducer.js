import * as Actions from '../actions';

const foldersReducer = function (state = [], action) {
    switch ( action.type )
    {
        case Actions.GET_FOLDERS:
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    }
};

export default foldersReducer;