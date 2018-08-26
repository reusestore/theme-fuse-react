import React, {Component} from 'react';
import Formsy from 'formsy-react';
import {TextFieldFormsy} from '@fuse';
import {withStyles, Button} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import * as Actions from 'auth/store/actions';
import {withRouter} from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';

const styles = theme => ({
    root: {
        width: '100%'
    }
});

class FirebaseRegisterTab extends Component {
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
        if ( this.props.register.error && (this.props.register.error.username || this.props.register.error.password || this.props.register.error.email) )
        {
            this.form.updateInputsWithError({
                ...this.props.register.error
            });

            this.props.register.error = null;
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
            <div className={classes.root}>
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
            </div>
        );
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
        register: auth.register,
        user : auth.user
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(FirebaseRegisterTab)));
