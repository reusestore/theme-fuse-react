import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useParams } from 'react-router-dom';
import LabelsDialog from './dialogs/labels/LabelsDialog';
import NoteDialog from './dialogs/note/NoteDialog';
import NewNote from './NewNote';
import NoteList from './NoteList';
import NotesHeader from './NotesHeader';
import NotesSidebarContent from './NotesSidebarContent';
import reducer from './store';
import { getLabels } from './store/labelsSlice';
import { getNotes } from './store/notesSlice';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
  '& .FusePageSimple-sidebar': {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
    boxShadow: 'none',
  },
  '& .FusePageSimple-leftSidebar': {
    border: '0!important',
  },
}));

function NotesApp(props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [leftSidebarOpen, setSidebarOpen] = useState(false);
  const routeParams = useParams();

  useEffect(() => {
    dispatch(getNotes(routeParams));
    dispatch(getLabels());
  }, [dispatch, routeParams]);

  return (
    <>
      <Root
        header={<NotesHeader onSetSidebarOpen={setSidebarOpen} />}
        content={
          <div className="flex flex-col w-full items-center p-32">
            <NewNote />
            <NoteList />
            <NoteDialog />
            <LabelsDialog />
          </div>
        }
        sidebarInner
        leftSidebarOpen={isMobile ? leftSidebarOpen : true}
        leftSidebarOnClose={() => {
          setSidebarOpen(false);
        }}
        leftSidebarContent={<NotesSidebarContent />}
        scroll="content"
      />
    </>
  );
}

export default withReducer('notesApp', reducer)(NotesApp);
