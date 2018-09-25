import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageCarded} from '@fuse';
import ProductsTable from './ProductsTable';
import ProductsHeader from './ProductsHeader';

const styles = theme => ({});

class Products extends Component {

    render()
    {
        return (
            <FusePageCarded
                classes={{
                    content: "flex",
                    header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
                }}
                header={
                    <ProductsHeader/>
                }
                content={
                    <ProductsTable/>
                }
                innerScroll
            />
        )
    };
}

export default withStyles(styles)(Products);
