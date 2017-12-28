import {combineReducers} from 'redux';
import mailApp from '../../main/content/apps/mail/store/reducers/index';

const rootReducer = combineReducers({
    mailApp
});

export default rootReducer;