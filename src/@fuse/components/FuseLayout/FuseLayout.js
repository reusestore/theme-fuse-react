import React from 'react';
import {withStyles} from 'material-ui/styles';
import {withRouter} from 'react-router-dom';
import {AppBar, Hidden, Icon, IconButton, Toolbar, Drawer, MuiThemeProvider} from 'material-ui';
import {matchRoutes, renderRoutes} from 'react-router-config'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../../store/actions/fuse/index';
import classNames from 'classnames';
import _ from 'lodash';
import {FuseScrollbars, FuseDefaultSettings} from '@fuse';
import {FuseThemes} from '@fuse/index';

const navbarWidth = 256;

const styles = theme => ({
    root                 : {
        display                     : 'flex',
        flexDirection               : 'column',
        width                       : '100%',
        height                      : '100%',
        overflow                    : 'hidden',
        backgroundColor             : theme.palette.background.default,
        color                       : theme.palette.text.primary,
        '&.boxed'                   : {
            maxWidth : 1280,
            margin   : '0 auto',
            boxShadow: theme.shadows[3]
        },
        '& table.simple tbody tr td': {
            borderColor: theme.palette.divider
        },
        '& table.simple thead tr th': {
            borderColor: theme.palette.divider
        },
        '& a:not([role=button])'    : {
            color         : theme.palette.secondary.main,
            textDecoration: 'none',
            '&:hover'     : {
                textDecoration: 'underline'
            }
        },
        '& [class^="border-"]'      : {
            borderColor: theme.palette.divider
        },
        '& [class*="border-"]'      : {
            borderColor: theme.palette.divider
        }
    },
    wrapper              : {
        display : 'flex',
        position: 'relative',
        width   : '100%',
        height  : '100%'
    },
    contentWrapper       : {
        display      : 'flex',
        flexDirection: 'column',
        zIndex       : 3,
        overflow     : 'hidden',
        flex         : '1 1 auto'
    },
    content              : {
        display      : 'flex',
        overflow     : 'auto',
        flex         : '1 1 auto',
        flexDirection: 'column',
        width        : '100%'
    },
    navbarWrapper        : {
        boxShadow: theme.shadows[3],
        zIndex   : 4
    },
    navbarPaperWrapper   : {},
    navbar               : {
        display      : 'flex',
        overflow     : 'hidden',
        flexDirection: 'column',
        width        : navbarWidth,
        minWidth     : navbarWidth,
        height       : '100%',
        transition   : theme.transitions.create(['width', 'min-width'], {
            easing  : theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shorter
        })
    },
    navbarLeft           : {
        left: 0
    },
    navbarRight          : {
        right: 0
    },
    navigationFolded     : {
        position: 'absolute',
        width   : 64,
        minWidth: 64,
        top     : 0,
        bottom  : 0
    },
    navigationFoldedOpen : {
        width   : navbarWidth,
        minWidth: navbarWidth
    },
    navigationFoldedClose: {
        '& $navbarHeader'                       : {
            padding         : '0 8px 0 13px',
            '& .logo-text'  : {
                opacity: 0
            },
            '& .react-badge': {
                opacity: 0
            }
        },
        '& .list-item-text, & .arrow-icon'      : {
            opacity: 0
        },
        '& .list-subheader .list-subheader-text': {
            opacity: 0
        },
        '& .list-subheader:before'              : {
            content  : '""',
            display  : 'block',
            position : 'absolute',
            minWidth : 16,
            borderTop: '2px solid',
            opacity  : .2
        },
        '& .collapse-children'                  : {
            display: 'none'
        }
    },
    navbarHeaderWrapper  : {
        display        : 'flex',
        alignItems     : 'center',
        flex           : '1 0 auto',
        ...theme.mixins.toolbar,
        backgroundColor: 'rgba(255, 255, 255, .05)',
        boxShadow      : theme.shadows[1]
    },
    navbarHeader         : {
        display: 'flex',
        flex   : '1 1 auto',
        padding: '0 8px 0 16px'
    },
    navbarContent        : {
        overflowX: 'hidden',
        overflowY: 'auto'
    },
    toolbarWrapper       : {
        display : 'flex',
        position: 'relative',
        zIndex  : 5
    },
    toolbar              : {
        display: 'flex',
        flex   : '1 0 auto'
    },
    footerWrapper        : {
        position: 'relative',
        zIndex  : 5
    },
    footer               : {
        display: 'flex',
        flex   : '1 0 auto'
    }
});

class FuseLayout extends React.Component {

    defaultSettings = {...FuseDefaultSettings};

    state = {
        mobileNavbarOpen: false
    };

    componentWillMount()
    {
        this.updateLayoutSettings(this.props);
    }

    componentWillReceiveProps(nextProps, nextContext)
    {
        /**
         * If route is changed
         * Update settings
         */
        if ( !_.isEqual(nextProps.location.pathname, this.props.location.pathname) )
        {
            this.updateLayoutSettings(nextProps);
        }
    }


    updateLayoutSettings(props)
    {
        const matched = matchRoutes(this.props.routes, props.location.pathname)[0];
        if ( matched && matched.route.settings )
        {
            const routeSettings = _.merge({}, this.defaultSettings, matched.route.settings);

            if ( !_.isEqual(props.settings, routeSettings) )
            {
                props.setSettings(_.merge({}, props.settings, routeSettings));
            }
        }
        else
        {
            if ( !_.isEqual(props.settings, this.defaultSettings) )
            {
                props.setSettings(this.defaultSettings);
            }
        }
    }

    handleToggleFolded = () => {
        this.props.setSettings({layout: {navigationFolded: !this.props.settings.layout.navigationFolded}});
    };

    handleFoldedOpen = () => {
        if ( !this.props.settings.layout.navigationFolded )
        {
            return;
        }
        this.props.setSettings({layout: {navigationFoldedOpen: true}});
    };

    handleFoldedClose = () => {
        if ( !this.props.settings.layout.navigationFolded )
        {
            return;
        }
        this.props.setSettings({layout: {navigationFoldedOpen: false}});
    };

    handleMobileNavbarOpen = () => {
        this.setState({mobileNavbarOpen: true});
    };

    handleMobileNavbarClose = () => {
        this.setState({mobileNavbarOpen: false});
    };

    render()
    {
        const {classes, toolbar, footer, navbarHeader, navbarContent, settings} = this.props;

//        console.warn('FuseLayout:: rendered', this.state.navigationFoldedOpen);

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
            <FuseScrollbars className={classes.navbarContent}>
                {navbarContent}
            </FuseScrollbars>
        );

        const navBarTemplate = (
            <MuiThemeProvider theme={FuseThemes[settings.navbarTheme]}>
                <div id="fuse-navbar" className={classes.navbarWrapper}>
                    <Hidden mdDown>
                        <div className={classNames(
                            classes.navbar,
                            classes['navbar' + _.upperFirst(settings.layout.navigation)],
                            settings.layout.navigationFolded && classes.navigationFolded,
                            settings.layout.navigationFolded && settings.layout.navigationFoldedOpen && classes.navigationFoldedOpen,
                            settings.layout.navigationFolded && !settings.layout.navigationFoldedOpen && classes.navigationFoldedClose)}
                             onMouseEnter={this.handleFoldedOpen}
                             onMouseLeave={this.handleFoldedClose}
                             style={{backgroundColor: FuseThemes[settings.navbarTheme].palette.background.default}}
                        >
                            {navbarHeaderTemplate}
                            {navbarContentTemplate}
                        </div>
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
            </MuiThemeProvider>
        );

        const toolbarTemplate = (
            <MuiThemeProvider theme={FuseThemes[settings.toolbarTheme]}>
                <AppBar id="fuse-toolbar" className={classNames(classes.toolbarWrapper)} color="default">
                    <Toolbar className="p-0">
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
            </MuiThemeProvider>
        );

        const footerTemplate = (
            <MuiThemeProvider theme={FuseThemes[settings.footerTheme]}>
                <AppBar id="fuse-footer" className={classNames(classes.footerWrapper)} color="default">
                    <Toolbar className="p-0">
                        <div className={classNames(classes.footer)}>
                            {footer}
                        </div>
                    </Toolbar>
                </AppBar>
            </MuiThemeProvider>
        );

        return (

            <div id="fuse-layout" className={classNames(classes.root, settings.layout.mode)}>

                {settings.layout.toolbar === 'above' && (
                    toolbarTemplate
                )}

                <div className={classes.wrapper}>

                    {settings.layout.navigation === 'left' && (
                        navBarTemplate
                    )}

                    <div className={classNames(
                        classes.contentWrapper,
                        settings.layout.navigationFolded && settings.layout.navigation === 'left' && 'md:ml-64',
                        settings.layout.navigationFolded && settings.layout.navigation === 'right' && 'md:mr-64'
                    )}>

                        {settings.layout.toolbar === 'below' && (
                            toolbarTemplate
                        )}

                        <FuseScrollbars className={classes.content}>
                            {renderRoutes(this.props.routes)}
                        </FuseScrollbars>

                        {settings.layout.footer === 'below' && (
                            footerTemplate
                        )}
                    </div>

                    {settings.layout.navigation === 'right' && (
                        navBarTemplate
                    )}

                </div>

                {settings.layout.footer === 'above' && (
                    footerTemplate
                )}
            </div>
        );
    }
}


function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        setSettings: Actions.setSettings
    }, dispatch);
}

function mapStateToProps({fuse})
{
    return {
        settings: fuse.settings
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(FuseLayout)));
