import React from 'react';
import {AppBar, Hidden, MuiThemeProvider, Toolbar, withStyles} from '@material-ui/core';
import connect from 'react-redux/es/connect/connect';
import {FuseSearch} from '@fuse';
import {withRouter} from 'react-router-dom';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import QuickPanelToggleButton from 'app/fuse-layouts/shared-components/QuickPanelToggleButton';
import ChatPanelToggleButton from 'app/fuse-layouts/shared-components/ChatPanelToggleButton';
import UserMenu from 'app/fuse-layouts/shared-components/UserMenu';
import Logo from 'app/fuse-layouts/shared-components/Logo';
import classNames from 'classnames';

const styles = theme => ({
    separator: {
        width          : 1,
        height         : 64,
        backgroundColor: theme.palette.divider
    }
});

const ToolbarLayout3 = ({classes, settings, toolbarTheme}) => {

    const layoutConfig = settings.layout.config;

    return (
        <MuiThemeProvider theme={toolbarTheme}>
            <AppBar id="fuse-toolbar" className="flex relative z-10" color="default">
                <Toolbar className="container p-0 lg:px-24">

                    {layoutConfig.navbar.display && (
                        <Hidden lgUp>
                            <NavbarMobileToggleButton/>
                            <div className={classes.separator}/>
                        </Hidden>
                    )}

                    <Hidden mdDown>
                        <div className={classNames("flex flex-no-shrink items-center")}>
                            <Logo/>
                        </div>
                    </Hidden>

                    <div className="flex flex-1">
                        <Hidden xsDown>
                            <FuseSearch className="mx-16 lg:mx-24" variant="basic"/>
                        </Hidden>
                    </div>

                    <div className="flex">

                        <Hidden smUp>
                            <FuseSearch/>
                            <div className={classes.separator}/>
                        </Hidden>

                        <UserMenu/>

                        <Hidden lgUp>

                            <div className={classes.separator}/>

                            <ChatPanelToggleButton/>
                        </Hidden>

                        <div className={classes.separator}/>

                        <QuickPanelToggleButton/>

                        <Hidden mdDown>
                            <div className={classes.separator}/>
                        </Hidden>

                    </div>

                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    );
};

function mapStateToProps({fuse})
{
    return {
        settings    : fuse.settings.current,
        toolbarTheme: fuse.settings.toolbarTheme
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps)(ToolbarLayout3)));
