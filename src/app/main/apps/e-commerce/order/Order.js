import React, {useEffect, useState} from 'react';
import {Avatar, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Icon, Tab, Tabs, Tooltip, Typography} from '@material-ui/core';
import {FuseAnimate, FusePageCarded} from '@fuse';
import {Link, withRouter} from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import connect from 'react-redux/es/connect/connect';
import {bindActionCreators} from 'redux';
import GoogleMap from 'google-map-react';
import withReducer from 'app/store/withReducer';
import OrdersStatus from './OrdersStatus';
import OrderInvoice from './OrderInvoice';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';

function Marker(props)
{
    return (
        <Tooltip title={props.text} placement="top">
            <Icon className="text-red">place</Icon>
        </Tooltip>
    );
}

function Order(props)
{
    const [tabValue, setTabValue] = useState(0);
    const [map, setMap] = useState('shipping');

    useEffect(() => {
        props.getOrder(props.match.params);
    }, []);

    function handleChangeTab(event, tabValue)
    {
        setTabValue(tabValue);
    }

    return (
        <FusePageCarded
            classes={{
                content: "flex",
                header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                props.order && (
                    <div className="flex flex-1 w-full items-center justify-between">

                        <div className="flex flex-1 flex-col items-center sm:items-start">

                            <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                <Typography className="normal-case flex items-center sm:mb-12" component={Link} role="button" to="/apps/e-commerce/orders">
                                    <Icon className="mr-4 text-20">arrow_back</Icon>
                                    Orders
                                </Typography>
                            </FuseAnimate>

                            <div className="flex flex-col min-w-0 items-center sm:items-start">

                                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                    <Typography className="text-16 sm:text-20 truncate">
                                        {'Order ' + props.order.reference}
                                    </Typography>
                                </FuseAnimate>

                                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                                    <Typography variant="caption">
                                        {'From ' + props.order.customer.firstName + ' ' + props.order.customer.lastName}
                                    </Typography>
                                </FuseAnimate>
                            </div>

                        </div>
                    </div>
                )
            }
            contentToolbar={
                <Tabs
                    value={tabValue}
                    onChange={handleChangeTab}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="scrollable"
                    scrollButtons="auto"
                    classes={{root: "w-full h-64"}}
                >
                    <Tab className="h-64 normal-case" label="Order Details"/>
                    <Tab className="h-64 normal-case" label="Products"/>
                    <Tab className="h-64 normal-case" label="Invoice"/>
                </Tabs>
            }
            content={
                props.order && (
                    <div className="p-16 sm:p-24 max-w-2xl w-full">
                        {/*Order Details*/}
                        {tabValue === 0 &&
                        (
                            <div>
                                <div className="pb-48">

                                    <div className="pb-16 flex items-center">
                                        <Icon className="mr-16" color="action">account_circle</Icon>
                                        <Typography className="h2" color="textSecondary">Customer</Typography>
                                    </div>

                                    <div className="mb-24">

                                        <div className="table-responsive mb-16">
                                            <table className="simple">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Phone</th>
                                                        <th>Company</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="flex items-center">
                                                                <Avatar className="mr-8" src={props.order.customer.avatar}/>
                                                                <Typography className="truncate">
                                                                    {props.order.customer.firstName + ' ' + props.order.customer.lastName}
                                                                </Typography>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <Typography className="truncate">{props.order.customer.email}</Typography>
                                                        </td>
                                                        <td>
                                                            <Typography className="truncate">{props.order.customer.phone}</Typography>
                                                        </td>
                                                        <td>
                                                            <span className="truncate">{props.order.customer.company}</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <ExpansionPanel
                                            elevation={1}
                                            expanded={map === 'shipping'}
                                            onChange={() => setMap(map !== 'shipping' ? 'shipping' : false)}
                                        >
                                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                                <Typography className="font-600">Shipping Address</Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails className="flex flex-col md:flex-row">
                                                <Typography className="w-full md:max-w-256 mb-16 md:mb-0">{props.order.customer.shippingAddress.address}</Typography>
                                                <div className="w-full h-320">
                                                    <GoogleMap
                                                        bootstrapURLKeys={{
                                                            key: process.env.REACT_APP_MAP_KEY
                                                        }}
                                                        defaultZoom={15}
                                                        defaultCenter={[props.order.customer.shippingAddress.lat, props.order.customer.shippingAddress.lng]}
                                                    >
                                                        <Marker
                                                            text={props.order.customer.shippingAddress.address}
                                                            lat={props.order.customer.shippingAddress.lat}
                                                            lng={props.order.customer.shippingAddress.lng}
                                                        />
                                                    </GoogleMap>
                                                </div>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>

                                        <ExpansionPanel
                                            elevation={1}
                                            expanded={map === 'invoice'}
                                            onChange={() => setMap(map !== 'invoice' ? 'invoice' : false)}
                                        >
                                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                                <Typography className="font-600">Invoice Address</Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails className="flex flex-col md:flex-row">
                                                <Typography className="w-full md:max-w-256 mb-16 md:mb-0">{props.order.customer.invoiceAddress.address}</Typography>
                                                <div className="w-full h-320">
                                                    <GoogleMap
                                                        bootstrapURLKeys={{
                                                            key: process.env.REACT_APP_MAP_KEY
                                                        }}
                                                        defaultZoom={15}
                                                        defaultCenter={[props.order.customer.invoiceAddress.lat, props.order.customer.invoiceAddress.lng]}
                                                    >
                                                        <Marker
                                                            text={props.order.customer.invoiceAddress.address}
                                                            lat={props.order.customer.invoiceAddress.lat}
                                                            lng={props.order.customer.invoiceAddress.lng}
                                                        />
                                                    </GoogleMap>
                                                </div>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </div>
                                </div>

                                <div className="pb-48">

                                    <div className="pb-16 flex items-center">
                                        <Icon className="mr-16" color="action">access_time</Icon>
                                        <Typography className="h2" color="textSecondary">Order Status</Typography>
                                    </div>

                                    <div className="table-responsive">
                                        <table className="simple">
                                            <thead>
                                                <tr>
                                                    <th>Status</th>
                                                    <th>Updated On</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {props.order.status.map(status => (
                                                    <tr key={status.id}>
                                                        <td>
                                                            <OrdersStatus name={status.name}/>
                                                        </td>
                                                        <td>
                                                            {status.date}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="pb-48">

                                    <div className="pb-16 flex items-center">
                                        <Icon className="mr-16" color="action">attach_money</Icon>
                                        <Typography className="h2" color="textSecondary">Payment</Typography>
                                    </div>

                                    <div className="table-responsive">
                                        <table className="simple">
                                            <thead>
                                                <tr>
                                                    <th>TransactionID</th>
                                                    <th>Payment Method</th>
                                                    <th>Amount</th>
                                                    <th>Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                            <span className="truncate">
                                                                {props.order.payment.transactionId}
                                                            </span>
                                                    </td>
                                                    <td>
                                                            <span className="truncate">
                                                                {props.order.payment.method}
                                                            </span>
                                                    </td>
                                                    <td>
                                                            <span className="truncate">
                                                                {props.order.payment.amount}
                                                            </span>
                                                    </td>
                                                    <td>
                                                            <span className="truncate">
                                                                {props.order.payment.date}
                                                            </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="pb-48">

                                    <div className="pb-16 flex items-center">
                                        <Icon className="mr-16" color="action">local_shipping</Icon>
                                        <Typography className="h2" color="textSecondary">Shipping</Typography>
                                    </div>

                                    <div className="table-responsive">
                                        <table className="simple">
                                            <thead>
                                                <tr>
                                                    <th>Tracking Code</th>
                                                    <th>Carrier</th>
                                                    <th>Weight</th>
                                                    <th>Fee</th>
                                                    <th>Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {props.order.shippingDetails.map(shipping => (
                                                    <tr key={shipping.date}>
                                                        <td>
                                                                <span className="truncate">
                                                                    {shipping.tracking}
                                                                </span>
                                                        </td>
                                                        <td>
                                                                <span className="truncate">
                                                                    {shipping.carrier}
                                                                </span>
                                                        </td>
                                                        <td>
                                                                <span className="truncate">
                                                                    {shipping.weight}
                                                                </span>
                                                        </td>
                                                        <td>
                                                                <span className="truncate">
                                                                    {shipping.fee}
                                                                </span>
                                                        </td>
                                                        <td>
                                                                <span className="truncate">
                                                                    {shipping.date}
                                                                </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/*Products*/}
                        {tabValue === 1 &&
                        (
                            <div className="table-responsive">
                                <table className="simple">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.order.products.map(product => (
                                            <tr key={product.id}>
                                                <td className="w-64">
                                                    {product.id}
                                                </td>
                                                <td className="w-80">
                                                    <img className="product-image" src={product.image} alt="product"/>
                                                </td>
                                                <td>
                                                    <Typography
                                                        component={Link}
                                                        to={'/apps/e-commerce/products/' + product.id}
                                                        className="truncate"
                                                        style={{
                                                            color         : 'inherit',
                                                            textDecoration: 'underline'
                                                        }}
                                                    >
                                                        {product.name}
                                                    </Typography>
                                                </td>
                                                <td className="w-64 text-right">
                                                        <span className="truncate">
                                                            ${product.price}
                                                        </span>
                                                </td>
                                                <td className="w-64 text-right">
                                                        <span className="truncate">
                                                            {product.quantity}
                                                        </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                        {/*Invoice*/}
                        {tabValue === 2 &&
                        (
                            <OrderInvoice order={props.order}/>
                        )}
                    </div>
                )
            }
            innerScroll
        />
    )
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getOrder : Actions.getOrder,
        saveOrder: Actions.saveOrder
    }, dispatch);
}

function mapStateToProps({eCommerceApp})
{
    return {
        order: eCommerceApp.order
    }
}

export default withReducer('eCommerceApp', reducer)(withRouter(connect(mapStateToProps, mapDispatchToProps)(Order)));
