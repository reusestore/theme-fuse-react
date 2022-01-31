import withReducer from 'app/store/withReducer';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import MailDetails from './mail/MailDetails';
import MailToolbar from './mail/MailToolbar';
import MailboxAppHeader from './MailboxAppHeader';
import MailboxAppSidebarContent from './MailboxAppSidebarContent';
import MailboxAppSidebarHeader from './MailboxAppSidebarHeader';
import MailList from './mails/MailList';
import MailsToolbar from './mails/MailsToolbar';
import reducer from './store';
import { getFilters } from './store/filtersSlice';
import { getFolders } from './store/foldersSlice';
import { getLabels } from './store/labelsSlice';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-rightSidebar': {
    flex: '1',
  },
  '& .FusePageSimple-contentWrapper': {
    [theme.breakpoints.up('lg')]: {
      maxWidth: 360,
    },
  },
}));

function MailboxApp(props) {
  const dispatch = useDispatch();

  const pageLayout = useRef(null);
  const routeParams = useParams();

  useEffect(() => {
    dispatch(getFilters());
    dispatch(getFolders());
    dispatch(getLabels());
  }, [dispatch]);

  return (
    <Root
      content={<MailList />}
      leftSidebarContent={<MailboxAppSidebarContent />}
      leftSidebarOpen
      scroll="content"
      rightSidebarContent={<Outlet />}
      rightSidebarOpen
    />
  );
}

export default withReducer('mailboxApp', reducer)(MailboxApp);
