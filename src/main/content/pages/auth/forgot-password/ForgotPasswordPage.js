import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {Button, Card, CardContent, FormControl, Input, InputLabel, Typography} from '@material-ui/core';
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

class ForgotPasswordPage extends Component {
    state = {
        email: ''
    };

    handleChange = (event) => {
        this.setState(_.set({...this.state}, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value));
    };

    canBeSubmitted()
    {
        const {email} = this.state;
        return (
            email.length > 0
        );
    }

    render()
    {
        const {classes} = this.props;
        const {email} = this.state;

        return (
            <div className={classNames(classes.root, "flex flex-col flex-auto flex-no-shrink items-center justify-center p-32")}>

                <div className="flex flex-col items-center justify-center w-full">

                    <FuseAnimate animation="transition.expandIn">

                        <Card className={classes.card}>

                            <CardContent className="flex flex-col items-center justify-center p-32">

                                <div className="w-128 m-32">
                                    <img src="assets/images/logos/fuse.svg" alt="logo"/>
                                </div>

                                <Typography variant="title" className="mt-16 mb-32">RECOVER YOUR PASSWORD</Typography>

                                <form name="recoverForm" noValidate className="flex flex-col justify-center w-full">

                                    <FormControl className="mb-16" fullWidth required>
                                        <InputLabel>Email</InputLabel>
                                        <Input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={this.handleChange}
                                        />
                                    </FormControl>

                                    <Button
                                        variant="raised"
                                        color="primary"
                                        className="w-224 mx-auto mt-16"
                                        aria-label="Reset"
                                        disabled={!this.canBeSubmitted()}
                                    >
                                        SEND RESET LINK
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

export default withStyles(styles, {withTheme: true})(ForgotPasswordPage);
