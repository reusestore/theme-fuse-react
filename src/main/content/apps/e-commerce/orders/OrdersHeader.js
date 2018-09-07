import React, {Component} from 'react';
import {withStyles, Paper, Input, Icon, Typography, MuiThemeProvider} from '@material-ui/core';
import {FuseAnimate, FuseSelectedTheme} from '@fuse';
import * as Actions from '../store/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';

const styles = theme => ({
    root: {}
});

class OrdersHeader extends Component {

    render()
    {
        const {classes, setSearchText, searchText} = this.props;
        return (
            <div className={classNames(classes.root, "flex flex-1 flex-col w-full sm:flex-row items-center justify-between p-8 md:p-24")}>

                <div className="flex items-center">
                    <FuseAnimate animation="transition.expandIn" delay={300}>
                        <Icon className="text-32 mr-12">shopping_basket</Icon>
                    </FuseAnimate>
                    <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                        <Typography variant="title">Orders</Typography>
                    </FuseAnimate>
                </div>

                <div className="flex flex-1 items-center justify-center px-16">

                    <MuiThemeProvider theme={FuseSelectedTheme}>
                        <FuseAnimate animation="transition.slideDownIn" delay={300}>
                            <Paper className="flex p-4 items-center w-full max-w-512 px-8 py-4" elevation={1}>

                                <Icon className="mr-8" color="action">search</Icon>

                                <Input
                                    placeholder="Search"
                                    className="flex flex-1"
                                    disableUnderline
                                    fullWidth
                                    value={searchText}
                                    inputProps={{
                                        'aria-label': 'Search'
                                    }}
                                    onChange={setSearchText}
                                />
                            </Paper>
                        </FuseAnimate>
                    </MuiThemeProvider>

                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        setSearchText: Actions.setOrdersSearchText
    }, dispatch);
}

function mapStateToProps({eCommerceApp})
{
    return {
        searchText: eCommerceApp.orders.searchText
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(OrdersHeader));
