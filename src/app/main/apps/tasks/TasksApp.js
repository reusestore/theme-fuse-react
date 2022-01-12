import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import TasksSidebarContent from './TasksSidebarContent';
import TasksHeader from './TasksHeader';
import TasksList from './TasksList';
import reducer from './store';
import { getTags } from './store/tagsSlice';
import { getTasks } from './store/tasksSlice';

function TasksApp(props) {
  const dispatch = useDispatch();
  const pageLayout = useRef(null);
  const routeParams = useParams();

  useDeepCompareEffect(() => {
    dispatch(getTasks());
    dispatch(getTags());
  }, [dispatch]);

  useEffect(() => {
    pageLayout.current?.toggleRightSidebar(Boolean(routeParams.id));
  }, [routeParams]);

  return (
    <>
      <FusePageSimple
        header={<TasksHeader pageLayout={pageLayout} />}
        content={<TasksList />}
        ref={pageLayout}
        rightSidebarContent={<TasksSidebarContent pageLayout={pageLayout} />}
        sidebarOpen={false}
        sidebarWidth={640}
        scroll="content"
      />
    </>
  );
}

export default withReducer('tasksApp', reducer)(TasksApp);
