import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import {withStyles} from '@material-ui/core/styles';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from 'store/actions';
import {FuseScrollbars, FuseMessage, FuseDialog} from '@fuse';
import ToolbarPartial from './partials/ToolbarPartial';
import FooterPartial from './partials/FooterPartial';
import LeftSidePartial from './partials/LeftSidePartial';
import RightSidePartial from './partials/RightSidePartial';
import NavbarWrapperPartial from './partials/NavbarWrapperPartial';
import SettingsPanel from 'fuse-layouts/shared/SettingsPanel';
import classNames from 'classnames';
import AppContext from 'AppContext';

const styles = theme => ({
    root          : {
        position          : 'relative',
        display           : 'flex',
        flexDirection     : 'row',
        width             : '100%',
        height            : '100%',
        overflow          : 'hidden',
        backgroundColor   : theme.palette.background.default,
        color             : theme.palette.text.primary,
        '&.boxed'         : {
            maxWidth : 1280,
            margin   : '0 auto',
            boxShadow: theme.shadows[3]
        },
        '&.scroll-body'   : {
            '& $wrapper'       : {
                height  : 'auto',
                flex    : '0 0 auto',
                overflow: 'auto'
            },
            '& $contentWrapper': {},
            '& $content'       : {}
        },
        '&.scroll-content': {
            '& $wrapper'       : {},
            '& $contentWrapper': {},
            '& $content'       : {}
        }
    },
    wrapper       : {
        display : 'flex',
        position: 'relative',
        width   : '100%',
        height  : '100%'
    },
    contentWrapper: {
        display      : 'flex',
        flexDirection: 'column',
        position     : 'relative',
        zIndex       : 3,
        overflow     : 'hidden',
        flex         : '1 1 auto'
    },
    content       : {
        position                    : 'relative',
        display                     : 'flex',
        overflow                    : 'auto',
        flex                        : '1 1 auto',
        flexDirection               : 'column',
        width                       : '100%',
        '-webkit-overflow-scrolling': 'touch'
    }
});

class Layout1 extends Component {

    render()
    {
        const {classes, settings, children} = this.props;
        // console.warn('FuseLayout:: rendered');
        const layoutConfig = settings.layout.config;

        switch ( layoutConfig.scroll )
        {
            case 'body':
            {
                return (
                    <AppContext.Consumer>
                        {({routes}) => (

                            <div id="fuse-layout" className={classNames(classes.root, layoutConfig.mode, 'scroll-' + layoutConfig.scroll)}>

                                {layoutConfig.leftSidePanel.display && (
                                    <LeftSidePartial/>
                                )}

                                <div className="flex flex-1 flex-col overflow-hidden relative">

                                    {layoutConfig.toolbar.display && layoutConfig.toolbar.style === 'fixed' && layoutConfig.toolbar.position === 'above' && (
                                        <ToolbarPartial/>
                                    )}

                                    <FuseScrollbars className="overflow-auto">

                                        {layoutConfig.toolbar.display && layoutConfig.toolbar.style !== 'fixed' && layoutConfig.toolbar.position === 'above' && (
                                            <ToolbarPartial/>
                                        )}

                                        <div className={classes.wrapper}>

                                            {layoutConfig.navbar.display && layoutConfig.navbar.position === 'left' && (
                                                <NavbarWrapperPartial/>
                                            )}

                                            <div className={classes.contentWrapper}>

                                                {layoutConfig.toolbar.display && layoutConfig.toolbar.position === 'below' && (
                                                    <ToolbarPartial/>
                                                )}

                                                <div className={classes.content}>
                                                    <FuseDialog/>
                                                    {renderRoutes(routes)}
                                                    {children}
                                                </div>

                                                {layoutConfig.footer.display && layoutConfig.footer.position === 'below' && (
                                                    <FooterPartial/>
                                                )}

                                                <SettingsPanel/>

                                            </div>

                                            {layoutConfig.navbar.display && layoutConfig.navbar.position === 'right' && (
                                                <NavbarWrapperPartial/>
                                            )}
                                        </div>

                                        {layoutConfig.footer.display && layoutConfig.footer.style !== 'fixed' && layoutConfig.footer.position === 'above' && (
                                            <FooterPartial/>
                                        )}

                                    </FuseScrollbars>

                                    {layoutConfig.footer.display && layoutConfig.footer.style === 'fixed' && layoutConfig.footer.position === 'above' && (
                                        <FooterPartial/>
                                    )}

                                </div>

                                {layoutConfig.rightSidePanel.display && (
                                    <RightSidePartial/>
                                )}

                                <FuseMessage/>

                            </div>
                        )}
                    </AppContext.Consumer>
                );
            }
            case 'content':
            default:
            {
                return (
                    <AppContext.Consumer>
                        {({routes}) => (
                            <div id="fuse-layout" className={classNames(classes.root, layoutConfig.mode, 'scroll-' + layoutConfig.scroll)}>
                                {layoutConfig.leftSidePanel.display && (
                                    <LeftSidePartial/>
                                )}

                                <div className="flex flex-1 flex-col overflow-hidden relative">

                                    {layoutConfig.toolbar.display && layoutConfig.toolbar.position === 'above' && (
                                        <ToolbarPartial/>
                                    )}

                                    <div className={classes.wrapper}>

                                        {layoutConfig.navbar.display && layoutConfig.navbar.position === 'left' && (
                                            <NavbarWrapperPartial/>
                                        )}

                                        <div className={classes.contentWrapper}>
                                            {layoutConfig.toolbar.display && layoutConfig.toolbar.position === 'below' && layoutConfig.toolbar.style === 'fixed' && (
                                                <ToolbarPartial/>
                                            )}

                                            <FuseScrollbars className={classes.content}>
                                                {layoutConfig.toolbar.display && layoutConfig.toolbar.position === 'below' && layoutConfig.toolbar.style !== 'fixed' && (
                                                    <ToolbarPartial/>
                                                )}

                                                <FuseDialog/>

                                                {renderRoutes(routes)}
                                                {children}

                                                {layoutConfig.footer.display && layoutConfig.footer.position === 'below' && layoutConfig.footer.style !== 'fixed' && (
                                                    <FooterPartial/>
                                                )}
                                            </FuseScrollbars>

                                            {layoutConfig.footer.display && layoutConfig.footer.position === 'below' && layoutConfig.footer.style === 'fixed' && (
                                                <FooterPartial/>
                                            )}

                                            <SettingsPanel/>

                                        </div>

                                        {layoutConfig.navbar.display && layoutConfig.navbar.position === 'right' && (
                                            <NavbarWrapperPartial/>
                                        )}
                                    </div>

                                    {layoutConfig.footer.display && layoutConfig.footer.position === 'above' && (
                                        <FooterPartial/>
                                    )}
                                </div>

                                {layoutConfig.rightSidePanel.display && (
                                    <RightSidePartial/>
                                )}

                                <FuseMessage/>
                            </div>
                        )}
                    </AppContext.Consumer>
                );
            }
        }
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

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout1)));
