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

export default withStyles(styles)(Orders);
