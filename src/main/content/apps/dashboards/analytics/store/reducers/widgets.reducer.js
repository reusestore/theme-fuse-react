import * as Actions from '../actions';
import _ from 'lodash';

const initialState = {
    data                  : null,
    widget1SelectedDataSet: '2017',
    widget5SelectedDataSet: 'today'
};

const widgetsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_WIDGETS:
            return {
                ...state,
                data: {...action.payload}
            };
        case Actions.SET_WIDGET1_DATASET:
            return _.merge({},
                state,
                {widget1SelectedDataSet: action.payload}
            );
        case Actions.SET_WIDGET5_DATASET:
            return _.merge({},
                state,
                {widget5SelectedDataSet: action.payload});
        default:
            return state;
    }
};

export default widgetsReducer;