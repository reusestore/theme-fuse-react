import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {Button, Card, CardContent, Checkbox, Divider, FormControl, FormControlLabel, Input, InputLabel, Typography} from '@material-ui/core';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import {FuseAnimate} from '@fuse';

const styles = theme => ({
    root: {
        background    : "url('/assets/images/backgrounds/dark-material-bg.jpg') no-repeat",
        backgroundSize: 'cover'
    },
    card: {
        width   : '100%',
        maxWidth: 384
    }
});

class LoginPage extends Component {
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
            <div className={classNames(classes.root, "flex flex-col flex-auto flex-no-shrink items-center justify-center p-32")}>

                <div className="flex flex-col items-center justify-center w-full">

                    <FuseAnimate animation="transition.expandIn">

                        <Card className={classes.card}>

                            <CardContent className="flex flex-col items-center justify-center p-32">

                                <img className="w-128 m-32" src="assets/images/logos/fuse.svg" alt="logo"/>

                                <Typography variant="title" className="mt-16 mb-32">LOGIN TO YOUR ACCOUNT</Typography>

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

                                        <Link className="font-medium" to="/pages/auth/forgot-password">
                                            Forgot Password?
                                        </Link>
                                    </div>

                                    <Button variant="raised" color="primary" className="w-224 mx-auto mt-16" aria-label="LOG IN"
                                            disabled={!this.canBeSubmitted()}>
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
                                    <Link className="font-medium" to="/pages/auth/register">Create an account</Link>
                                </div>

                            </CardContent>
                        </Card>
                    </FuseAnimate>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(LoginPage);
