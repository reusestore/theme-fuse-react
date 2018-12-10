import React from 'react';
import {Icon, IconButton} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import * as Actions from 'store/actions';
import connect from 'react-redux/es/connect/connect';

const NavbarMobileToggleButton = ({navbarToggleMobile, children}) => {
    return (
        <IconButton onClick={navbarToggleMobile} color="inherit">
            {children}
        </IconButton>
    );
};

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
