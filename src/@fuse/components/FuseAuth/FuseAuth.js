import React, {Component} from 'react';
import {matchRoutes} from 'react-router-config';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';

let redirect = false;

class FuseAuth extends Component {
    componentWillMount()
    {
        this.checkAuth(this.props);
    }

    componentWillReceiveProps(nextProps, nextContext)
    {
        /**
         * If route is changed
         * Update auths
         */
        if ( !_.isEqual(nextProps.location.pathname, this.props.location.pathname) )
        {
            this.checkAuth(nextProps);
        }
    }

    checkAuth(props)
    {
        const matched = matchRoutes(this.props.routes, props.location.pathname)[0];
        if ( matched && matched.route.auth && matched.route.auth.length > 0 )
        {
            // console.info('AUTH!!!', matched.route.auth);
            if ( !matched.route.auth.includes(props.user.role) )
            {
                redirect = true;
                if ( props.user.role === 'guest' )
                {
                    props.history.push({
                        pathname: '/login',
                        state   : {redirectUrl: props.location.pathname}
                    });
                }
                else
                {
                    props.history.push({
                        pathname: '/'
                    });
                }
                // console.info('REDIRECT!!!', props.user.role)
            }
        }
    }

    shouldComponentUpdate(nextProps)
    {
        if ( redirect )
        {
            redirect = false;
            return false;
        }
        else
        {
            return true;
        }
    }

    render()
    {
        const {children} = this.props;

        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        );
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FuseAuth));
