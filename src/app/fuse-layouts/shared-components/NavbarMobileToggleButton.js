import React from 'react';
import {Icon, IconButton} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import * as Actions from 'app/store/actions';
import connect from 'react-redux/es/connect/connect';

function NavbarMobileToggleButton(props)
{
    return (
        <IconButton className={props.className} onClick={props.navbarToggleMobile} color="inherit" disableRipple>
            {props.children}
        </IconButton>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        navbarToggleMobile: Actions.navbarToggleMobile
    }, dispatch);
}

NavbarMobileToggleButton.defaultProps = {
    children: <Icon>menu</Icon>
};

export default connect(null, mapDispatchToProps)(NavbarMobileToggleButton);
