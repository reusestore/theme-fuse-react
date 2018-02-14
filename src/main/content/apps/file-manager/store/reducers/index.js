import {combineReducers} from 'redux';
import files from './files.reducer';
import selectedItem from './selectedItem.reducer';

const fileManagerAppReducers = combineReducers({
    files,
    selectedItem
});

export default fileManagerAppReducers;