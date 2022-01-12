import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

function TasksSidebarContent(props) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col flex-auto">
      <Outlet />
    </div>
  );
}

export default TasksSidebarContent;
