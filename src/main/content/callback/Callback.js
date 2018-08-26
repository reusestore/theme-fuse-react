import React, {Component} from 'react';
import {FuseSplashScreen} from '@fuse';
import auth0Service from 'auth0Service';
import {bindActionCreators} from 'redux';
import * as userActions from 'auth/store/actions';
import * as Actions from 'store/actions';
import connect from 'react-redux/es/connect/connect';
import {withRouter} from 'react-router-dom';

class Callback extends Component {
    componentDidMount()
    {
        auth0Service.lock.on('authenticated', () => {
            this.props.showMessage({message: 'Logging in with Auth0'});

            /**
             * Retrieve user data from Auth0
             */
            auth0Service.getUserData().then(tokenData => {
                this.props.setUserDataAuth0(tokenData);
                this.props.history.push('/');
                this.props.showMessage({message: 'Logged in with Auth0'});
            });
        });
    }

    render()
    {
        return (
            <FuseSplashScreen/>
        );
    }
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
