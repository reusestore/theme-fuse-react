import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMembers } from './store/membersSlice';

function ScrumboardApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  return <Outlet />;
}

export default ScrumboardApp;
