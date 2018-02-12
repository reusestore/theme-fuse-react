import React from 'react';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import {Icon, IconButton} from 'material-ui';
import classNames from 'classnames';
import {FuseScrollbars} from '@fuse';

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
        minWidth     : 0,
        height       : '100%'
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
        backgroundColor: theme.palette.background.paper,
        color          : theme.palette.text.paper,
        flexDirection  : 'column',
        flex           : '1 1 auto',
        boxShadow      : theme.shadows[7],
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
        backgroundColor: 'transparent',
        '&.permanent'  : {
            [theme.breakpoints.up('md')]: {
                position: 'relative'
            }
        }
    },
    sidebar                       : {
        '&.permanent': {
            [theme.breakpoints.up('lg')]: {
                backgroundColor: 'transparent',
                position       : 'relative',
                border         : 'none'
            }
        },
        width        : drawerWidth,
        height       : '100%'

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
        color          : 'inherit',
        height         : 'auto',
        minHeight      : 'auto'
    },
    sidebarContent                : {
        padding: 24

    }
});

class FusePageSimple extends React.Component {
    state = {
        leftSidebar : false,
        rightSidebar: false
    };

    componentDidMount()
    {
        if ( this.props.onRef )
        {
            this.props.onRef(this);
        }
    }

    componentWillUnmount()
    {
        if ( this.props.onRef )
        {
            this.props.onRef(undefined)
        }
    }

    handleDrawerToggle = (sidebarId) => {
        this.setState({[sidebarId]: !this.state[sidebarId]});
    };

    toggleLeftSidebar = () => {
        this.handleDrawerToggle('leftSidebar');
    };

    toggleRightSidebar = () => {
        this.handleDrawerToggle('rightSidebar');
    };

    toggleSidebar = (id) => {
        this.handleDrawerToggle(id);
    };

    render()
    {
        const {classes, leftSidebarHeader, leftSidebarContent, leftSidebarVariant, rightSidebarHeader, rightSidebarContent, rightSidebarVariant, header, content, contentToolbar, sidebarInner, singleScroll} = this.props;
        const isRightSidebar = rightSidebarHeader || rightSidebarContent;
        const isLeftSidebar = leftSidebarHeader || leftSidebarContent;

        const Sidebar = (header, content, variant) => (
            <FuseScrollbars enable={!singleScroll}>
                {header && (
                    <div className={classNames(classes.sidebarHeader, variant, sidebarInner && classes.sidebarHeaderInnerSidebar)}>
                        {header}
                    </div>
                )}

                {content && (
                    <div className={classes.sidebarContent}>
                        {content}
                    </div>
                )}
            </FuseScrollbars>
        );

        const SidebarWrapper = (header, content, sidebarId, variant) => (
            <React.Fragment>
                <Hidden lgUp={variant === 'permanent'}>
                    <Drawer
                        className={classNames(classes.sidebarWrapper, variant)}
                        variant="temporary"
                        anchor={sidebarId === 'leftSidebar' ? 'left' : 'right'}
                        open={this.state[sidebarId]}
                        onClose={(ev) => this.handleDrawerToggle(sidebarId)}
                        classes={{
                            paper: classNames(classes.sidebar, variant)
                        }}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                        onClick={(ev) => this.handleDrawerToggle(sidebarId)}>
                        {Sidebar(header, content, variant)}
                    </Drawer>
                </Hidden>
                {variant === 'permanent' && (
                    <Hidden mdDown>
                        <Drawer
                            variant="permanent"
                            className={classNames(classes.sidebarWrapper, variant)}
                            open={this.state[sidebarId]}
                            classes={{
                                paper: classNames(classes.sidebar, variant)
                            }}>
                            {Sidebar(header, content, variant)}
                        </Drawer>
                    </Hidden>
                )}
            </React.Fragment>
        );

        const headerContent = (
            <div className={classes.header}>

                {isLeftSidebar && (
                    <Hidden lgUp={leftSidebarVariant !== 'temporary'}>
                        <IconButton className={classes.headerSidebarToggleButton}
                                    aria-label="open left sidebar"
                                    onClick={(ev) => this.handleDrawerToggle('leftSidebar')}>
                            <Icon>menu</Icon>
                        </IconButton>
                    </Hidden>
                )}

                {header && (
                    <span className={classes.headerContent}>
                        {header}
                    </span>
                )}

                {isRightSidebar && (
                    <Hidden lgUp={rightSidebarVariant !== 'temporary'}>
                        <IconButton className={classes.headerSidebarToggleButton}
                                    aria-label="open right sidebar"
                                    onClick={(ev) => this.handleDrawerToggle('rightSidebar')}>
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

                    {isLeftSidebar && SidebarWrapper(leftSidebarHeader, leftSidebarContent, 'leftSidebar', leftSidebarVariant || 'permanent')}

                    <FuseScrollbars className={classNames(classes.contentCardWrapper, sidebarInner && classes.contentCardWrapperInnerSidebar)}
                                    enable={!singleScroll && sidebarInner}>

                        <FuseScrollbars className={classes.contentCard} enable={!singleScroll && !sidebarInner}>

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

                        </FuseScrollbars>
                    </FuseScrollbars>

                    {isRightSidebar && SidebarWrapper(rightSidebarHeader, rightSidebarContent, 'rightSidebar', rightSidebarVariant || 'permanent')}

                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(FusePageSimple);