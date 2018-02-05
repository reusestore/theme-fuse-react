import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import MailListItem from './MailListItem';
import FuseUtils from '../../../../core/fuseUtils';
import {List, Typography} from 'material-ui';
import _ from 'lodash';


const styles = theme => ({
    mailList: {
        padding: 0
    },
    mailItem: {},
    avatar  : {
        backgroundColor: theme.palette.primary[500]
    },
    labels  : {}
});

class MailList extends Component {

    getFilteredArray = (entities, searchText) => {
        const arr = Object.keys(entities).map((id) => entities[id]);
        if ( searchText.length === 0 )
        {
            return arr;
        }
        return FuseUtils.filterArrayByString(arr, searchText);
    };

    render()
    {
        const {mails, classes, searchText} = this.props;

        const arr = this.getFilteredArray(mails, searchText);

        if ( arr.length === 0 )
        {
            return (
                <div className="flex items-center justify-center h-full">
                    <Typography color="textSecondary" variant="headline">
                        There are no messages!
                    </Typography>
                </div>
            );
        }

        return (
            <List className={classes.mailList}>
                {
                    arr.map((mail) => (
                            <MailListItem mail={mail} key={mail.id}/>
                        )
                    )}
            </List>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({}, dispatch);
}

function mapStateToProps({mailApp})
{
    return {
        mails      : mailApp.mails.entities,
        searchText : mailApp.mails.searchText,
        currentMail: mailApp.mails.currentMail,
        folders    : mailApp.folders,
        labels     : mailApp.labels,
        filters    : mailApp.filters
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(MailList)));
