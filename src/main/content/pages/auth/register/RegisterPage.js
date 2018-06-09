import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {Button, Card, CardContent, Checkbox, FormControl, FormControlLabel, Input, InputLabel, Typography} from '@material-ui/core';
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

class RegisterPage extends Component {
    state = {
        name                 : '',
        email                : '',
        password             : '',
        passwordConfirm      : '',
        acceptTermsConditions: false
    };

    handleChange = (event) => {
        this.setState(_.set({...this.state}, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value));
    };

    canBeSubmitted()
    {
        const {email, password, passwordConfirm, acceptTermsConditions} = this.state;
        return (
            email.length > 0 &&
            password.length > 0 &&
            password.length > 3 &&
            password === passwordConfirm &&
            acceptTermsConditions
        );
    }

    render()
    {
        const {classes} = this.props;
        const {name, email, password, passwordConfirm, acceptTermsConditions} = this.state;

        return (
            <div className={classNames(classes.root, "flex flex-col flex-auto flex-no-shrink items-center justify-center p-32")}>

                <div className="flex flex-col items-center justify-center w-full">

                    <FuseAnimate animation="transition.expandIn">

                        <Card className={classes.card}>

                            <CardContent className="flex flex-col items-center justify-center p-32">

                                <img className="w-128 m-32" src="assets/images/logos/fuse.svg" alt="logo"/>

                                <Typography variant="title" className="mt-16 mb-32">CREATE AN ACCOUNT</Typography>

                                <form name="registerForm" noValidate className="flex flex-col justify-center w-full">

                                    <FormControl className="mb-16" fullWidth required>
                                        <InputLabel>Name</InputLabel>
                                        <Input
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={this.handleChange}
                                        />
                                    </FormControl>

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

                                    <FormControl className="mb-16" fullWidth required>
                                        <InputLabel>Password (Confirm)</InputLabel>
                                        <Input
                                            type="password"
                                            name="passwordConfirm"
                                            value={passwordConfirm}
                                            onChange={this.handleChange}
                                        />
                                    </FormControl>


                                    <FormControl className="items-center">
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    name="acceptTermsConditions"
                                                    checked={acceptTermsConditions}
                                                    onChange={this.handleChange}/>
                                            }
                                            label="I read and accept terms and conditions"
                                        />
                                    </FormControl>


                                    <Button variant="raised" color="primary" className="w-224 mx-auto mt-16" aria-label="Register"
                                            disabled={!this.canBeSubmitted()}>
                                        CREATE AN ACCOUNT
                                    </Button>

                                </form>

                                <div className="flex flex-col items-center justify-center pt-32 pb-24">
                                    <span className="font-medium">Already have an account?</span>
                                    <Link className="font-medium" to="/pages/auth/login">Login</Link>
                                </div>

                            </CardContent>
                        </Card>
                    </FuseAnimate>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(RegisterPage);
