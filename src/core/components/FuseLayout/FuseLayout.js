import React from 'react';
import {withStyles} from 'material-ui/styles';
import {withRouter} from 'react-router-dom';
import {AppBar, Hidden, Icon, IconButton, Paper, Toolbar, Drawer} from 'material-ui';
import {matchRoutes, renderRoutes} from 'react-router-config'
import classNames from 'classnames';
import _ from 'lodash';

const navbarWidth = 256;

const styles = theme => ({
    root                : {
        display        : 'flex',
        flexDirection  : 'column',
        width          : '100%',
        height         : '100%',
        overflow       : 'hidden',
        backgroundColor: theme.palette.background.default,
        color          : theme.palette.text.primary
    },
    wrapper             : {
        display : 'flex',
        position: 'relative',
        width   : '100%',
        height  : '100%'
    },
    contentWrapper      : {
        display      : 'flex',
        flexDirection: 'column',
        zIndex       : 3,
        overflow     : 'hidden',
        flex         : '1 1 auto'
    },
    content             : {
        display      : 'flex',
        overflow     : 'auto',
        flex         : '1 1 auto',
        flexDirection: 'column',
        width        : '100%'
    },
    navbarWrapper       : {
        zIndex: 4
    },
    navbarPaperWrapper  : {},
    navbar              : {
        overflowX      : 'hidden',
        overflowY      : 'auto',
        width          : navbarWidth,
        minWidth       : navbarWidth,
        height         : '100%',
        backgroundColor: theme.palette.background.default,
        color          : theme.palette.text.primary,
        transition     : theme.transitions.create(['width', 'min-width'], {
            easing  : theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shorter
        })
    },
    navbarLeft          : {
        left: 0
    },
    navbarRight         : {
        right: 0
    },
    navigationFolded    : {
        position: 'absolute',
        width   : 64,
        minWidth: 64,
        top     : 0,
        bottom  : 0
    },
    navigationFoldedOpen: {
        width   : navbarWidth,
        minWidth: navbarWidth
    },
    navbarHeaderWrapper : {
        display        : 'flex',
        alignItems     : 'center',
        flex           : '1 0 auto',
        ...theme.mixins.toolbar,
        backgroundColor: 'rgba(255, 255, 255, .05)',
        boxShadow      : theme.shadows[1]
    },
    navbarHeader        : {
        display: 'flex',
        flex   : '1 1 auto',
        padding: '0 8px 0 16px'
    },
    navbarContent       : {},
    toolbarWrapper      : {
        display : 'flex',
        position: 'relative',
        zIndex  : 5
    },
    toolbar             : {
        display: 'flex',
        flex   : '1 0 auto'
    },
    footerWrapper       : {
        position: 'relative',
        zIndex  : 5
    },
    footer              : {
        display: 'flex',
        flex   : '1 0 auto'
    }
});

class FuseLayout extends React.Component {

    state = {
        settings            : {...this.defaultSettings},
        navigationFoldedOpen: false,
        mobileNavbarOpen    : false
    };

    defaultSettings = {
        layout          : {
            navigation      : 'left', // 'right', 'left', 'top', 'none'
            navigationFolded: false, // true, false
            toolbar         : 'below', // 'above', 'below', 'none'
            footer          : 'above', // 'above', 'below', 'none'
            mode            : 'fullwidth' // 'boxed', 'fullwidth'
        },
        customScrollbars: true,
        routerAnimation : 'fadeIn' // fadeIn, slideUp, slideDown, slideRight, slideLeft, none
    };


    handleToggleFolded = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                layout: {
                    ...this.state.settings.layout,
                    navigationFolded: !this.state.settings.layout.navigationFolded
                }
            }
        });
    };

    handleFoldedOpen = () => {
        if ( !this.state.settings.layout.navigationFolded )
        {
            return;
        }
        this.setState({navigationFoldedOpen: true});
    };

    handleFoldedClose = () => {
        if ( !this.state.settings.layout.navigationFolded )
        {
            return;
        }
        this.setState({navigationFoldedOpen: false});
    };

    handleMobileNavbarOpen = () => {
        this.setState({mobileNavbarOpen: true});
    };

    handleMobileNavbarClose = () => {
        this.setState({mobileNavbarOpen: false});
    };

    componentWillMount()
    {
        this.updateLayoutSettings(this.props);
    }

    componentWillReceiveProps(nextProps)
    {
        if ( !_.isEqual(nextProps.location.pathname, this.props.location.pathname) )
        {
            this.updateLayoutSettings(nextProps);
        }
    }

    updateLayoutSettings(props)
    {
        let layoutSettings = matchRoutes(this.props.routes, props.location.pathname)[0].route.layout;

        if ( layoutSettings )
        {
            layoutSettings = {
                ...this.defaultSettings.layout,
                ...layoutSettings
            };

            if ( !_.isEqual(this.state.settings, layoutSettings) )
            {
                this.setState({
                    settings            : {
                        ...this.settings,
                        layout: layoutSettings
                    },
                    navigationFoldedOpen: false
                });
            }
        }
        else
        {
            this.setState({
                settings            : {
                    ...this.settings,
                    layout: this.defaultSettings.layout
                },
                navigationFoldedOpen: false
            });
        }
    }


    render()
    {
        const {classes, toolbar, footer, navbarHeader, navbarContent} = this.props;

        const navbarHeaderTemplate = (
            <div className={classes.navbarHeaderWrapper}>
                <div className={classes.navbarHeader}>
                    {navbarHeader}
                </div>
                <Hidden smDown>
                    <IconButton onClick={this.handleToggleFolded}>
                        <Icon>menu</Icon>
                    </IconButton>
                </Hidden>
                <Hidden mdUp>
                    <IconButton onClick={this.handleMobileNavbarClose}>
                        <Icon>menu</Icon>
                    </IconButton>
                </Hidden>
            </div>
        );

        const navbarContentTemplate = (
            <div className={classes.navbarContent}>
                {navbarContent}
            </div>
        );

        const navBarTemplate = (

            <div className={classes.navbarWrapper}>

                <Hidden mdDown>
                    <Paper className={classNames(
                        classes.navbar,
                        classes['navbar' + _.upperFirst(this.state.settings.layout.navigation)],
                        this.state.settings.layout.navigationFolded && classes.navigationFolded,
                        this.state.settings.layout.navigationFolded && this.state.navigationFoldedOpen && classes.navigationFoldedOpen)}
                           onMouseEnter={this.handleFoldedOpen}
                           onMouseLeave={this.handleFoldedClose}>
                        {navbarHeaderTemplate}
                        {navbarContentTemplate}
                    </Paper>
                </Hidden>

                <Hidden lgUp>
                    <Drawer
                        variant="temporary"
                        open={this.state.mobileNavbarOpen}
                        classes={{
                            paper: classes.navbar
                        }}
                        onClose={this.handleMobileNavbarClose}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        {navbarHeaderTemplate}
                        {navbarContentTemplate}
                    </Drawer>
                </Hidden>
            </div>
        );

        const toolbarTemplate = (
            <AppBar className={classNames(classes.toolbarWrapper)} color="default">
                <Toolbar>
                    <Hidden lgUp>
                        <IconButton
                            aria-label="open drawer"
                            onClick={this.handleMobileNavbarOpen}>
                            <Icon>menu</Icon>
                        </IconButton>
                    </Hidden>
                    <div className={classes.toolbar}>
                        {toolbar}
                    </div>
                </Toolbar>
            </AppBar>
        );

        const footerTemplate = (
            <AppBar className={classNames(classes.footerWrapper)} color="default">
                <Toolbar>
                    <div className={classNames(classes.footer)}>
                        {footer}
                    </div>
                </Toolbar>
            </AppBar>
        );

        return (

            <div className={classes.root}>

                {this.state.settings.layout.toolbar === 'above' && (
                    toolbarTemplate
                )}

                <div className={classes.wrapper}>

                    {this.state.settings.layout.navigation === 'left' && (
                        navBarTemplate
                    )}

                    <div className={classNames(
                        classes.contentWrapper,
                        this.state.settings.layout.navigationFolded && this.state.settings.layout.navigation === 'left' && 'md:ml-64',
                        this.state.settings.layout.navigationFolded && this.state.settings.layout.navigation === 'right' && 'md:mr-64'
                    )}>

                        {this.state.settings.layout.toolbar === 'below' && (
                            toolbarTemplate
                        )}

                        <div className={classes.content}>
                            {renderRoutes(this.props.routes)}
                        </div>

                        {this.state.settings.layout.footer === 'below' && (
                            footerTemplate
                        )}
                    </div>

                    {this.state.settings.layout.navigation === 'right' && (
                        navBarTemplate
                    )}

                </div>

                {this.state.settings.layout.footer === 'above' && (
                    footerTemplate
                )}
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(FuseLayout));
