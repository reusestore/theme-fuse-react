import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import List, {ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Avatar, Typography} from 'material-ui';
import _ from 'lodash';
import MailChip from './MailChip';
import classNames from 'classnames';

const pathToRegexp = require('path-to-regexp');

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

    render()
    {
        const {mails, labels, classes, match, history} = this.props;
        const toPath = pathToRegexp.compile(match.path);

        if ( !mails.length )
        {
            return 'loading...';
        }

        return (
            <List className={classes.mailList}>
                {mails.map(mail => (
                    <ListItem
                        dense
                        button
                        key={mail.id}
                        onClick={() => history.push(toPath(
                            {
                                ...match.params,
                                mailId: mail.id
                            }
                        ))}
                        className={classNames(classes.mailItem, 'py-16 pl-8 pr-24')}>

                        <Checkbox tabIndex={-1} disableRipple/>

                        <div className="flex flex-col relative overflow-hidden">

                            <div className="flex items-center justify-between px-16 pb-8">
                                <div className="flex items-center">
                                    {mail.from.avatar ? (
                                        <Avatar className="mr-8" alt={mail.from.name} src={mail.from.avatar}/>
                                    ) : (
                                        <Avatar className={`mr-8 ${classes.avatar}`}>
                                            {mail.from.name[0]}
                                        </Avatar>
                                    )}
                                    <Typography type="subheading">{mail.from.name}</Typography>
                                </div>
                                <Typography type="subheading">{mail.time}</Typography>
                            </div>

                            <div className="flex flex-col px-16 py-0">
                                <Typography className="truncate">{mail.subject}</Typography>
                                <Typography color="secondary" className="truncate">{_.truncate(mail.message.replace(/<(?:.|\n)*?>/gm, ''), {'length': 180})}</Typography>
                            </div>

                            <div className={`flex justify-end ${classes.labels}`}>
                                {mail.labels.map(label => (
                                    <MailChip className="mr-1" title={_.find(labels, {id: label}).title} color={_.find(labels, {id: label}).color} key={label}/>
                                ))}
                            </div>
                        </div>
                    </ListItem>
                ))}
            </List>
        );
    }
};

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({}, dispatch);
}

function mapStateToProps({mailApp})
{
    return {
        mails      : mailApp.mails.entities,
        currentMail: mailApp.mails.currentMail,
        folders    : mailApp.folders,
        labels     : mailApp.labels,
        filters    : mailApp.filters
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(MailList)));
