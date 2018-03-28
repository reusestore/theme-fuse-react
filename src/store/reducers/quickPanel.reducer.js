import * as Actions from '../actions/quickPanel.actions';

const initialState = {
    state: true,
    data : null
};

const quickPanel = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_QUICK_PANEL_DATA:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.TOGGLE_QUICK_PANEL:
        {
            return {
                ...state,
                state: action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default quickPanel;