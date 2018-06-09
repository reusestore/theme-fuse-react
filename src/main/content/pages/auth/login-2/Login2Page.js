import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {Button, Card, CardContent, Checkbox, Divider, FormControl, FormControlLabel, Input, InputLabel, Typography} from '@material-ui/core';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import {FuseAnimate} from '@fuse';

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

class Login2Page extends Component {
    state = {
        email   : '',
        password: '',
        remember: true
    };

    handleChange = (event) => {
        this.setState(_.set({...this.state}, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value));
    };

    canBeSubmitted()
    {
        const {email, password} = this.state;
        return (
            email.length > 0 && password.length > 0
        );
    }

    render()
    {
        const {classes} = this.props;
        const {email, password, remember} = this.state;

        return (
            <div className={classNames(classes.root, "flex flex-col flex-auto flex-no-shrink p-24 md:flex-row md:p-0")}>

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

                            <form name="loginForm" noValidate className="flex flex-col justify-center w-full">

                                <FormControl className="mb-16" fullWidth required>
                                    <InputLabel>Email</InputLabel>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={this.handleChange}
                                    />
                                </FormControl>

                                <FormControl className="mb-16" fullWidth required>
                                    <InputLabel>Password</InputLabel>
                                    <Input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={this.handleChange}
                                    />
                                </FormControl>

                                <div className="flex items-center justify-between">

                                    <FormControl>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    name="remember"
                                                    checked={remember}
                                                    onChange={this.handleChange}/>
                                            }
                                            label="Remember Me"
                                        />
                                    </FormControl>

                                    <Link className="font-medium" to="/pages/auth/forgot-password-2">
                                        Forgot Password?
                                    </Link>
                                </div>

                                <Button
                                    variant="raised"
                                    color="primary"
                                    className="w-full mx-auto mt-16"
                                    aria-label="LOG IN"
                                    disabled={!this.canBeSubmitted()}
                                >
                                    LOGIN
                                </Button>

                            </form>

                            <div className="my-24 flex items-center justify-center">
                                <Divider className="w-32"/>
                                <span className="mx-8 font-bold">OR</span>
                                <Divider className="w-32"/>
                            </div>

                            <Button variant="raised" color="secondary" size="small"
                                    className="normal-case w-192 mb-8">
                                Log in with Google
                            </Button>

                            <Button variant="raised" color="primary" size="small"
                                    className="normal-case w-192">
                                Log in with Facebook
                            </Button>

                            <div className="flex flex-col items-center justify-center pt-32 pb-24">
                                <span className="font-medium">Don't have an account?</span>
                                <Link className="font-medium" to="/pages/auth/register-2">Create an account</Link>
                            </div>

                        </CardContent>
                    </Card>
                </FuseAnimate>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Login2Page);
