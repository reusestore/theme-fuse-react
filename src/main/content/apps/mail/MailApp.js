import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import MailList from './MailList';
import * as Actions from './store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Divider, Grid, Paper, AppBar, Toolbar, Hidden, Drawer, IconButton, Typography} from 'material-ui';
import {Menu} from 'material-ui-icons';

const drawerWidth = 240;

const styles = theme => ({
    root        : {
        width    : '100%',
        height   : '100%',
        zIndex   : 1,
        overflow : 'hidden'
    },
    appFrame    : {
        position: 'relative',
        display : 'flex',
        width   : '100%',
        height  : '100%'
    },
    appBar      : {
        position                    : 'absolute',
        marginLeft                  : drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`
        }
    },
    navIconHide : {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    drawerHeader: theme.mixins.toolbar,
    drawerPaper : {
        width                       : 250,
        [theme.breakpoints.up('md')]: {
            width   : drawerWidth,
            position: 'relative',
            height  : '100%'
        }
    },
    content     : {
        backgroundColor             : theme.palette.background.default,
        width                       : '100%',
        padding                     : theme.spacing.unit * 3,
        height                      : 'calc(100% - 56px)',
        marginTop                   : 56,
        [theme.breakpoints.up('sm')]: {
            height   : 'calc(100% - 64px)',
            marginTop: 64
        }
    }
});

class MailApp extends Component {

    state = {
        mobileOpen: false
    };

    componentDidMount()
    {
        this.props.getData();
    }

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    render()
    {
        const {classes, theme, mails, folders, filters, labels} = this.props;

        console.info(folders, filters, labels);

        const drawer = (
            <div>
                <div className={classes.drawerHeader}>
                    Sidebar Header
                </div>
                <Divider/>
                Sidebar
            </div>
        );

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton color="contrast" aria-label="open drawer" onClick={this.handleDrawerToggle} className={classes.navIconHide}>
                                <Menu/>
                            </IconButton>
                            <Typography type="title" color="inherit" noWrap>
                                Responsive drawer
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Hidden mdUp>
                        <Drawer
                            type="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            onClose={this.handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden mdDown implementation="css">
                        <Drawer
                            type="permanent"
                            open
                            classes={{
                                paper: classes.drawerPaper
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <main className={classes.content}>

                        <div>
                            <Grid container spacing={24}>
                                <Grid item xs={12} sm={6}>
                                    <MailList mails={mails}></MailList>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.paper}>xs=12</Paper>
                                </Grid>
                            </Grid>
                        </div>
                        {/*<Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>*/}
                    </main>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getData: Actions.getData
    }, dispatch);
}

function mapStateToProps({mailApp})
{
    return {
        mails  : mailApp.mails,
        folders: mailApp.folders,
        labels : mailApp.labels,
        filters: mailApp.filters
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(MailApp));
