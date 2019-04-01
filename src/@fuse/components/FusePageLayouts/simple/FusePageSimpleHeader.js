import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import connect from 'react-redux/es/connect/connect';

function FusePageSimpleHeader(props)
{
    return (
        <div className={props.classes.header}>
            {props.header && (
                <ThemeProvider theme={props.mainThemeDark}>
                    {props.header}
                </ThemeProvider>
            )}
        </div>
    );
}

function mapStateToProps({fuse})
{
    return {
        mainThemeDark: fuse.settings.mainThemeDark
    }
}

export default connect(mapStateToProps)(FusePageSimpleHeader);
