import React from 'react';
import {Paper, Drawer, Hidden} from '@material-ui/core';
import {ThemeProvider, makeStyles} from '@material-ui/styles';
import {bindActionCreators} from 'redux';
import * as Actions from 'app/store/actions';
import connect from 'react-redux/es/connect/connect';
import classNames from 'classnames';
import NavbarMobileLayout3 from './NavbarMobileLayout3';
import NavbarLayout3 from './NavbarLayout3';

const navbarWidth = 280;

const useStyles = makeStyles(theme => ({
    navbar      : {
        display   : 'flex',
        overflow  : 'hidden',
        height    : 64,
        minHeight : 64,
        alignItems: 'center',
        boxShadow : theme.shadows[3],
        zIndex    : 6
    },
    navbarMobile: {
        display      : 'flex',
        overflow     : 'hidden',
        flexDirection: 'column',
        width        : navbarWidth,
        minWidth     : navbarWidth,
        height       : '100%',
        zIndex       : 4,
        transition   : theme.transitions.create(['width', 'min-width'], {
            easing  : theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shorter
        }),
        boxShadow    : theme.shadows[3]
    }
}));

function NavbarWrapperLayout3(props)
{
    const classes = useStyles(props);

    return (
        <ThemeProvider theme={props.navbarTheme}>

            <Hidden mdDown>
                <Paper className={classNames(classes.navbar)} square={true}>
                    <NavbarLayout3/>
                </Paper>
            </Hidden>

            <Hidden lgUp>
                <Drawer
                    anchor="left"
                    variant="temporary"
                    open={props.navbar.mobileOpen}
                    classes={{
                        paper: classes.navbarMobile
                    }}
                    onClose={props.navbarCloseMobile}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                >
                    <NavbarMobileLayout3/>
                </Drawer>
            </Hidden>
        </ThemeProvider>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        navbarOpenFolded : Actions.navbarOpenFolded,
        navbarCloseFolded: Actions.navbarCloseFolded,
        navbarCloseMobile: Actions.navbarCloseMobile
    }, dispatch);
}

function mapStateToProps({fuse})
{
    return {
        navbarTheme: fuse.settings.navbarTheme,
        navbar     : fuse.navbar
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarWrapperLayout3);
