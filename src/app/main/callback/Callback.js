import React, {useEffect} from 'react';
import {FuseSplashScreen} from '@fuse';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import {withRouter} from 'react-router-dom';
import auth0Service from 'app/services/auth0Service';
import * as userActions from 'app/auth/store/actions';
import * as Actions from 'app/store/actions';

function Callback(props)
{
    useEffect(() => {
        auth0Service.onAuthenticated(() => {
            props.showMessage({message: 'Logging in with Auth0'});

            /**
             * Retrieve user data from Auth0
             */
            auth0Service.getUserData().then(tokenData => {
                props.setUserDataAuth0(tokenData);
                props.showMessage({message: 'Logged in with Auth0'});
            });
        });
    }, []);

    return (
        <FuseSplashScreen/>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
            setUserDataAuth0: userActions.setUserDataAuth0,
            showMessage     : Actions.showMessage,
            hideMessage     : Actions.hideMessage
        },
        dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(Callback));
