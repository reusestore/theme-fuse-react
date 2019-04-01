import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {FuseScrollbars} from '@fuse';
import connect from 'react-redux/es/connect/connect';
import classNames from 'classnames';

function FusePageSimpleSidebarContent(props)
{
    const classes = props.classes;

    return (
        <FuseScrollbars enable={props.innerScroll}>
            {props.header && (
                <ThemeProvider theme={props.mainThemeDark}>
                    <div className={classNames(classes.sidebarHeader, props.variant, props.sidebarInner && classes.sidebarHeaderInnerSidebar)}>
                        {props.header}
                    </div>
                </ThemeProvider>
            )}

            {props.content && (
                <div className={classes.sidebarContent}>
                    {props.content}
                </div>
            )}
        </FuseScrollbars>
    );
}

function mapStateToProps({fuse})
{
    return {
        mainThemeDark: fuse.settings.mainThemeDark
    }
}

export default connect(mapStateToProps)(FusePageSimpleSidebarContent);
