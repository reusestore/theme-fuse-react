import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLists = createAsyncThunk('scrumboardApp/lists/getLists', async (boardId) => {
  const response = await axios.get(`/api/scrumboard/boards/${boardId}/lists`);
  const data = await response.data;

  return data;
});

const listsAdapter = createEntityAdapter({});

export const { selectAll: selectLists, selectById: selectListById } = listsAdapter.getSelectors(
  (state) => state.scrumboardApp.lists
);

const listsSlice = createSlice({
  name: 'scrumboardApp/lists',
  initialState: listsAdapter.getInitialState({}),
  reducers: {
    resetLists: (state, action) => {},
  },
  extraReducers: {
    [getLists.fulfilled]: listsAdapter.setAll,
  },
});

export const { resetLists } = listsSlice.actions;

export default listsSlice.reducer;
