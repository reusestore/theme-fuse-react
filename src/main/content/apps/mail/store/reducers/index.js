import {combineReducers} from 'redux';
import mails from './mails.reducer';
import folders from './folders.reducer';
import labels from './labels.reducer';
import filters from './filters.reducer';

const mailAppReducers = combineReducers({
    mails,
    folders,
    labels,
    filters
});

export default mailAppReducers;