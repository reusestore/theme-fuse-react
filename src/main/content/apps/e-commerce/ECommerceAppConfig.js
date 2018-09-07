import React from 'react';
import {Redirect} from 'react-router-dom';
import Product from './product/Product';
import Products from './products/Products';
import Order from './order/Order';
import Orders from './orders/Orders';

export const ECommerceAppConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/apps/e-commerce/products/:productId/:productHandle?',
            component: Product
        },
        {
            path     : '/apps/e-commerce/products',
            component: Products
        },
        {
            path     : '/apps/e-commerce/orders/:orderId',
            component: Order
        },
        {
            path     : '/apps/e-commerce/orders',
            component: Orders
        },
        {
            path     : '/apps/e-commerce',
            component: () => <Redirect to="/apps/e-commerce/products"/>
        }
    ]
};
