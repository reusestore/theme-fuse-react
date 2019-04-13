import React, {useContext} from 'react';
import {withRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import {FuseScrollbars, FuseMessage, FuseDialog, FuseSuspense} from '@fuse';
import {makeStyles} from '@material-ui/styles';
import {connect} from 'react-redux';
import ToolbarLayout1 from './components/ToolbarLayout1';
import FooterLayout1 from './components/FooterLayout1';
import LeftSideLayout1 from './components/LeftSideLayout1';
import RightSideLayout1 from './components/RightSideLayout1';
import NavbarWrapperLayout1 from './components/NavbarWrapperLayout1';
import SettingsPanel from 'app/fuse-layouts/shared-components/SettingsPanel';
import classNames from 'classnames';
import AppContext from 'app/AppContext';

const useStyles = makeStyles(theme => ({
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
        height  : '100%',
        flex    : '1 1 auto',
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
        '-webkit-overflow-scrolling': 'touch',
        zIndex                      : 2
    }
}));

function Layout1(props)
{
    const appContext = useContext(AppContext);
    const classes = useStyles(props);
    const {routes} = appContext;

    // console.warn('FuseLayout:: rendered');

    switch ( props.config.scroll )
    {
        case 'body':
        {
            return (
                <div id="fuse-layout" className={classNames(classes.root, props.config.mode, 'scroll-' + props.config.scroll)}>

                    {props.config.leftSidePanel.display && (
                        <LeftSideLayout1/>
                    )}

                    <div className="flex flex-1 flex-col overflow-hidden relative">

                        {props.config.toolbar.display && props.config.toolbar.style === 'fixed' && props.config.toolbar.position === 'above' && (
                            <ToolbarLayout1/>
                        )}

                        <FuseScrollbars className="overflow-auto" scrollToTopOnChildChange>

                            {props.config.toolbar.display && props.config.toolbar.style !== 'fixed' && props.config.toolbar.position === 'above' && (
                                <ToolbarLayout1/>
                            )}

                            <div className={classes.wrapper}>

                                {props.config.navbar.display && props.config.navbar.position === 'left' && (
                                    <NavbarWrapperLayout1/>
                                )}

                                <div className={classes.contentWrapper}>

                                    {props.config.toolbar.display && props.config.toolbar.position === 'below' && (
                                        <ToolbarLayout1/>
                                    )}

                                    <div className={classes.content}>

                                        <FuseDialog/>

                                        <FuseSuspense>
                                            {renderRoutes(routes)}
                                        </FuseSuspense>

                                        {props.children}

                                    </div>

                                    {props.config.footer.display && props.config.footer.position === 'below' && (
                                        <FooterLayout1/>
                                    )}

                                    <SettingsPanel/>

                                </div>

                                {props.config.navbar.display && props.config.navbar.position === 'right' && (
                                    <NavbarWrapperLayout1/>
                                )}
                            </div>

                            {props.config.footer.display && props.config.footer.style !== 'fixed' && props.config.footer.position === 'above' && (
                                <FooterLayout1/>
                            )}

                        </FuseScrollbars>

                        {props.config.footer.display && props.config.footer.style === 'fixed' && props.config.footer.position === 'above' && (
                            <FooterLayout1/>
                        )}

                    </div>

                    {props.config.rightSidePanel.display && (
                        <RightSideLayout1/>
                    )}

                    <FuseMessage/>

                </div>
            );
        }
        case 'content':
        default:
        {
            return (
                <div id="fuse-layout" className={classNames(classes.root, props.config.mode, 'scroll-' + props.config.scroll)}>
                    {props.config.leftSidePanel.display && (
                        <LeftSideLayout1/>
                    )}

                    <div className="flex flex-1 flex-col overflow-hidden relative">

                        {props.config.toolbar.display && props.config.toolbar.position === 'above' && (
                            <ToolbarLayout1/>
                        )}

                        <div className={classes.wrapper}>

                            {props.config.navbar.display && props.config.navbar.position === 'left' && (
                                <NavbarWrapperLayout1/>
                            )}

                            <div className={classes.contentWrapper}>
                                {props.config.toolbar.display && props.config.toolbar.position === 'below' && props.config.toolbar.style === 'fixed' && (
                                    <ToolbarLayout1/>
                                )}

                                <FuseScrollbars className={classes.content} scrollToTopOnChildChange>
                                    {props.config.toolbar.display && props.config.toolbar.position === 'below' && props.config.toolbar.style !== 'fixed' && (
                                        <ToolbarLayout1/>
                                    )}

                                    <FuseDialog/>

                                    <FuseSuspense>
                                        {renderRoutes(routes)}
                                    </FuseSuspense>

                                    {props.children}

                                    {props.config.footer.display && props.config.footer.position === 'below' && props.config.footer.style !== 'fixed' && (
                                        <FooterLayout1/>
                                    )}
                                </FuseScrollbars>

                                {props.config.footer.display && props.config.footer.position === 'below' && props.config.footer.style === 'fixed' && (
                                    <FooterLayout1/>
                                )}

                                <SettingsPanel/>

                            </div>

                            {props.config.navbar.display && props.config.navbar.position === 'right' && (
                                <NavbarWrapperLayout1/>
                            )}
                        </div>

                        {props.config.footer.display && props.config.footer.position === 'above' && (
                            <FooterLayout1/>
                        )}
                    </div>

                    {props.config.rightSidePanel.display && (
                        <RightSideLayout1/>
                    )}

                    <FuseMessage/>
                </div>
            )
        }
    }
}

function mapStateToProps({fuse})
{
    return {
        config: fuse.settings.current.layout.config
    }
}

export default withRouter(connect(mapStateToProps)(Layout1));
