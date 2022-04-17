import { combineReducers } from '@reduxjs/toolkit';
import user from './userSlice';

const authReducers = combineReducers({
  user,
});

export default authReducers;
