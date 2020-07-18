import { configureStore } from '@reduxjs/toolkit';
import createReducer from './rootReducer';

if (process.env.NODE_ENV === 'development' && module.hot) {
	module.hot.accept('./rootReducer', () => {
		const newRootReducer = require('./rootReducer').default;
		store.replaceReducer(newRootReducer.createReducer());
	});
}

const store = configureStore({
	reducer: createReducer(),
	middleware: getDefaultMiddleware => {
		if (process.env.NODE_ENV === 'development') {
			const { logger } = require(`redux-logger`);

			return getDefaultMiddleware().concat(logger);
		}

		return getDefaultMiddleware();
	},
	devTools: process.env.NODE_ENV === 'development'
});

store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
	if (store.asyncReducers[key]) {
		return false;
	}
	store.asyncReducers[key] = reducer;
	store.replaceReducer(createReducer(store.asyncReducers));
	return store;
};

export default store;
