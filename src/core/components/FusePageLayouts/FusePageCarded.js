import React from 'react';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import {Icon, IconButton, MuiThemeProvider} from 'material-ui';
import classNames from 'classnames';
import {themes} from '../FuseTheme/FuseTheme';

const drawerWidth = 240;
const headerHeight = 200;
const toolbarHeight = 64;
const headerContentHeight = headerHeight - toolbarHeight;

const styles = theme => ({
    root                     : {
        display      : 'flex',
        flexDirection: 'row',
        height       : '100%',
        minHeight    : '100%',
        position     : 'relative',
        flex         : '1 1 auto'
    },
    singleScroll             : {
        flex: '1 0 auto'
    },
    topBg                    : {
        position       : 'absolute',
        left           : 0,
        right          : 0,
        top            : 0,
        height         : headerHeight,
        backgroundImage: 'url("../../assets/images/backgrounds/header-bg.png")',
        backgroundColor: theme.palette.primary.dark,
        backgroundSize : 'cover',
        pointerEvents  : 'none'
    },
    contentWrapper           : {
        display      : 'flex',
        flexDirection: 'column',
        padding      : '0 3.2rem',
        flex         : '1 1 auto',
        zIndex       : 2,
        maxWidth     : '100%',
        minWidth     : 0
    },
    header                   : {
        height   : headerContentHeight,
        minHeight: headerContentHeight,
        maxHeight: headerContentHeight,
        display  : 'flex',
        padding  : '24px 0',
        color    : theme.palette.primary.contrastText
    },
    headerSidebarToggleButton: {
        color: theme.palette.primary.contrastText
    },
    headerContent            : {
        flex      : '1 1 auto',
        paddingTop: 16
    },
    contentCard              : {
        display        : 'flex',
        flex           : '1 1 auto',
        flexDirection  : 'column',
        backgroundColor: theme.palette.background.paper,
        color          : theme.palette.text.paper,
        boxShadow      : theme.shadows[7]
    },
    toolbar                  : {
        height      : toolbarHeight,
        minHeight   : toolbarHeight,
        display     : 'flex',
        alignItems  : 'center',
        padding     : '0 24px',
        borderBottom: '1px solid ' + theme.palette.divider
    },
    content                  : {
        flex    : '1 1 auto',
        overflow: 'auto',
        padding : 24
    },
    sidebarWrapper           : {
        backgroundColor             : 'transparent',
        zIndex                      : 3,
        [theme.breakpoints.up('md')]: {
            zIndex  : 1,
            position: 'relative'
        }
    },
    sidebar                  : {
        [theme.breakpoints.up('lg')]: {
            backgroundColor: 'transparent',
            position       : 'relative',
            border         : 'none',
            overflow       : 'hidden'
        },
        width                       : drawerWidth,
        height                      : '100%'

    },
    sidebarHeader            : {
        height                        : headerHeight,
        minHeight                     : headerHeight,
        padding                       : 24,
        color                         : theme.palette.primary.contrastText,
        [theme.breakpoints.down('md')]: {
            backgroundColor: theme.palette.primary.dark
        }
    },
    sidebarContent           : {
        padding                     : 24,
        backgroundColor             : theme.palette.background.default,
        color                       : theme.palette.text.primary,
        [theme.breakpoints.up('lg')]: {
            overflow: 'auto'
        }
    }
});

class FusePageCarded extends React.Component {
    state = {
        mobileOpen: false
    };

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    render()
    {
        const {classes, sidebarHeader, sidebarContent, header, content, contentToolbar, sidebarPosition, singleScroll} = this.props;

        const Sidebar = (
            <React.Fragment>
                {sidebarHeader && (
                    <MuiThemeProvider theme={themes['dark']}>
                        <div className={classes.sidebarHeader}>
                            {sidebarHeader}
                        </div>
                    </MuiThemeProvider>
                )}

                {sidebarContent && (
                    <div className={classes.sidebarContent}>
                        {sidebarContent}
                    </div>
                )}
            </React.Fragment>
        );

        const SidebarWrapper = (
            <React.Fragment>
                <Hidden lgUp>
                    <Drawer
                        className={classes.sidebarWrapper}
                        variant="temporary"
                        anchor={sidebarPosition}
                        open={this.state.mobileOpen}
                        classes={{
                            paper: classes.sidebar
                        }}
                        onClose={this.handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                        onClick={this.handleDrawerToggle}>
                        {Sidebar}
                    </Drawer>
                </Hidden>

                <Hidden mdDown>
                    <Drawer
                        variant="permanent"
                        className={classes.sidebarWrapper}
                        open
                        classes={{
                            paper: classes.sidebar
                        }}>
                        {Sidebar}
                    </Drawer>
                </Hidden>
            </React.Fragment>
        );

        return (
            <div className={classNames(classes.root, singleScroll && classes.singleScroll)}>

                <div className={classes.topBg}></div>

                {(sidebarPosition === 'left') && SidebarWrapper}

                <div className={classNames(classes.contentWrapper, sidebarPosition === 'left' && 'lg:pl-0', sidebarPosition === 'right' && 'lg:pr-0')}>

                    <div className={classes.header}>

                        {(sidebarPosition === 'left') && (
                            <Hidden lgUp>
                                <IconButton className={classes.headerSidebarToggleButton}
                                            aria-label="open drawer"
                                            onClick={this.handleDrawerToggle}>
                                    <Icon>menu</Icon>
                                </IconButton>
                            </Hidden>
                        )}

                        {header && (
                            <span className={classes.headerContent}>
                                {header}
                            </span>
                        )}

                        {(sidebarPosition === 'right') && (
                            <Hidden lgUp>
                                <IconButton className={classes.headerSidebarToggleButton}
                                            aria-label="open drawer"
                                            onClick={this.handleDrawerToggle}>
                                    <Icon>menu</Icon>
                                </IconButton>
                            </Hidden>
                        )}

                    </div>

                    <div className={classes.contentCard}>

                        {contentToolbar && (
                            <div className={classes.toolbar}>
                                {contentToolbar}
                            </div>
                        )}

                        {content && (
                            <div className={classes.content}>
                                {content}
                            </div>
                        )}

                    </div>
                </div>

                {(sidebarPosition === 'right') && SidebarWrapper}
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(FusePageCarded);