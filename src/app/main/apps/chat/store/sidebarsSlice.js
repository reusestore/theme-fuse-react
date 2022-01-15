import { createSlice } from '@reduxjs/toolkit';

const sidebarsSlice = createSlice({
  name: 'chatApp/sidebars',
  initialState: {
    mainSidebarOpen: false,
    userSidebarOpen: false,
    contactSidebarOpen: false,
  },
  reducers: {
    openMainSidebar: (state, action) => {
      state.mainSidebarOpen = true;
    },
    closeMainSidebar: (state, action) => {
      state.mainSidebarOpen = false;
    },
    openUserSidebar: (state, action) => {
      state.userSidebarOpen = true;
    },
    closeUserSidebar: (state, action) => {
      state.userSidebarOpen = false;
    },
    openContactSidebar: (state, action) => {
      state.contactSidebarOpen = true;
    },
    closeContactSidebar: (state, action) => {
      state.contactSidebarOpen = false;
    },
  },
});

export const {
  openMainSidebar,
  closeMainSidebar,
  openUserSidebar,
  closeUserSidebar,
  openContactSidebar,
  closeContactSidebar,
} = sidebarsSlice.actions;

export const selectMainSidebarOpen = ({ chatApp }) => chatApp.sidebars.mainSidebarOpen;
export const selectUserSidebarOpen = ({ chatApp }) => chatApp.sidebars.userSidebarOpen;
export const selectContactSidebarOpen = ({ chatApp }) => chatApp.sidebars.contactSidebarOpen;

export default sidebarsSlice.reducer;
