import React from 'react';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import {MuiThemeProvider} from 'material-ui';
import classNames from 'classnames';
import {FuseScrollbars, FuseThemes} from '@fuse';

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
        flex         : '1 1 100%',
        zIndex       : 2,
        maxWidth     : '100%',
        minWidth     : 0,
        minHeight    : 0
    },
    header                   : {
        height   : headerContentHeight,
        minHeight: headerContentHeight,
        maxHeight: headerContentHeight,
        display  : 'flex',
        color    : theme.palette.primary.contrastText
    },
    headerSidebarToggleButton: {
        color: theme.palette.primary.contrastText
    },
    contentCard              : {
        display        : 'flex',
        flex           : '1 1 100%',
        flexDirection  : 'column',
        backgroundColor: theme.palette.background.paper,
        color          : theme.palette.text.paper,
        boxShadow      : theme.shadows[7],
        minHeight      : 0
    },
    toolbar                  : {
        height      : toolbarHeight,
        minHeight   : toolbarHeight,
        display     : 'flex',
        alignItems  : 'center',
        borderBottom: '1px solid ' + theme.palette.divider
    },
    content                  : {
        flex    : '1 1 auto',
        overflow: 'auto'
    },
    sidebarWrapper           : {
        position       : 'absolute',
        backgroundColor: 'transparent',
        zIndex         : 5,
        '&.permanent'  : {
            [theme.breakpoints.up('lg')]: {
                zIndex  : 1,
                position: 'relative'
            }
        }
    },
    sidebar                  : {
        position     : 'absolute',
        '&.permanent': {
            [theme.breakpoints.up('lg')]: {
                backgroundColor: 'transparent',
                position       : 'relative',
                border         : 'none',
                overflow       : 'hidden'
            }
        },
        width        : drawerWidth,
        height       : '100%'

    },
    leftSidebar              : {},
    rightSidebar             : {},
    sidebarHeader            : {
        height         : headerHeight,
        minHeight      : headerHeight,
        color          : theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark,
        '&.permanent'  : {
            [theme.breakpoints.up('lg')]: {
                backgroundColor: 'transparent'
            }
        }
    },
    sidebarContent           : {
        backgroundColor             : theme.palette.background.default,
        color                       : theme.palette.text.primary,
        [theme.breakpoints.up('lg')]: {
            overflow: 'auto'
        }
    },
    backdrop                 : {
        position: 'absolute'
    }
});

class FusePageCarded extends React.Component {
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
        const {classes, rightSidebarHeader, rightSidebarContent, rightSidebarVariant, leftSidebarHeader, leftSidebarContent, leftSidebarVariant, header, content, contentToolbar, sidebarPosition, singleScroll} = this.props;

        const isRightSidebar = rightSidebarHeader || rightSidebarContent;
        const isLeftSidebar = leftSidebarHeader || leftSidebarContent;

        const Sidebar = (header, content, variant) => (
            <React.Fragment>
                {header && (
                    <MuiThemeProvider theme={FuseThemes['dark']}>
                        <div className={classNames(classes.sidebarHeader, variant)}>
                            {header}
                        </div>
                    </MuiThemeProvider>
                )}

                {content && (
                    <FuseScrollbars className={classes.sidebarContent} enable={!singleScroll}>
                        {content}
                    </FuseScrollbars>
                )}
            </React.Fragment>
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
                            paper: classNames(classes.sidebar, variant, sidebarId === 'leftSidebar' ? classes.leftSidebar : classes.rightSidebar)
                        }}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                        container={this.root}
                        BackdropProps={{
                            classes: {
                                root: classes.backdrop
                            }
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
                                paper: classNames(classes.sidebar, variant, sidebarId === 'leftSidebar' ? classes.leftSidebar : classes.rightSidebar)
                            }}>
                            {Sidebar(header, content, variant)}
                        </Drawer>
                    </Hidden>
                )}
            </React.Fragment>
        );

        return (
            <div className={classNames(classes.root, singleScroll && classes.singleScroll)}
                 ref={(root) => {
                     this.root = root;
                 }}>

                <div className={classes.topBg}></div>

                {isLeftSidebar && SidebarWrapper(leftSidebarHeader, leftSidebarContent, 'leftSidebar', leftSidebarVariant || 'permanent')}

                <div className={classNames(classes.contentWrapper, sidebarPosition === 'left' && 'lg:pl-0', sidebarPosition === 'right' && 'lg:pr-0')}>

                    <div className={classes.header}>
                        <MuiThemeProvider theme={FuseThemes['dark']}>
                            {header}
                        </MuiThemeProvider>
                    </div>

                    <div className={classNames(classes.contentCard, singleScroll && 'single-scroll')}>

                        {contentToolbar && (
                            <div className={classes.toolbar}>
                                {contentToolbar}
                            </div>
                        )}

                        {content && (
                            <FuseScrollbars className={classes.content} enable={!singleScroll}>
                                {content}
                            </FuseScrollbars>
                        )}

                    </div>
                </div>

                {isRightSidebar && SidebarWrapper(rightSidebarHeader, rightSidebarContent, 'rightSidebar', rightSidebarVariant || 'permanent')}

            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(FusePageCarded);