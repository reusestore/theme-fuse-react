import * as Actions from '../actions';

const initialState = null;

const cardReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.OPEN_CARD_DIALOG:
        {
            return {
                ...action.payload
            };
        }
        case Actions.REMOVE_CARD:
        {
            return null;
        }
        case Actions.CLOSE_CARD_DIALOG:
        {
            return null;
        }
        default:
            return state;
    }
};

export default cardReducer;
