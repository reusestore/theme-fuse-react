import React from 'react';
import {Paper, Drawer, Hidden, MuiThemeProvider, withStyles} from '@material-ui/core';
import {FuseThemes} from '@fuse';
import NavbarPartial from './NavbarPartial';
import {bindActionCreators} from 'redux';
import * as Actions from 'store/actions';
import connect from 'react-redux/es/connect/connect';
import NavbarMobilePartial from 'fuse-layouts/layout2/partials/NavbarMobilePartial';

const navbarWidth = 280;

const styles = theme => ({
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
});

const NavbarWrapperPartial = ({classes, children, navbar, settings, navbarOpenFolded, navbarCloseFolded, navbarCloseMobile}) => {

    return (
        <MuiThemeProvider theme={FuseThemes[settings.theme.navbar]}>

            <Hidden mdDown>
                <Paper className={classes.navbar} square={true}>
                    <NavbarPartial/>
                </Paper>
            </Hidden>

            <Hidden lgUp>
                <Drawer
                    anchor="left"
                    variant="temporary"
                    open={navbar.mobileOpen}
                    classes={{
                        paper: classes.navbarMobile
                    }}
                    onClose={navbarCloseMobile}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                >
                    <NavbarMobilePartial/>
                </Drawer>
            </Hidden>
        </MuiThemeProvider>
    );
};

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
        settings: fuse.settings.current,
        navbar  : fuse.navbar
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(NavbarWrapperPartial));
