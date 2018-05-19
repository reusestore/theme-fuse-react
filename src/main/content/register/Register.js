import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as Actions from 'auth/store/actions/index';
import {bindActionCreators} from 'redux';
import {Link, withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles/index';
import {Button, Card, CardContent, Grow, Slide, Typography} from '@material-ui/core';
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

class Register extends Component {

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
        this.props.registerWithFirebase(model);
    };

    componentDidUpdate(prevProps, prevState)
    {
        if ( this.props.login.error && (this.props.login.error.displayName || this.props.login.error.password) )
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

                            <Typography variant="title" className="md:w-full mb-32">CREATE AN ACCOUNT</Typography>

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
                                    name="displayName"
                                    label="Display name"
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
                                    name="email"
                                    label="Email"
                                    validations="isEmail"
                                    validationErrors={{
                                        isEmail: 'Please enter a valid email'
                                    }}
                                    required
                                />

                                <TextFieldFormsy
                                    className="mb-16"
                                    type="password"
                                    name="password"
                                    label="Password"
                                    validations="equalsField:password-confirm"
                                    validationErrors={{
                                        equalsField: 'Passwords do not match'
                                    }}
                                    required
                                />

                                <TextFieldFormsy
                                    className="mb-16"
                                    type="password"
                                    name="password-confirm"
                                    label="Confirm Password"
                                    validations="equalsField:password"
                                    validationErrors={{
                                        equalsField: 'Passwords do not match'
                                    }}
                                    required
                                />

                                <Button
                                    type="submit"
                                    variant="raised"
                                    color="primary"
                                    className="w-full mx-auto mt-16 normal-case"
                                    aria-label="REGISTER WITH FIREBASE"
                                    disabled={!canSubmit}
                                >
                                    Register with Firebase
                                </Button>
                            </Formsy>

                            <div className="flex flex-col items-center justify-center pt-32 pb-24">
                                <span className="font-medium">Already have an account?</span>
                                <Link className="font-medium" to="/login">Login</Link>
                                <Link className="font-medium mt-8" to="/">Back to Dashboard</Link>
                            </div>

                            <div className="flex flex-col items-center">
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
        registerWithFirebase: Actions.registerWithFirebase
    }, dispatch);
}

function mapStateToProps({auth})
{
    return {
        login: auth.login,
        user : auth.user
    }
}


export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(Register)));