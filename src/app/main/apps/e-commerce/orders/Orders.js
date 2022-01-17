import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import reducer from '../store';
import OrdersHeader from './OrdersHeader';
import OrdersTable from './OrdersTable';

function Orders() {
  return <FusePageCarded header={<OrdersHeader />} content={<OrdersTable />} scroll="content" />;
}

export default withReducer('eCommerceApp', reducer)(Orders);
