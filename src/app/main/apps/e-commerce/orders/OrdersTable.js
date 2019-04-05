import React, {useEffect, useState} from 'react';
import {Table, TableBody, TableCell, TablePagination, TableRow, Checkbox} from '@material-ui/core';
import {FuseScrollbars, FuseUtils} from '@fuse';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import _ from '@lodash';
import OrdersTableHead from './OrdersTableHead';
import OrdersStatus from '../order/OrdersStatus';
import * as Actions from '../store/actions';

function OrdersTable(props)
{
    const [selected, setSelected] = useState([]);
    const [data, setData] = useState(props.orders);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [order, setOrder] = useState({
        direction: 'asc',
        id       : null
    });

    useEffect(() => {
        props.getOrders();
    }, []);

    useEffect(() => {
        setData(props.searchText.length === 0 ? props.orders : FuseUtils.filterArrayByString(props.orders, props.searchText))
    }, [props.orders, props.searchText]);

    function handleRequestSort(event, property)
    {
        const id = property;
        let direction = 'desc';

        if ( order.id === property && order.direction === 'desc' )
        {
            direction = 'asc';
        }

        setOrder({
            direction,
            id
        });
    }

    function handleSelectAllClick(event)
    {
        if ( event.target.checked )
        {
            setSelected(data.map(n => n.id));
            return;
        }
        setSelected([]);
    }

    function handleClick(item)
    {
        props.history.push('/apps/e-commerce/orders/' + item.id + '/' + item.handle);
    }

    function handleCheck(event, id)
    {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if ( selectedIndex === -1 )
        {
            newSelected = newSelected.concat(selected, id);
        }
        else if ( selectedIndex === 0 )
        {
            newSelected = newSelected.concat(selected.slice(1));
        }
        else if ( selectedIndex === selected.length - 1 )
        {
            newSelected = newSelected.concat(selected.slice(0, -1));
        }
        else if ( selectedIndex > 0 )
        {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    }

    function handleChangePage(event, page)
    {
        setPage(page);
    }

    function handleChangeRowsPerPage(event)
    {
        setRowsPerPage(event.target.value);
    }

    return (
        <div className="w-full flex flex-col">

            <FuseScrollbars className="flex-grow overflow-x-auto">

                <Table className="min-w-xl" aria-labelledby="tableTitle">

                    <OrdersTableHead
                        numSelected={selected.length}
                        order={order}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={data.length}
                    />

                    <TableBody>
                        {
                            _.orderBy(data, [
                                (o) => {
                                    switch ( order.id )
                                    {
                                        case 'id':
                                        {
                                            return parseInt(o.id, 10);
                                        }
                                        case 'customer':
                                        {
                                            return o.customer.firstName;
                                        }
                                        case 'payment':
                                        {
                                            return o.payment.method;
                                        }
                                        case 'status':
                                        {
                                            return o.status[0].name;
                                        }
                                        default:
                                        {
                                            return o[order.id];
                                        }
                                    }
                                }
                            ], [order.direction])
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map(n => {
                                    const isSelected = selected.indexOf(n.id) !== -1;
                                    return (
                                        <TableRow
                                            className="h-64 cursor-pointer"
                                            hover
                                            role="checkbox"
                                            aria-checked={isSelected}
                                            tabIndex={-1}
                                            key={n.id}
                                            selected={isSelected}
                                            onClick={event => handleClick(n)}
                                        >
                                            <TableCell className="w-48 pl-4 sm:pl-12" padding="checkbox">
                                                <Checkbox
                                                    checked={isSelected}
                                                    onClick={event => event.stopPropagation()}
                                                    onChange={event => handleCheck(event, n.id)}
                                                />
                                            </TableCell>

                                            <TableCell component="th" scope="row">
                                                {n.id}
                                            </TableCell>

                                            <TableCell component="th" scope="row">
                                                {n.reference}
                                            </TableCell>

                                            <TableCell className="truncate" component="th" scope="row">
                                                {n.customer.firstName + ' ' + n.customer.lastName}
                                            </TableCell>

                                            <TableCell component="th" scope="row" align="right">
                                                <span>$</span>
                                                {n.total}
                                            </TableCell>

                                            <TableCell component="th" scope="row">
                                                {n.payment.method}
                                            </TableCell>

                                            <TableCell component="th" scope="row">
                                                <OrdersStatus name={n.status[0].name}/>
                                            </TableCell>

                                            <TableCell component="th" scope="row">
                                                {n.date}
                                            </TableCell>

                                        </TableRow>
                                    );
                                })}
                    </TableBody>
                </Table>
            </FuseScrollbars>

            <TablePagination
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    'aria-label': 'Previous Page'
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page'
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getOrders: Actions.getOrders
    }, dispatch);
}

function mapStateToProps({eCommerceApp})
{
    return {
        orders    : eCommerceApp.orders.data,
        searchText: eCommerceApp.orders.searchText
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrdersTable));
