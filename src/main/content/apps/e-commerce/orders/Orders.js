import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageCarded} from '@fuse';
import OrdersHeader from './OrdersHeader';
import OrdersTable from './OrdersTable';

const styles = theme => ({});

class Orders extends Component {

    render()
    {
        return (
            <FusePageCarded
                classes={{
                    content: "flex"
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

export default withStyles(styles)(Orders);
