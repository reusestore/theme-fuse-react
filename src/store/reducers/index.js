import {combineReducers} from 'redux';
import mailApp from '../../main/content/apps/mail/store/reducers/index';
import navigation from './navigation.reducer';

const rootReducer = combineReducers({
    mailApp,
    navigation
});

export default rootReducer;