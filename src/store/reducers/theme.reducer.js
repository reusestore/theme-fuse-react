import * as Actions from '../actions';

const initialState = {
    selectedTheme: 'dark'
};

const theme = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SET_THEME:
            return {
                ...state,
                selectedTheme: action.value
            };
        default:
            return state;
    }
};

export default theme;