import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	state: null,
	options: {
		anchorOrigin: {
			vertical: 'top',
			horizontal: 'center'
		},
		autoHideDuration: 6000,
		message: 'Hi',
		variant: null
	}
};
const messageSlice = createSlice({
	name: 'message',
	initialState,
	reducers: {
		hideMessage: (state, action) => {
			state.state = true;
			state.options = {
				...initialState.options,
				...action.payload
			};
		},
		showMessage: (state, action) => {
			state.state = null;
		}
	}
});

export const { hideMessage, showMessage } = messageSlice.actions;

export default messageSlice.reducer;
