import React, {Component} from 'react';
import {matchRoutes} from 'react-router-config';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import AppContext from 'app/AppContext';
import _ from '@lodash';

class FuseAuthorization extends Component {

    constructor(props, context)
    {
        super(props);
        this.appContext = context;
        this.state = {
            accessGranted: this.hasUserAuthorization(this.props)
        };
    }

    componentDidMount()
    {
        if ( !this.state.accessGranted )
        {
            this.redirectRoute(this.props);
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps)
    {
        if (
            _.isEqual(this.props.location.pathname, nextProps.location.pathname) &&
            _.isEqual(this.props.user, nextProps.user)
        )
        {
            return;
        }

        const accessGranted = this.hasUserAuthorization(nextProps);

        if ( !accessGranted )
        {
            this.redirectRoute(nextProps);
        }

        this.setState({accessGranted});
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        return nextState.accessGranted !== this.state.accessGranted;
    }

    hasUserAuthorization(props)
    {
        const {routes} = this.appContext;
        const {location, user} = props;
        const {pathname} = location;

        const matched = matchRoutes(routes, pathname)[0];

        return (matched && matched.route.auth && matched.route.auth.length > 0) ? matched.route.auth.includes(user.role) : true;
    }

    redirectRoute(props)
    {
        const {location, user, history} = props;
        const {pathname, state} = location;
        /*
        User is guest
        Redirect to Login Page
        */
        if ( user.role === 'guest' )
        {
            history.push({
                pathname: '/login',
                state   : {redirectUrl: pathname}
            });
        }
        /*
        User is member
        User must be on unAuthorized page or just logged in
        Redirect to dashboard or redirectUrl
        */
        else
        {
            const redirectUrl = state && state.redirectUrl ? state.redirectUrl : '/';

            history.push({
                pathname: redirectUrl
            });
        }
    }


    render()
    {
        const {children} = this.props;
        const {accessGranted} = this.state;
        // console.info('Fuse Authorization rendered', accessGranted);
        return accessGranted ? <React.Fragment>{children}</React.Fragment> : null;
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({}, dispatch);
}

function mapStateToProps({fuse, auth})
{
    return {
        user: auth.user
    }
}

FuseAuthorization.contextType = AppContext;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FuseAuthorization));
