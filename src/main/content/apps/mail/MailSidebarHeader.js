import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles/index';
import {Icon, MenuItem, TextField} from 'material-ui';
import classNames from 'classnames';

const styles = theme => ({
    root             : {},
    logo             : {},
    logoIcon         : {
        fontSize: '32px!important'
    },
    logoText         : {
        fontSize: 24
    },
    accountSelect    : {},
    accountSelectMenu: {}
});

class MailSidebarHeader extends Component {

    state = {
        selectedAccount: 'creapond'
    };

    onAccountChange = (ev) => {
        this.setState({selectedAccount: ev.target.value});
    };

    accounts = {
        'creapond'    : 'johndoe@creapond.com',
        'withinpixels': 'johndoe@withinpixels.com'
    };

    render()
    {
        const {classes} = this.props;

        return (
            <div className={classNames(classes.root, "flex flex-col justify-center h-full p-24")}>

                <div className={classNames(classes.logo, "flex items-center flex-1")}>
                    <Icon className={classNames(classes.logoIcon, "mr-16")}>mail</Icon>
                    <span className={classes.logoText}>Mailbox</span>
                </div>

                <TextField
                    id="account-selection"
                    select
                    label={this.state.selectedAccount}
                    className={classes.accountSelect}
                    value={this.state.selectedAccount}
                    onChange={this.onAccountChange}
                    SelectProps={{
                        MenuProps: {
                            className: classes.accountSelectMenu
                        }
                    }}
                    placeholder="Select Account"
                    margin="normal"
                >
                    {Object.keys(this.accounts).map((key, value) => (
                        <MenuItem key={key} value={key}>
                            {this.accounts[key]}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(MailSidebarHeader);
