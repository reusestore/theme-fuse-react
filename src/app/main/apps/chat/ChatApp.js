import { styled, useTheme } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import withReducer from 'app/store/withReducer';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import FusePageSimple from '@fuse/core/FusePageSimple/FusePageSimple';
import MainSidebar from './sidebars/main/MainSidebar';
import ContactSidebar from './sidebars/contact/ContactSidebar';
import reducer from './store';
import { getUserData } from './store/userSlice';
import { getContacts } from './store/contactsSlice';
import {
  closeMainSidebar,
  closeContactSidebar,
  closeUserSidebar,
  selectMainSidebarOpen,
  selectContactSidebarOpen,
  selectUserSidebarOpen,
} from './store/sidebarsSlice';

import UserSidebar from './sidebars/user/UserSidebar';
import { getChats } from './store/chatsSlice';

const drawerWidth = 400;

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-content': {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 100%',
    height: '100%',
  },
}));

const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    maxWidth: '100%',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
}));

function ChatApp(props) {
  const dispatch = useDispatch();
  const pageLayout = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const MainSidebarOpen = useSelector(selectMainSidebarOpen);
  const userSidebarOpen = useSelector(selectUserSidebarOpen);
  const contactSidebarOpen = useSelector(selectContactSidebarOpen);

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getContacts());
    dispatch(getChats());
  }, [dispatch]);

  return (
    <>
      <Root
        content={<Outlet pageLayout={pageLayout} />}
        ref={pageLayout}
        leftSidebarContent={<MainSidebar pageLayout={pageLayout} />}
        leftSidebarOpen={isMobile ? MainSidebarOpen : true}
        leftSidebarOnClose={() => {
          dispatch(closeMainSidebar());
        }}
        leftSidebarWidth={400}
        rightSidebarContent={<ContactSidebar pageLayout={pageLayout} />}
        rightSidebarOpen={contactSidebarOpen}
        rightSidebarOnClose={() => {
          dispatch(closeContactSidebar());
        }}
        rightSidebarWidth={400}
        scroll="content"
      />
      <StyledSwipeableDrawer
        className="h-full absolute z-30"
        variant="temporary"
        anchor="left"
        open={userSidebarOpen}
        onOpen={(ev) => {}}
        onClose={() => dispatch(closeUserSidebar())}
        classes={{
          paper: 'absolute left-0',
        }}
        style={{ position: 'absolute' }}
        ModalProps={{
          keepMounted: false,
          disablePortal: true,
          BackdropProps: {
            classes: {
              root: 'absolute',
            },
          },
        }}
      >
        <UserSidebar />
      </StyledSwipeableDrawer>
    </>
  );
}

export default withReducer('chatApp', reducer)(ChatApp);
