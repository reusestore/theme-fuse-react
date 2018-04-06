import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as Actions from 'auth/store/actions/index';
import {bindActionCreators} from 'redux';
import {Link, withRouter} from 'react-router-dom';
import {withStyles} from 'material-ui/styles/index';
import {Button, Card, CardContent, Divider, Grow, Slide, Typography} from 'material-ui';
import classNames from 'classnames';
import {TextFieldFormsy} from '@fuse';
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

    disableButton = () => {
        this.setState({canSubmit: false});
    };

    enableButton = () => {
        this.setState({canSubmit: true});
    };

    onSubmit = (model) => {
        this.props.submitLogin(model);
    };

    componentWillReceiveProps(nextProps)
    {
        if ( nextProps.login.error.username || nextProps.login.error.password )
        {
            this.form.updateInputsWithError({
                ...nextProps.login.error
            });
            this.disableButton();
        }

        if ( nextProps.user.data )
        {
            const pathname = this.props.location.state && this.props.location.state.redirectUrl ? this.props.location.state.redirectUrl : '/'
            this.props.history.push({
                pathname
            });
        }
    }

    render()
    {
        const {classes} = this.props;
        const {canSubmit} = this.state;

        return (
            <div className={classNames(classes.root, "flex flex-col flex-1 flex-no-shrink p-24 md:flex-row md:p-0")}>

                <div
                    className={classNames(classes.intro, "flex flex-col flex-no-grow items-center p-16 text-center md:p-128 md:items-start md:flex-no-shrink md:flex-1 md:text-left")}>

                    <Grow in={true}>
                        <div className="w-128 mb-32">
                            <img src="assets/images/logos/fuse.svg" alt="logo"/>
                        </div>
                    </Grow>

                    <Grow in={true} timeout={300}>
                        <Typography variant="display2" color="inherit" className="font-light">
                            Welcome to the FUSE!
                        </Typography>
                    </Grow>

                    <Grow in={true} timeout={600}>
                        <Typography variant="subheading" color="inherit" className="max-w-512 mt-16">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque. Sed mollis velit
                            facilisis facilisis.
                        </Typography>
                    </Grow>
                </div>

                <Slide in={true} direction="left">
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
                                    label="Username"
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
                                    type="text"
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
                                    className="w-full mx-auto mt-16"
                                    aria-label="LOG IN"
                                    disabled={!canSubmit}
                                >
                                    LOGIN
                                </Button>
                            </Formsy>

                            <div className="flex flex-col items-center justify-center pt-32 pb-24">
                                <Link className="font-medium" to="/">Back to Dashboard</Link>
                            </div>

                            <div className="flex flex-col items-center">
                                <Typography className="text-16 uppercase font-600 py-8">
                                    Authorization
                                </Typography>

                                <Divider className="mb-16 w-160"/>

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
                </Slide>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        submitLogin: Actions.submitLogin
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