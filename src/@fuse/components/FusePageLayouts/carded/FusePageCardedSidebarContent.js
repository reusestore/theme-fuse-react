import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {FuseScrollbars} from '@fuse';
import connect from 'react-redux/es/connect/connect';
import classNames from 'classnames';

function FusePageCardedSidebarContent(props)
{
    const classes = props.classes;

    return (
        <React.Fragment>
            {props.header && (
                <ThemeProvider theme={props.mainThemeDark}>
                    <div className={classNames(classes.sidebarHeader, props.variant)}>
                        {props.header}
                    </div>
                </ThemeProvider>
            )}

            {props.content && (
                <FuseScrollbars className={classes.sidebarContent} enable={props.innerScroll}>
                    {props.content}
                </FuseScrollbars>
            )}
        </React.Fragment>
    )
}

function mapStateToProps({fuse})
{
    return {
        mainThemeDark: fuse.settings.mainThemeDark
    }
}

export default connect(mapStateToProps)(FusePageCardedSidebarContent);
