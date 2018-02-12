import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from 'material-ui';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const defaultThemeOptions = {
    typography: {
        htmlFontSize: 10,
        subheading  : {
            fontSize: "1.4rem"
        }
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
        theme: this.props.selectedTheme
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

    render()
    {
        console.warn('FuseTheme:: rendered');
        const {children} = this.props;
        const {theme} = this.state;

        return (
            <MuiThemeProvider theme={theme}>
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
