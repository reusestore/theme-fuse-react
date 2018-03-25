import * as Actions from '../../actions/fuse/index';
import _ from 'lodash';
import {FuseDefaultSettings} from '@fuse/index';

const initialState = {...FuseDefaultSettings};

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