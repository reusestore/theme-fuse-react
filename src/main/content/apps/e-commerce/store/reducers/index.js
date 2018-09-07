import {combineReducers} from 'redux';
import products from './products.reducer';
import product from './product.reducer';
import orders from './orders.reducer';
import order from './order.reducer';

const eCommerceAppReducers = combineReducers({
    products,
    product,
    orders,
    order
});

export default eCommerceAppReducers;
