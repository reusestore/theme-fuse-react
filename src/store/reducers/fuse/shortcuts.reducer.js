import * as Actions from '../../actions/fuse/index';

const initialState = [];

const settings = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_SHORTCUTS:
        {
            return action.payload;
        }
        case Actions.TOGGLE_IN_SHORTCUTS:
        {
            return action.payload;
        }
        default:
        {
            return state;
        }
    }
};

export default settings;