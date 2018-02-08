import * as Actions from '../actions';
import _ from 'lodash';
import FuseDefaultSettings from '../../core/FuseDefaultSettings';

const initialState = {...FuseDefaultSettings};

/*function immutableMerge(){
    if(arguments.length === 0) return {};
    if(arguments.length === 1) return arguments[0];
    if(arguments.length === 2) {
        return _.merge(_.cloneDeep(arguments[0]), arguments[1]);
    }
    else{
        return immutableMerge(_.first(arguments), immutableMerge(_.rest(arguments)));
    }
};*/

const settings = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SET_SETTINGS:
        {
            return _.merge({}, state, action.value);
        }
        default:
        {
            return state;
        }
    }
};

export default settings;