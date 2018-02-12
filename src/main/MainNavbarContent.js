import React from 'react';
import {withStyles} from 'material-ui/styles/index';
import {withRouter} from 'react-router-dom';
import {FuseNavigation} from '@fuse';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const styles = theme => ({
    root: {}

});

const MainNavbar = ({classes, navigation}) => {
    return (
        <div className={classes.root}>
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
