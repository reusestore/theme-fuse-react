import React from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {withRouter} from 'react-router-dom';
import {FuseNavigation} from '@fuse';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const styles = theme => ({
    root: {}

});

function MainNavbar({classes, navigation})
{
    return (
        <div className={classes.root}>
            <FuseNavigation navigation={navigation}/>
        </div>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({}, dispatch);
}

function mapStateToProps({fuse})
{
    return {
        navigation: fuse.navigation
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNavbar)));
