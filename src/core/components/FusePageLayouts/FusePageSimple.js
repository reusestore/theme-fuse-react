import React from 'react';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import {Icon, IconButton} from 'material-ui';
import classNames from 'classnames';

const drawerWidth = 240;
const headerHeight = 120;
const toolbarHeight = 64;

const styles = theme => ({
    root                          : {
        display      : 'flex',
        flexDirection: 'column',
        height       : '100%',
        minHeight    : '100%',
        position     : 'relative',
        flex         : '1 1 auto'
    },
    singleScroll                  : {
        flex: '1 0 auto'
    },
    contentWrapper                : {
        display      : 'flex',
        flexDirection: 'row',
        flex         : '1 1 auto',
        zIndex       : 2,
        maxWidth     : '100%',
        minWidth     : 0
    },
    header                        : {
        height         : headerHeight,
        minHeight      : headerHeight,
        maxHeight      : headerHeight,
        display        : 'flex',
        padding        : '24px',
        backgroundImage: 'url("../../assets/images/backgrounds/header-bg.png")',
        backgroundColor: theme.palette.primary.dark,
        color          : theme.palette.primary.contrastText,
        backgroundSize : 'cover'
    },
    headerSidebarToggleButton     : {
        color: theme.palette.primary.contrastText
    },
    headerContent                 : {
        flex      : '1 1 auto',
        paddingTop: 16
    },
    contentCardWrapper            : {
        display : 'flex ',
        flex    : '1 1 auto',
        overflow: 'visible',
        minWidth: 0
    },
    contentCardWrapperInnerSidebar: {
        padding : 24,
        display : 'block',
        overflow: 'auto'
    },
    contentCard                   : {
        display        : 'flex',
        backgroundColor: 'white',
        flexDirection  : 'column',
        flex           : '1 1 auto',
        boxShadow      : '0px 4px 5px -2px rgba(0,0,0,0.2), 0px 7px 10px 1px rgba(0,0,0,0.14), 0px 2px 16px 1px rgba(0,0,0,0.12)',
        overflow       : 'auto'
    },
    toolbar                       : {
        height      : toolbarHeight,
        minHeight   : toolbarHeight,
        display     : 'flex',
        alignItems  : 'center',
        padding     : '0 24px',
        borderBottom: '1px solid rgba(0,0,0,0.12)'
    },
    content                       : {
        flex   : '1 0 auto',
        padding: 24
    },
    sidebarWrapper                : {
        backgroundColor             : 'transparent',
        [theme.breakpoints.up('md')]: {
            position: 'relative'
        }
    },
    sidebar                       : {
        [theme.breakpoints.up('lg')]: {
            backgroundColor: 'transparent',
            position       : 'relative',
            border         : 'none'
        },
        width                       : drawerWidth,
        height                      : '100%'

    },
    sidebarHeader                 : {
        height         : headerHeight,
        minHeight      : headerHeight,
        padding        : 24,
        backgroundColor: theme.palette.primary.dark,
        color          : theme.palette.primary.contrastText
    },
    sidebarHeaderInnerSidebar     : {
        backgroundColor: 'transparent',
        color          : 'initial',
        height         : 'auto',
        minHeight      : 'auto'
    },
    sidebarContent                : {
        padding: 24

    }
});

class FusePageSimple extends React.Component {
    state = {
        mobileOpen: false
    };

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    render()
    {
        const {classes, sidebarHeader, sidebarContent, header, content, contentToolbar, sidebarInner, sidebarPosition, singleScroll} = this.props;

        const Sidebar = (
            <React.Fragment>
                {sidebarHeader && (
                    <div className={classNames(classes.sidebarHeader, sidebarInner && classes.sidebarHeaderInnerSidebar)}>
                        <span className="h4">
                            {sidebarHeader}
                        </span>
                    </div>
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
                        type="temporary"
                        anchor={sidebarPosition}
                        open={this.state.mobileOpen}
                        classes={{
                            paper: classes.sidebar
                        }}
                        onClose={this.handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}>
                        {Sidebar}
                    </Drawer>
                </Hidden>

                <Hidden mdDown>
                    <Drawer
                        type="permanent"
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

        const headerContent = (
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
        );

        return (
            <div className={classNames(classes.root, singleScroll && classes.singleScroll)}>

                {header && sidebarInner && headerContent}

                <div className={classes.contentWrapper}>

                    {(sidebarPosition === 'left') && SidebarWrapper}

                    <div className={classNames(classes.contentCardWrapper, sidebarInner && classes.contentCardWrapperInnerSidebar)}>

                        <div className={classes.contentCard}>

                            {header && !sidebarInner && headerContent}

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
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(FusePageSimple);