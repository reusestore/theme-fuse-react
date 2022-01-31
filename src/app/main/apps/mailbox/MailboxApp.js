import withReducer from 'app/store/withReducer';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Outlet } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import useMediaQuery from '@mui/material/useMediaQuery';
import MailboxAppSidebarContent from './MailboxAppSidebarContent';
import reducer from './store';
import { getFilters } from './store/filtersSlice';
import { getFolders } from './store/foldersSlice';
import { getLabels } from './store/labelsSlice';
import Mails from './mails/Mails';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-rightSidebar': {
    flex: '1',
    [theme.breakpoints.down('lg')]: {
      minWidth: '100%',
    },
  },
  '& .FusePageSimple-contentWrapper': {
    [theme.breakpoints.up('lg')]: {
      maxWidth: 400,
    },
  },
}));

function MailboxApp(props) {
  const dispatch = useDispatch();
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const pageLayout = useRef(null);
  const routeParams = useParams();
  const { mailId } = routeParams;

  useEffect(() => {
    dispatch(getFilters());
    dispatch(getFolders());
    dispatch(getLabels());
  }, [dispatch]);

  useEffect(() => {
    setRightSidebarOpen(Boolean(mailId));
  }, [mailId]);

  return (
    <Root
      content={<Mails />}
      leftSidebarContent={<MailboxAppSidebarContent />}
      leftSidebarOpen={isMobile ? leftSidebarOpen : true}
      leftSidebarWidth={288}
      scroll="content"
      rightSidebarContent={<Outlet />}
      rightSidebarOpen={isMobile ? rightSidebarOpen : true}
    />
  );
}

export default withReducer('mailboxApp', reducer)(MailboxApp);
