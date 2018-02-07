import * as Actions from '../actions';

const initialState = {};

const theme = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SET_SETTINGS:
            return {
                ...state,
                ...action.value
            };
        default:
            return state;
    }
};

export default theme;