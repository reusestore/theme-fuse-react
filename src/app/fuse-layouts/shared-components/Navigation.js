import React from 'react';
import {FuseNavigation} from '@fuse';
import connect from 'react-redux/es/connect/connect';
import {withRouter} from 'react-router-dom';
import classNames from 'classnames';

function Navigation(props)
{
    return (
        <FuseNavigation className={classNames("navigation", props.className)} navigation={props.navigation} layout={props.layout} dense={props.dense}/>
    );
}

function mapStateToProps({fuse})
{
    return {
        navigation: fuse.navigation
    }
}

Navigation.defaultProps = {
    layout: "vertical"
};

export default withRouter(connect(mapStateToProps)(Navigation));
