import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import axios from 'axios';
import FuseUtils from '@fuse/utils';
import { updateTask, addTask, removeTask } from 'app/main/apps/tasks/store/taskSlice';
import { showMessage } from 'app/store/fuse/messageSlice';

export const getTasks = createAsyncThunk(
  'tasksApp/tasks/getTasks',
  async (params, { getState }) => {
    const response = await axios.get('/api/tasks');

    const data = await response.data;

    return { data };
  }
);

export const reorderList = createAsyncThunk(
  'tasksApp/tasks/reorder',
  async ({ startIndex, endIndex }, { dispatch, getState }) => {
    const response = await axios.post('/api/tasks/reorder', { startIndex, endIndex });

    const data = await response.data;

    dispatch(
      showMessage({
        message: 'List Order Saved',
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      })
    );

    return data;
  }
);

const tasksAdapter = createEntityAdapter({});

export const { selectAll: selectTasks, selectById: selectTasksById } = tasksAdapter.getSelectors(
  (state) => state.tasksApp.tasks
);

const selectSearchText = ({ tasksApp }) => tasksApp.tasks.searchText;

export const selectFilteredTasks = createSelector(
  [selectTasks, selectSearchText],
  (tasks, searchText) => {
    if (searchText.length === 0) {
      return tasks;
    }
    return FuseUtils.filterArrayByString(tasks, searchText);
  }
);

export const selectRemainingTasks = createSelector([selectTasks], (tasks) => {
  return tasks.filter((item) => item.type === 'task' && item.completed).length;
});

const tasksSlice = createSlice({
  name: 'tasksApp/tasks',
  initialState: tasksAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setTasksSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [reorderList.fulfilled]: tasksAdapter.setAll,
    [updateTask.fulfilled]: tasksAdapter.upsertOne,
    [addTask.fulfilled]: tasksAdapter.addOne,
    [removeTask.fulfilled]: (state, action) => tasksAdapter.removeOne(state, action.payload),
    [getTasks.fulfilled]: (state, action) => {
      const { data, routeParams } = action.payload;
      tasksAdapter.setAll(state, data);
      state.searchText = '';
    },
  },
});

export const { setTasksSearchText } = tasksSlice.actions;

export default tasksSlice.reducer;
