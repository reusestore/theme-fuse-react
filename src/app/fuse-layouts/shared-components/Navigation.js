import React from 'react';
import {FuseNavigation} from '@fuse';
import classNames from 'classnames';
import {useSelector} from 'react-redux';

function Navigation(props)
{
    const navigation = useSelector(({fuse}) => fuse.navigation, []);

    return (
        <FuseNavigation className={classNames("navigation", props.className)} navigation={navigation} layout={props.layout} dense={props.dense}/>
    );
}

Navigation.defaultProps = {
    layout: "vertical"
};

export default Navigation;
