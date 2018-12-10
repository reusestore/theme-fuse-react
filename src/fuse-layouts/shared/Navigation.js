import React from 'react';
import connect from 'react-redux/es/connect/connect';
import {FuseNavigation} from '@fuse';
import {withRouter} from 'react-router-dom';

const Navigation = ({navigation, layout}) => {
    return (
        <FuseNavigation navigation={navigation} layout={layout}/>
    );
};

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
