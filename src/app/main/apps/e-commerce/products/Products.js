import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import reducer from '../store';
import ProductsHeader from './ProductsHeader';
import ProductsTable from './ProductsTable';

function Products() {
  return (
    <FusePageCarded header={<ProductsHeader />} content={<ProductsTable />} scroll="content" />
  );
}

export default withReducer('eCommerceApp', reducer)(Products);
