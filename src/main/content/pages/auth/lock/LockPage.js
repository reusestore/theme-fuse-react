import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {Avatar, Button, Card, CardContent, FormControl, Icon, Input, InputLabel, Typography} from '@material-ui/core';
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
        maxWidth: 420
    }
});

class LockPage extends Component {
    state = {
        password: ''
    };

    handleChange = (event) => {
        this.setState(_.set({...this.state}, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value));
    };

    canBeSubmitted()
    {
        const {password} = this.state;
        return (
            password.length > 0
        );
    }

    render()
    {
        const {classes} = this.props;
        const {password} = this.state;

        return (
            <div className={classNames(classes.root, "flex flex-col flex-auto flex-no-shrink items-center justify-center p-32")}>

                <div className="flex flex-col items-center justify-center w-full">

                    <FuseAnimate animation="transition.expandIn">

                        <Card className={classes.card}>

                            <CardContent className="flex flex-col items-center justify-center p-32">

                                <div className="w-full flex flex-col items-center justify-center sm:flex-row sm:justify-start sm:items-center">

                                    <div className="relative mr-16">
                                        <Avatar className="w-72 h-72" src="assets/images/avatars/katherine.jpg"/>
                                        <Icon className="text-36 absolute pin-r pin-b" color="error">lock</Icon>
                                    </div>

                                    <div>
                                        <Typography variant="title" className="mb-8">YOUR SESSION IS LOCKED</Typography>
                                        <Typography color="textSecondary">
                                            Due to inactivity, your session is locked. Enter your password to continue.
                                        </Typography>
                                    </div>
                                </div>

                                <form name="lockForm" noValidate className="flex flex-col justify-center w-full mt-32">

                                    <FormControl className="mb-16" fullWidth>
                                        <InputLabel>Username</InputLabel>
                                        <Input
                                            type="email"
                                            name="email"
                                            value="Katherine"
                                            disabled
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

                                    <Button
                                        variant="raised"
                                        color="primary"
                                        className="w-224 mx-auto mt-16"
                                        aria-label="Reset"
                                        disabled={!this.canBeSubmitted()}
                                    >
                                        UNLOCK
                                    </Button>

                                </form>

                                <div className="flex flex-col items-center justify-center pt-32 pb-24">
                                    <Link className="font-medium" to="/pages/auth/login">Are you not Katherine?</Link>
                                </div>

                            </CardContent>
                        </Card>
                    </FuseAnimate>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(LockPage);
