import {combineReducers} from 'redux';
import contacts from './contacts.reducer';
import user from './user.reducer';

const contactsAppReducers = combineReducers({
    contacts,
    user
});

export default contactsAppReducers;