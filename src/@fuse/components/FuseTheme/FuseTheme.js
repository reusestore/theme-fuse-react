import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

function FuseTheme({children, mainTheme})
{
    // console.warn('FuseTheme:: rendered',mainTheme);
    return (
        <ThemeProvider theme={mainTheme}>
            {children}
        </ThemeProvider>
    )
}

function mapStateToProps({fuse})
{
    return {
        mainTheme: fuse.settings.mainTheme
    }
}

export default withRouter(connect(mapStateToProps)(React.memo(FuseTheme)));
