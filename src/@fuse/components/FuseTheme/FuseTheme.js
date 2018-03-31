import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from 'material-ui';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fuseThemesConfig} from 'fuse-configs/fuseThemesConfig';
import _ from 'lodash';
import {fuseDark} from '@fuse/fuse-colors';
import lightBlue from 'material-ui/es/colors/lightBlue';
import red from 'material-ui/es/colors/red';

const mustHaveOptions = {
    typography: {
        htmlFontSize: 10
    }
};

export const defaults = {
    default    : {
        palette: {
            type     : 'light',
            primary  : fuseDark,
            secondary: {
                light: lightBlue[400],
                main : lightBlue[600],
                dark : lightBlue[700]
            },
            error    : red
        },
        status : {
            danger: 'orange'
        }
    },
    defaultDark: {
        palette: {
            type     : 'dark',
            primary  : fuseDark,
            secondary: {
                light: lightBlue[400],
                main : lightBlue[600],
                dark : lightBlue[700]
            },
            error    : red
        },
        status : {
            danger: 'orange'
        }
    },
};

const themesObj = Object.keys(fuseThemesConfig).length !== 0 ? fuseThemesConfig : defaults;

export let themes = Object.assign({}, ...Object.entries(themesObj).map(([key, value]) => (
    {
        [key]: createMuiTheme(_.merge({}, value, mustHaveOptions))
    }
)));

export let FuseSelectedTheme;

class FuseTheme extends Component {
    state = {
        theme: themes[this.props.selectedTheme]
    };

    changeTheme = (val) => {
        if ( !themes[val] )
        {
            return;
        }
        this.setState({theme: themes[val]});
        FuseSelectedTheme = themes[val];
        this.updateLightDarkThemes(val);
    };

    updateLightDarkThemes(val)
    {
        const theme = themesObj[val];
        themes = {
            ...themes,
            currentThemeDark : createMuiTheme(_.merge({}, theme, {palette: {type: 'dark'}, ...mustHaveOptions})),
            currentThemeLight: createMuiTheme(_.merge({}, theme, {palette: {type: 'light'}, ...mustHaveOptions}))
        }
    }

    componentWillMount()
    {
        this.changeTheme(this.props.selectedTheme);
    }

    componentWillReceiveProps(nextProps)
    {
        this.changeTheme(nextProps.selectedTheme);
    }

    customMixins = (theme) => ({
        border      : (width = 1) => ({
            borderWidth: width,
            borderStyle: 'solid',
            borderColor: theme.palette.divider
        }),
        borderLeft  : (width = 1) => ({
            borderLeftWidth: width,
            borderStyle    : 'solid',
            borderColor    : theme.palette.divider
        }),
        borderRight : (width = 1) => ({
            borderRightWidth: width,
            borderStyle     : 'solid',
            borderColor     : theme.palette.divider
        }),
        borderTop   : (width = 1) => ({
            borderTopWidth: width,
            borderStyle   : 'solid',
            borderColor   : theme.palette.divider
        }),
        borderBottom: (width = 1) => ({
            borderBottomWidth: width,
            borderStyle      : 'solid',
            borderColor      : theme.palette.divider
        })
    });

    render()
    {
        //console.warn('FuseTheme:: rendered');
        const {children} = this.props;
        const {theme} = this.state;
        const themeExt = {
            ...theme,
            mixins: {
                ...theme.mixins,
                ...this.customMixins(theme)
            }
        };
        //console.info(theme);
        //console.info(themeExt);
        return (
            <MuiThemeProvider theme={themeExt}>
                {children}
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps({fuse})
{
    return {
        selectedTheme: fuse.settings.theme
    }
}

export default withRouter(connect(mapStateToProps, null)(FuseTheme));
