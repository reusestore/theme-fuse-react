import * as Actions from '../actions';
import {navigation as navigationData} from '../../navigation/navigation';

const initialState = navigationData;

const navigation = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_NAVIGATION:
            return {
                ...state
            };
        case Actions.SET_NAVIGATION:
            console.info('Set navigation Reducer');

            return {
                ...state,
                ...action.navigation
            };
        case Actions.RESET_NAVIGATION:
            console.info('Reset navigation Reducer');

            return {
                ...initialState
            };
        default:
            return state;
    }
};

export default navigation;