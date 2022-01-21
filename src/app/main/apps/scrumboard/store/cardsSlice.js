import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import history from '@history';
import BoardModel from '../model/BoardModel';

export const getCards = createAsyncThunk('scrumboardApp/cards/getCards', async (boardId) => {
  const response = await axios.get(`/api/scrumboard/boards/${boardId}/cards`);
  const data = await response.data;

  return data;
});

export const newBoard = createAsyncThunk(
  'scrumboardApp/cards/newBoard',
  async (board, { dispatch }) => {
    const response = await axios.post('/api/scrumboard/cards', {
      board: board || BoardModel(),
    });
    const data = await response.data;

    history.push({
      pathname: `/apps/scrumboard/cards/${data.id}/${data.handle}`,
    });

    return data;
  }
);

const cardsAdapter = createEntityAdapter({});

export const { selectAll: selectCards, selectById: selectCardById } = cardsAdapter.getSelectors(
  (state) => state.scrumboardApp.cards
);

const cardsSlice = createSlice({
  name: 'scrumboardApp/cards',
  initialState: cardsAdapter.getInitialState({}),
  reducers: {
    resetCards: (state, action) => {},
  },
  extraReducers: {
    [getCards.fulfilled]: cardsAdapter.setAll,
  },
});

export const { resetCards } = cardsSlice.actions;

export default cardsSlice.reducer;
