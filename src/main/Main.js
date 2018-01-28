import React from 'react';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import {Hidden, Paper} from 'material-ui';
import {matchRoutes, renderRoutes} from 'react-router-config'
import MainToolbar from './MainToolbar';
import MainFooter from './MainFooter';
import MainNavbar from './MainNavbar';

const navbarWidth = 256;

const styles = theme => ({
    root                : {
        display      : 'flex',
        flexDirection: 'column',
        width        : '100%',
        height       : '100%',
        overflow     : 'hidden'
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
        display        : 'flex',
        overflow       : 'auto',
        flex           : '1 1 auto',
        flexDirection  : 'column',
        width          : '100%',
        backgroundColor: theme.palette.background.default
    },
    navbarWrapper       : {
        zIndex: 4
    },
    navbarPaperWrapper  : {},
    navbar              : {
        background: '#ffffff',
        overflowX : 'hidden',
        overflowY : 'auto',
        width     : navbarWidth,
        minWidth  : navbarWidth,
        height    : '100%',
        transition: theme.transitions.create(['width', 'min-width'], {
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
    }
});

class Main extends React.Component {

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
        console.info(this.state);
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
        console.info('clicked');
        this.setState({mobileNavbarOpen: true});
    };

    handleMobileNavbarClose = () => {
        this.setState({mobileNavbarOpen: false});
    };

    componentWillMount()
    {
        console.info('WILL MOUNT');
        this.updateLayoutSettings(this.props);
    }

    componentWillReceiveProps(nextProps)
    {
        if ( !_.isEqual(nextProps.location.pathname, this.props.location.pathname) )
        {
            console.warn('RESET SETTINGS', nextProps.location, this.props.location);
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
            console.info(layoutSettings);

            if ( !_.isEqual(this.state.settings, layoutSettings) )
            {
                console.info('UPDATE LAYOUT SETTINGS', layoutSettings);
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
        const {classes} = this.props;

        const navBar = (

            <div className={classes.navbarWrapper}>

                <Hidden mdDown>
                    <Paper className={classNames(
                        classes.navbar,
                        classes['navbar' + _.upperFirst(this.state.settings.layout.navigation)],
                        this.state.settings.layout.navigationFolded && classes.navigationFolded,
                        this.state.settings.layout.navigationFolded && this.state.navigationFoldedOpen && classes.navigationFoldedOpen)}
                           onMouseEnter={this.handleFoldedOpen}
                           onMouseLeave={this.handleFoldedClose}>
                        <MainNavbar parent={this}/>
                    </Paper>
                </Hidden>

                <Hidden lgUp>
                    <Drawer
                        type="temporary"
                        open={this.state.mobileNavbarOpen}
                        classes={{
                            paper: classes.navbar
                        }}
                        onClose={this.handleMobileNavbarClose}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        <MainNavbar parent={this}/>
                    </Drawer>
                </Hidden>
            </div>
        );

        return (
            <div className={classes.root}>

                {this.state.settings.layout.toolbar === 'above' && (
                    <MainToolbar parent={this}/>
                )}

                <div className={classes.wrapper}>

                    {this.state.settings.layout.navigation === 'left' && (
                        navBar
                    )}

                    <div className={classNames(
                        classes.contentWrapper,
                        this.state.settings.layout.navigationFolded && this.state.settings.layout.navigation === 'left' && 'md:ml-64',
                        this.state.settings.layout.navigationFolded && this.state.settings.layout.navigation === 'right' && 'md:mr-64'
                    )}>

                        {this.state.settings.layout.toolbar === 'below' && (
                            <MainToolbar parent={this}/>
                        )}

                        <div className={classes.content}>
                            {renderRoutes(this.props.routes)}
                        </div>

                        {this.state.settings.layout.footer === 'below' && (
                            <MainFooter/>
                        )}
                    </div>

                    {this.state.settings.layout.navigation === 'right' && (
                        navBar
                    )}

                </div>

                {this.state.settings.layout.footer === 'above' && (
                    <MainFooter/>
                )}
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(Main));
