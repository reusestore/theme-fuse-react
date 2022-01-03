import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import ContactsSidebarContent from './ContactsSidebarContent';
import ContactsHeader from './ContactsHeader';
import ContactsList from './ContactsList';
import reducer from './store';
import { getTags } from './store/tagsSlice';
import { getCountries } from './store/countriesSlice';
import { getContacts } from './store/contactsSlice';

function ContactsApp(props) {
  const dispatch = useDispatch();
  const pageLayout = useRef(null);
  const routeParams = useParams();

  useDeepCompareEffect(() => {
    dispatch(getContacts());
    dispatch(getCountries());
    dispatch(getTags());
  }, [dispatch]);

  useEffect(() => {
    pageLayout.current?.toggleRightSidebar(Boolean(routeParams.id));
  }, [routeParams]);

  return (
    <>
      <FusePageSimple
        header={<ContactsHeader pageLayout={pageLayout} />}
        content={<ContactsList />}
        ref={pageLayout}
        rightSidebarContent={<ContactsSidebarContent pageLayout={pageLayout} />}
        sidebarOpen={false}
        sidebarWidth={640}
        scroll="content"
      />
    </>
  );
}

export default withReducer('contactsApp', reducer)(ContactsApp);
