import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showMessage } from 'app/store/fuse/messageSlice';

export const getMail = createAsyncThunk('mailboxApp/mail/getMail', async (routeParams) => {
  let url = '/api/mailbox/mails/';
  if (routeParams.folderHandle) {
    url += `${routeParams.folderHandle}/${routeParams.mailId}`;
  }

  if (routeParams.labelHandle) {
    url += `labels/${routeParams.labelHandle}/${routeParams.mailId}`;
  }

  if (routeParams.filterHandle) {
    url += `filters/${routeParams.filterHandle}/${routeParams.mailId}`;
  }

  console.info(routeParams)

  console.info(url)
  const response = await axios.get(url);

  const data = await response.data;

  return data;
});

export const updateMail = createAsyncThunk(
  'mailboxApp/mail/updateMail',
  async (_data, { getState, dispatch }) => {
    const { id } = getState().mailboxApp.mail;

    const response = await axios.post('/api/mail-app/update-mail', { id, ..._data });
    const data = await response.data;

    dispatch(showMessage({ message: 'Mail Saved' }));

    return data;
  }
);

const mailSlice = createSlice({
  name: 'mailboxApp/mail',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getMail.fulfilled]: (state, action) => action.payload,
    [updateMail.fulfilled]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export default mailSlice.reducer;
