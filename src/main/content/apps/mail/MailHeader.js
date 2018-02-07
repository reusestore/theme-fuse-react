import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles/index';
import {Icon, Input, Paper} from 'material-ui';
import * as Actions from './store/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const styles = theme => ({
    root         : {
        display: 'flex'
    },
    searchWrapper: {
        width     : '100%',
        height    : 56,
        padding   : 18,
        display   : 'flex',
        alignItems: 'center'
    },
    search       : {
        paddingLeft: 16
    }
});

class MailHeader extends Component {

    render()
    {
        const {classes, setSearchText, searchText} = this.props;

        return (
            <div className={classes.root}>

                <Paper className={classes.searchWrapper} elevation={7} square>

                    <Icon color="action">search</Icon>

                    <Input
                        placeholder="Search"
                        className={classes.search}
                        disableUnderline
                        fullWidth
                        value={searchText}
                        inputProps={{
                            'aria-label': 'Search'
                        }}
                        onChange={setSearchText}
                    />
                </Paper>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        setSearchText: Actions.setSearchText
    }, dispatch);
}

function mapStateToProps({mailApp})
{
    return {
        searchText: mailApp.mails.searchText
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(MailHeader));
