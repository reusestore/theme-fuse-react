import { combineReducers } from 'redux';
import board from './boardSlice';
import boards from './boardsSlice';
import card from './cardSlice';

const scrumboardAppReducers = combineReducers({
	boards,
	board,
	card
});

export default scrumboardAppReducers;
