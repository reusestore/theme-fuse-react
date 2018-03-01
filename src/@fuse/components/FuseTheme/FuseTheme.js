import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from 'material-ui';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const defaultThemeOptions = {
    typography: {
        htmlFontSize: 10
    },
    status    : {
        danger: 'orange'
    }
};

export const themes = {
    default: createMuiTheme(defaultThemeOptions),
    dark   : createMuiTheme({
        ...defaultThemeOptions,
        palette: {type: 'dark'}
    })
};

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
    };

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
        console.warn('FuseTheme:: rendered');
        const {children} = this.props;
        const {theme} = this.state;
        const themeExt = {
            ...theme,
            mixins: {
                ...theme.mixins,
                ...this.customMixins(theme)
            }
        };
        console.info(theme);
        console.info(themeExt);
        return (
            <MuiThemeProvider theme={themeExt}>
                {children}
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps({settings})
{
    return {
        selectedTheme: settings.theme
    }
}

export default withRouter(connect(mapStateToProps, null)(FuseTheme));
