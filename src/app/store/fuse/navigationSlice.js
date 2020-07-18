import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import navigationConfig from 'app/fuse-configs/navigationConfig';
import FuseUtils from '@fuse/utils';

const navigationAdapter = createEntityAdapter();
const emptyInitialState = navigationAdapter.getInitialState();
const initialState = navigationAdapter.upsertMany(emptyInitialState, navigationConfig);

export const appendNavigationItem = (item, parentId) => (dispatch, getState) => {
	const navigation = selectNavigation(getState());

	return dispatch(setNavigation(FuseUtils.appendNavItem(navigation, item, parentId)));
};

export const prependNavigationItem = (item, parentId) => (dispatch, getState) => {
	const navigation = selectNavigation(getState());

	return dispatch(setNavigation(FuseUtils.prependNavItem(navigation, item, parentId)));
};

export const updateNavigationItem = (id, item) => (dispatch, getState) => {
	const navigation = selectNavigation(getState());

	return dispatch(setNavigation(FuseUtils.updateNavItem(navigation, id, item)));
};

export const removeNavigationItem = id => (dispatch, getState) => {
	const navigation = selectNavigation(getState());

	return dispatch(setNavigation(FuseUtils.removeNavItem(navigation, id)));
};

export const {
	selectAll: selectNavigation,
	selectIds: selectNavigationIds,
	selectById: selectNavigationItemById
} = navigationAdapter.getSelectors(state => state.fuse.navigation);

const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		setNavigation: navigationAdapter.setAll,
		resetNavigation: (state, action) => initialState
	}
});

export const { setNavigation, resetNavigation } = navigationSlice.actions;

export default navigationSlice.reducer;
