import React from 'react';
import {Divider, Hidden, Icon, IconButton, ListItem, ListItemText} from 'material-ui';
import {withStyles} from 'material-ui/styles/index';
import {Link, withRouter} from 'react-router-dom';
import FuseNavigation from '../core/components/FuseNavigation/FuseNavigation';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const styles = theme => ({
    root        : {},
    drawerHeader: {
        display       : 'flex',
        alignItems    : 'center',
        justifyContent: 'flex-end',
        padding       : '0 8px',
        ...theme.mixins.toolbar
    },
    footer      : {
        position: 'relative',
        zIndex  : 5
    }
});

const MainNavbar = ({classes, parent, navigation}) => {
    return (
        <div>
            <div className={classes.drawerHeader}>
                <Hidden smDown>
                    <IconButton onClick={parent.handleToggleFolded}>
                        <Icon>menu</Icon>
                    </IconButton>
                </Hidden>
                <Hidden mdUp>
                    <IconButton onClick={parent.handleMobileNavbarClose}>
                        <Icon>menu</Icon>
                    </IconButton>
                </Hidden>
            </div>

            <Divider/>

            <FuseNavigation navigation={navigation}/>

        </div>
    );
};

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({}, dispatch);
}

function mapStateToProps({navigation})
{
    return {
        navigation
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNavbar)));
