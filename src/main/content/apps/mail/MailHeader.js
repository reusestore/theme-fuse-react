import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {Hidden, Icon, IconButton, Input, MuiThemeProvider, Paper} from '@material-ui/core';
import * as Actions from './store/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {FuseSelectedTheme} from '@fuse';

const styles = theme => ({
    root         : {
        display: 'flex',
        flex   : '1'
    },
    searchWrapper: {
        width                         : '100%',
        height                        : 56,
        padding                       : 18,
        [theme.breakpoints.down('md')]: {
            paddingLeft: 8
        },
        display                       : 'flex',
        alignItems                    : 'center'
    },
    search       : {
        paddingLeft: 16
    }
});

class MailHeader extends Component {

    render()
    {
        const {classes, setSearchText, searchText, pageLayout} = this.props;
        return (
            <MuiThemeProvider theme={FuseSelectedTheme}>
                <div className={classes.root}>
                    <Paper className={classes.searchWrapper} elevation={7} square>
                        <Hidden lgUp>
                            <IconButton
                                onClick={(ev) => pageLayout().toggleLeftSidebar()}
                                aria-label="open left sidebar"
                            >
                                <Icon>menu</Icon>
                            </IconButton>
                        </Hidden>

                        <Icon color="action">search</Icon>

                        <Input
                            placeholder="Search"
                            className={classes.search}
                            disableUnderline
                            fullWidth
                            value={searchText}
                            inputProps={{
                                'aria-label': 'Search'
                            }}
                            onChange={setSearchText}
                        />
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        setSearchText: Actions.setSearchText
    }, dispatch);
}

function mapStateToProps({mailApp})
{
    return {
        searchText: mailApp.mails.searchText
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(MailHeader));
