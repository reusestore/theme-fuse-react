import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as Actions from 'auth/store/actions/index';
import {bindActionCreators} from 'redux';
import {Link, withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles/index';
import {Button, Card, CardContent, Divider, Typography} from '@material-ui/core';
import classNames from 'classnames';
import {TextFieldFormsy, FuseAnimate} from '@fuse';
import Formsy from 'formsy-react';

const styles = theme => ({
    root : {
        background    : "url('/assets/images/backgrounds/dark-material-bg.jpg') no-repeat",
        backgroundSize: 'cover'
    },
    intro: {
        color: '#ffffff'
    },
    card : {
        width   : '100%',
        maxWidth: 400
    }
});

class Login extends Component {
    state = {
        canSubmit: false
    };

    form = React.createRef();

    disableButton = () => {
        this.setState({canSubmit: false});
    };

    enableButton = () => {
        this.setState({canSubmit: true});
    };

    onSubmit = (model) => {
        this.props.submitLogin(model);
    };

    loginWithFireBase = () => {
        const model = this.form.getModel();
        this.props.loginWithFireBase(model);
    };

    componentDidUpdate(prevProps, prevState)
    {
        if ( this.props.login.error && (this.props.login.error.username || this.props.login.error.password) )
        {
            this.form.updateInputsWithError({
                ...this.props.login.error
            });

            this.props.login.error = null;
            this.disableButton();
        }

        if ( this.props.user.role !== 'guest' )
        {
            const pathname = this.props.location.state && this.props.location.state.redirectUrl ? this.props.location.state.redirectUrl : '/';
            this.props.history.push({
                pathname
            });
        }
        return null;
    }

    render()
    {
        const {classes} = this.props;
        const {canSubmit} = this.state;

        return (
            <div className={classNames(classes.root, "flex flex-col flex-1 flex-no-shrink p-24 md:flex-row md:p-0")}>

                <div
                    className={classNames(classes.intro, "flex flex-col flex-no-grow items-center p-16 text-center md:p-128 md:items-start md:flex-no-shrink md:flex-1 md:text-left")}>

                    <FuseAnimate animation="transition.expandIn">
                        <img className="w-128 mb-32" src="assets/images/logos/fuse.svg" alt="logo"/>
                    </FuseAnimate>

                    <FuseAnimate animation="transition.slideUpIn" delay={300}>
                        <Typography variant="display2" color="inherit" className="font-light">
                            Welcome to the FUSE!
                        </Typography>
                    </FuseAnimate>

                    <FuseAnimate delay={400}>
                        <Typography variant="subheading" color="inherit" className="max-w-512 mt-16">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque. Sed mollis velit
                            facilisis facilisis.
                        </Typography>
                    </FuseAnimate>
                </div>

                <FuseAnimate animation={{translateX: [0, '100%']}}>

                    <Card className={classNames(classes.card, "mx-auto m-16 md:m-0")}>

                        <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">

                            <Typography variant="title" className="md:w-full mb-32">LOGIN TO YOUR ACCOUNT</Typography>

                            <Formsy
                                onValidSubmit={this.onSubmit}
                                onValid={this.enableButton}
                                onInvalid={this.disableButton}
                                ref={(form) => this.form = form}
                                className="flex flex-col justify-center w-full"
                            >
                                <TextFieldFormsy
                                    className="mb-16"
                                    type="text"
                                    name="username"
                                    label="Username/Email"
                                    validations={{
                                        minLength: 4
                                    }}
                                    validationErrors={{
                                        minLength: 'Min character length is 4'
                                    }}
                                    required
                                />

                                <TextFieldFormsy
                                    className="mb-16"
                                    type="password"
                                    name="password"
                                    label="Password"
                                    validations={{
                                        minLength: 4
                                    }}
                                    validationErrors={{
                                        minLength: 'Min character length is 4'
                                    }}
                                    required
                                />

                                <Button
                                    type="submit"
                                    variant="raised"
                                    color="primary"
                                    className="w-full mx-auto mt-16 normal-case"
                                    aria-label="LOG IN"
                                    disabled={!canSubmit}
                                    value="legacy"
                                >
                                    Login
                                </Button>

                                <Button
                                    type="button"
                                    variant="raised"
                                    color="secondary"
                                    className="w-full mx-auto normal-case mt-16"
                                    aria-label="LOG IN"
                                    disabled={!canSubmit}
                                    value="firebase"
                                    onClick={this.loginWithFireBase}
                                >
                                    Log in with Firebase
                                </Button>
                            </Formsy>

                            <div className="flex flex-col items-center justify-center pt-32">
                                <span className="font-medium">Don't have an account?</span>
                                <Link className="font-medium" to="/register">Create an account with Firebase</Link>
                                <Link className="font-medium mt-8" to="/">Back to Dashboard</Link>
                            </div>

                            <div className="flex flex-col items-center pt-48">
                                <Typography className="text-16 font-600 py-8">
                                    Credentials for Regular Login
                                </Typography>

                                <Divider className="mb-16 w-256"/>

                                <div className="text-center">
                                    <Typography className="font-500 mb-8">Admin Role Permission</Typography>
                                    <div className="flex justify-center mb-4">
                                        <Typography className="mr-8" color="textSecondary">Username:</Typography>
                                        <Typography>admin</Typography>
                                    </div>
                                    <div className="flex justify-center">
                                        <Typography className="mr-8" color="textSecondary">Password:</Typography>
                                        <Typography>admin</Typography>
                                    </div>
                                </div>

                                <Divider className="my-24 w-32"/>

                                <div className="text-center">
                                    <Typography className="font-500 mb-8">Staff Role Permission</Typography>
                                    <div className="flex justify-center mb-4">
                                        <Typography className="mr-8" color="textSecondary">Username:</Typography>
                                        <Typography>staff</Typography>
                                    </div>
                                    <div className="flex justify-center">
                                        <Typography className="mr-8" color="textSecondary">Password:</Typography>
                                        <Typography>staff</Typography>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </FuseAnimate>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        submitLogin      : Actions.submitLogin,
        loginWithFireBase: Actions.loginWithFireBase
    }, dispatch);
}

function mapStateToProps({auth})
{
    return {
        login: auth.login,
        user : auth.user
    }
}


export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(Login)));