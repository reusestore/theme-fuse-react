import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {Button, Card, CardContent, TextField, Typography} from '@material-ui/core';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import _ from '@lodash';
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

class ResetPasswordPage extends Component {
    state = {
        name           : '',
        email          : '',
        password       : '',
        passwordConfirm: ''
    };

    handleChange = (event) => {
        this.setState(_.set({...this.state}, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value));
    };

    canBeSubmitted()
    {
        const {email, password, passwordConfirm} = this.state;
        return (
            email.length > 0 &&
            password.length > 0 &&
            password.length > 3 &&
            password === passwordConfirm
        );
    }

    render()
    {
        const {classes} = this.props;
        const {email, password, passwordConfirm} = this.state;

        return (
            <div className={classNames(classes.root, "flex flex-col flex-auto flex-no-shrink items-center justify-center p-32")}>

                <div className="flex flex-col items-center justify-center w-full">

                    <FuseAnimate animation="transition.expandIn">

                        <Card className={classes.card}>

                            <CardContent className="flex flex-col items-center justify-center p-32">

                                <img className="w-128 m-32" src="assets/images/logos/fuse.svg" alt="logo"/>

                                <Typography variant="h6" className="mt-16 mb-32">RESET YOUR PASSWORD</Typography>

                                <form name="resetForm" noValidate className="flex flex-col justify-center w-full">

                                    <TextField
                                        className="mb-16"
                                        label="Email"
                                        autoFocus
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        required
                                        fullWidth
                                    />

                                    <TextField
                                        className="mb-16"
                                        label="Password"
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        required
                                        fullWidth
                                    />

                                    <TextField
                                        className="mb-16"
                                        label="Password (Confirm)"
                                        type="password"
                                        name="passwordConfirm"
                                        value={passwordConfirm}
                                        onChange={this.handleChange}
                                        variant="outlined"
                                        required
                                        fullWidth
                                    />

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className="w-224 mx-auto mt-16"
                                        aria-label="Reset"
                                        disabled={!this.canBeSubmitted()}
                                    >
                                        RESET MY PASSWORD
                                    </Button>

                                </form>

                                <div className="flex flex-col items-center justify-center pt-32 pb-24">
                                    <Link className="font-medium" to="/pages/auth/login">Go back to login</Link>
                                </div>

                            </CardContent>
                        </Card>
                    </FuseAnimate>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(ResetPasswordPage);
