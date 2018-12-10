import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import {withStyles} from '@material-ui/core/styles';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from 'store/actions';
import {FuseScrollbars, FuseMessage, FuseDialog} from '@fuse';
import LeftSidePartial from './partials/LeftSidePartial';
import ToolbarPartial from './partials/ToolbarPartial';
import NavbarWrapperPartial from './partials/NavbarWrapperPartial';
import FooterPartial from './partials/FooterPartial';
import RightSidePartial from './partials/RightSidePartial';
import SettingsPanel from 'fuse-layouts/shared/SettingsPanel';
import classNames from 'classnames';
import AppContext from 'AppContext';

const styles = theme => ({
    root          : {
        position     : 'relative',
        display      : 'flex',
        flexDirection: 'row',
        width        : '100%',
        height       : '100%',
        overflow     : 'hidden',
        '&.boxed'    : {
            maxWidth : 1280,
            margin   : '0 auto',
            boxShadow: theme.shadows[3]
        }
    },
    content       : {
        display                     : 'flex',
        overflow                    : 'auto',
        flex                        : '1 1 auto',
        flexDirection               : 'column',
        width                       : '100%',
        '-webkit-overflow-scrolling': 'touch',
        zIndex                      : 4
    },
    toolbarWrapper: {
        display : 'flex',
        position: 'relative',
        zIndex  : 5
    },
    toolbar       : {
        display: 'flex',
        flex   : '1 0 auto'
    },
    footerWrapper : {
        position: 'relative',
        zIndex  : 5
    },
    footer        : {
        display: 'flex',
        flex   : '1 0 auto'
    }
});

class Layout2 extends Component {

    render()
    {
        const {classes, settings, children} = this.props;
        // console.warn('FuseLayout:: rendered');
        const layoutConfig = settings.layout.config;

        return (
            <AppContext.Consumer>
                {({routes}) => (
                    <div id="fuse-layout" className={classNames(classes.root, layoutConfig.mode)}>

                        {layoutConfig.leftSidePanel.display && (
                            <LeftSidePartial/>
                        )}

                        <div className="flex flex-1 flex-col overflow-hidden relative">

                            {layoutConfig.toolbar.display && layoutConfig.toolbar.position === 'above' && (
                                <ToolbarPartial/>
                            )}

                            {layoutConfig.navbar.display && (
                                <NavbarWrapperPartial/>
                            )}

                            {layoutConfig.toolbar.display && layoutConfig.toolbar.position === 'below' && (
                                <ToolbarPartial/>
                            )}

                            <FuseScrollbars className={classes.content}>

                                <FuseDialog/>

                                <div className="flex flex-1 flex-col relative">
                                    {renderRoutes(routes)}
                                    {children}
                                </div>

                                {layoutConfig.footer.display && layoutConfig.footer.style === 'static' && (
                                    <FooterPartial/>
                                )}
                            </FuseScrollbars>

                            {layoutConfig.footer.display && layoutConfig.footer.style === 'fixed' && (
                                <FooterPartial/>
                            )}

                            <SettingsPanel/>

                        </div>

                        {layoutConfig.rightSidePanel.display && (
                            <RightSidePartial/>
                        )}

                        <FuseMessage/>
                    </div>)}
            </AppContext.Consumer>
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

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout2)));
