import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from '@lodash';

export const getLabels = createAsyncThunk('calendarApp/labels/getLabels', async () => {
  const response = await axios.get('/api/calendar/labels');
  const data = await response.data;

  return data;
});

export const addLabel = createAsyncThunk(
  'calendarApp/labels/addLabel',
  async (newLabel, { dispatch }) => {
    const response = await axios.post('/api/calendar/labels', newLabel);
    const data = await response.data;

    return data;
  }
);

export const updateLabel = createAsyncThunk(
  'calendarApp/labels/updateLabel',
  async (label, { dispatch }) => {
    const response = await axios.put(`/api/calendar/labels/${label.id}`, label);
    const data = await response.data;

    return data;
  }
);

export const removeLabel = createAsyncThunk(
  'calendarApp/labels/removeLabel',
  async (labelId, { dispatch }) => {
    const response = await axios.delete(`/api/calendar/labels/${labelId}`);
    const data = await response.data;

    return data;
  }
);

const labelsAdapter = createEntityAdapter({});

export const {
  selectAll: selectLabels,
  selectIds: selectLabelIds,
  selectById: selectLabelById,
} = labelsAdapter.getSelectors((state) => state.calendarApp.labels);

const labelsSlice = createSlice({
  name: 'calendarApp/labels',
  initialState: labelsAdapter.getInitialState({
    selectedLabels: [],
  }),
  reducers: {
    toggleSelectedLabels: (state, action) => {
      state.selectedLabels = _.xor(state.selectedLabels, [action.payload]);
    },
  },
  extraReducers: {
    [getLabels.fulfilled]: (state, action) => {
      labelsAdapter.setAll(state, action.payload);
      state.selectedLabels = action.payload.map((item) => item.id);
    },
    [addLabel.fulfilled]: labelsAdapter.addOne,
    [updateLabel.fulfilled]: labelsAdapter.upsertOne,
    [removeLabel.fulfilled]: labelsAdapter.removeOne,
  },
});

export const selectSelectedLabels = ({ calendarApp }) => calendarApp.labels.selectedLabels;

export const { toggleSelectedLabels } = labelsSlice.actions;

export default labelsSlice.reducer;
