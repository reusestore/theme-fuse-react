import React from 'react';
import {Icon, IconButton} from '@material-ui/core';
import _ from '@lodash';
import {bindActionCreators} from 'redux';
import * as Actions from 'app/store/actions';
import connect from 'react-redux/es/connect/connect';

function NavbarFoldedToggleButton(props)
{
    return (
        <IconButton
            className={props.className}
            onClick={() => {
                props.setDefaultSettings(_.set({}, 'layout.config.navbar.folded', !props.settings.layout.config.navbar.folded));
            }}
            color="inherit"
        >
            {props.children}
        </IconButton>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        setDefaultSettings: Actions.setDefaultSettings
    }, dispatch);
}

function mapStateToProps({fuse})
{
    return {
        settings: fuse.settings.current
    }
}

NavbarFoldedToggleButton.defaultProps = {
    children: <Icon>menu</Icon>
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarFoldedToggleButton);
