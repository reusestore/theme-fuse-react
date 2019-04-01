import React, {useContext, useEffect} from 'react';
import {makeStyles} from '@material-ui/styles';
import {withRouter} from 'react-router-dom';
import {matchRoutes} from 'react-router-config'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from 'app/store/actions';
import {FuseLayouts} from '@fuse';
import _ from '@lodash';
import AppContext from 'app/AppContext';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor                   : theme.palette.background.default,
        color                             : theme.palette.text.primary,
        '& code:not([class*="language-"])': {
            color          : theme.palette.secondary.dark,
            backgroundColor: '#f5f5f5',
            padding        : '2px 3px',
            borderRadius   : 2,
            lineHeight     : 1.7
        },
        '& table.simple tbody tr td'      : {
            borderColor: theme.palette.divider
        },
        '& table.simple thead tr th'      : {
            borderColor: theme.palette.divider
        },
        '& a:not([role=button])'          : {
            color         : theme.palette.secondary.main,
            textDecoration: 'none',
            '&:hover'     : {
                textDecoration: 'underline'
            }
        },
        '& [class^="border-"]'            : {
            borderColor: theme.palette.divider
        },
        '& [class*="border-"]'            : {
            borderColor: theme.palette.divider
        }
    }
}));

function FuseLayout(props)
{
    const classes = useStyles(props);
    const appContext = useContext(AppContext);

    routeSettingsCheck();

    useEffect(() => {
        routeSettingsCheck();
    }, [props.location.pathname]);

    function routeSettingsCheck()
    {
        const {routes} = appContext;

        const matched = matchRoutes(routes, props.location.pathname)[0];

        if ( matched && matched.route.settings )
        {
            const routeSettings = _.merge({}, props.defaultSettings, matched.route.settings);
            if ( !_.isEqual(props.settings, routeSettings) )
            {
                props.setSettings(_.merge({}, routeSettings));
            }
        }
        else
        {
            if ( !_.isEqual(props.settings, props.defaultSettings) )
            {
                props.resetSettings();
            }
        }
    }

    // console.warn('FuseLayout:: rendered');

    const Layout = FuseLayouts[props.settings.layout.style];
    return (
        <Layout classes={{root: classes.root}} {...props}/>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        setSettings  : Actions.setSettings,
        resetSettings: Actions.resetSettings
    }, dispatch);
}

function mapStateToProps({fuse})
{
    return {
        defaultSettings: fuse.settings.defaults,
        settings       : fuse.settings.current
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FuseLayout));
