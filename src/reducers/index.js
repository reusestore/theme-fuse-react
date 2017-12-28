import {combineReducers} from 'redux';
import mailApp from '../main/content/apps/mail/store/reducers';

const rootReducer = combineReducers({
    mailApp
});

export default rootReducer;