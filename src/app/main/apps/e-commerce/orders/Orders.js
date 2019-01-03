import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import {FusePageCarded} from '@fuse';
import withReducer from 'app/store/withReducer';
import OrdersHeader from './OrdersHeader';
import OrdersTable from './OrdersTable';
import reducer from '../store/reducers';

const styles = theme => ({});

class Orders extends Component {

    render()
    {
        return (
            <FusePageCarded
                classes={{
                    content: "flex",
                    header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
                }}
                header={
                    <OrdersHeader/>
                }
                content={
                    <OrdersTable/>
                }
                innerScroll
            />
        )
    };
}

export default withReducer('eCommerceApp', reducer)(withStyles(styles)(Orders));
