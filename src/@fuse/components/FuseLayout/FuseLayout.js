import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import {withRouter} from 'react-router-dom';
import {AppBar, Hidden, Icon, IconButton, Toolbar, Drawer, MuiThemeProvider} from 'material-ui';
import {matchRoutes, renderRoutes} from 'react-router-config'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from 'store/actions';
import {FuseScrollbars} from '@fuse';
import {FuseThemes} from '@fuse/index';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

const propTypes = {
    routes       : PropTypes.array,
    toolbar      : PropTypes.node,
    footer       : PropTypes.node,
    navbarHeader : PropTypes.node,
    navbarContent: PropTypes.node
};

const defaultProps = {};

const navbarWidth = 256;

const styles = theme => ({
    root               : {
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
    wrapper            : {
        display : 'flex',
        position: 'relative',
        width   : '100%',
        height  : '100%'
    },
    contentWrapper     : {
        display      : 'flex',
        flexDirection: 'column',
        zIndex       : 3,
        overflow     : 'hidden',
        flex         : '1 1 auto'
    },
    content            : {
        display                     : 'flex',
        overflow                    : 'auto',
        flex                        : '1 1 auto',
        flexDirection               : 'column',
        width                       : '100%',
        '-webkit-overflow-scrolling': 'touch'
    },
    navbarWrapper      : {
        boxShadow: theme.shadows[3],
        zIndex   : 4
    },
    navbarPaperWrapper : {},
    navbar             : {
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
        })
    },
    navbarButton       : {
        '&.right': {
            borderLeft: '1px solid ' + theme.palette.divider
        },
        '&.left' : {
            borderRight: '1px solid ' + theme.palette.divider
        }
    },
    navbarLeft         : {
        left: 0
    },
    navbarRight        : {
        right: 0
    },
    navbarFolded       : {
        position: 'absolute',
        width   : 64,
        minWidth: 64,
        top     : 0,
        bottom  : 0
    },
    navbarFoldedOpen   : {
        width   : navbarWidth,
        minWidth: navbarWidth
    },
    navbarFoldedClose  : {
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
    navbarHeaderWrapper: {
        display        : 'flex',
        alignItems     : 'center',
        flex           : '0 1 auto',
        ...theme.mixins.toolbar,
        backgroundColor: 'rgba(255, 255, 255, .05)',
        boxShadow      : theme.shadows[1]
    },
    navbarHeader       : {
        display: 'flex',
        flex   : '1 1 auto',
        padding: '0 8px 0 16px'
    },
    navbarContent      : {
        overflowX                   : 'hidden',
        overflowY                   : 'auto',
        '-webkit-overflow-scrolling': 'touch'
    },
    toolbarWrapper     : {
        display : 'flex',
        position: 'relative',
        zIndex  : 5
    },
    toolbar            : {
        display: 'flex',
        flex   : '1 0 auto'
    },
    footerWrapper      : {
        position: 'relative',
        zIndex  : 5
    },
    footer             : {
        display: 'flex',
        flex   : '1 0 auto'
    }
});

class FuseLayout extends Component {

    constructor(props)
    {
        super(props);
        this.routeSettingsCheck();
    }

    componentDidUpdate(prevProps)
    {
        if ( !_.isEqual(this.props.location.pathname, prevProps.location.pathname) )
        {
            this.routeSettingsCheck();
        }
    }

    routeSettingsCheck = () => {
        const matched = matchRoutes(this.props.routes, this.props.location.pathname)[0];

        if ( matched && matched.route.settings )
        {
            const routeSettings = _.merge({}, this.props.defaultSettings, matched.route.settings);
            if ( !_.isEqual(this.props.settings, routeSettings) )
            {
                this.props.setSettings(_.merge({}, routeSettings));
            }
        }
        else
        {
            if ( !_.isEqual(this.props.settings, this.props.defaultSettings) )
            {
                this.props.resetSettings();
            }
        }
    };

    handleToggleFolded = () => {
        this.props.setDefaultSettings({layout: {navbarFolded: !this.props.settings.layout.navbarFolded}});
    };


    render()
    {
        const {classes, toolbar, footer, navbarHeader, navbarContent, settings, navbar, navbarOpenMobile, navbarCloseMobile, navbarOpenFolded, navbarCloseFolded} = this.props;
        // console.warn('FuseLayout:: rendered');

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
                    <IconButton onClick={navbarCloseMobile}>
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
                        <div
                            className={classNames(
                                classes.navbar,
                                classes['navbar' + _.upperFirst(settings.layout.navbar)],
                                settings.layout.navbarFolded && classes.navbarFolded,
                                settings.layout.navbarFolded && navbar.foldedOpen && classes.navbarFoldedOpen,
                                settings.layout.navbarFolded && !navbar.foldedOpen && classes.navbarFoldedClose)}
                            onMouseEnter={navbarOpenFolded}
                            onMouseLeave={navbarCloseFolded}
                            style={{backgroundColor: FuseThemes[settings.navbarTheme].palette.background.default}}
                        >
                            {navbarHeaderTemplate}
                            {navbarContentTemplate}
                        </div>
                    </Hidden>

                    <Hidden lgUp>
                        <Drawer
                            anchor={settings.layout.navbar}
                            variant="temporary"
                            open={navbar.mobileOpen}
                            classes={{
                                paper: classes.navbar
                            }}
                            onClose={navbarCloseMobile}
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
                        {settings.layout.navbar === 'left' && (
                            <Hidden lgUp>
                                <IconButton
                                    className={classNames(classes.navbarButton, 'w-64 h-64 rounded-none', settings.layout.navbar)}
                                    aria-label="open drawer"
                                    onClick={navbarOpenMobile}
                                >
                                    <Icon>menu</Icon>
                                </IconButton>
                            </Hidden>
                        )}
                        <div className={classes.toolbar}>
                            {toolbar}
                        </div>
                        {settings.layout.navbar === 'right' && (
                            <Hidden lgUp>
                                <IconButton
                                    className={classNames(classes.navbarButton, 'w-64 h-64 rounded-none', settings.layout.navbar)}
                                    aria-label="open drawer"
                                    onClick={navbarOpenMobile}
                                >
                                    <Icon>menu</Icon>
                                </IconButton>
                            </Hidden>
                        )}
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

                    {settings.layout.navbar === 'left' && (
                        navBarTemplate
                    )}

                    <div
                        className={classNames(
                            classes.contentWrapper,
                            settings.layout.navbarFolded && settings.layout.navbar === 'left' && 'md:ml-64',
                            settings.layout.navbarFolded && settings.layout.navbar === 'right' && 'md:mr-64'
                        )}
                    >

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

                    {settings.layout.navbar === 'right' && (
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
        setSettings       : Actions.setSettings,
        setDefaultSettings: Actions.setDefaultSettings,
        resetSettings     : Actions.resetSettings,
        navbarOpenFolded  : Actions.navbarOpenFolded,
        navbarCloseFolded : Actions.navbarCloseFolded,
        navbarOpenMobile  : Actions.navbarOpenMobile,
        navbarCloseMobile : Actions.navbarCloseMobile
    }, dispatch);
}

function mapStateToProps({fuse})
{
    return {
        defaultSettings: fuse.settings.defaults,
        settings       : fuse.settings.current,
        navbar         : fuse.navbar
    }
}

FuseLayout.propTypes = propTypes;
FuseLayout.defaultProps = defaultProps;

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(FuseLayout)));
