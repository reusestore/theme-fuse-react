import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import MailList from './MailList';
import * as Actions from './store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom'
import MailDetails from './MailDetails';
import {FusePageCarded, FuseScrollbars} from '@fuse';
import classNames from 'classnames';
import MailToolbar from './MailToolbar';
import MailHeader from './MailHeader';
import MailSidebarHeader from './MailSidebarHeader';
import MailSidebarContent from './MailSidebarContent';
import _ from 'lodash';

const styles = theme => ({
    layoutRoot        : {
        width: '100%'
    },
    layoutContent     : {
        overflow     : 'hidden',
        display      : 'flex',
        flexDirection: 'column'
    },
    layoutHeader      : {
        alignItems: 'center'
    },
    mailListWrapper   : {
        borderRight                   : '1px solid ' + theme.palette.divider,
        display                       : 'block',
        width                         : '50%',
        [theme.breakpoints.down('sm')]: {
            width            : '100%',
            '&.mail-selected': {
                display: 'none'
            }
        }
    },
    mailDetailsWrapper: {
        width                         : '50%',
        [theme.breakpoints.down('sm')]: {
            display          : 'none',
            width            : '100%',
            '&.mail-selected': {
                display: 'block'
            }
        }
    }
});

class MailApp extends Component {

    componentDidMount()
    {
        this.props.getData(this.props.match.params);
    }

    componentDidUpdate(prevProps, prevState)
    {
        if ( !_.isEqual(this.props.location, prevProps.location) )
        {
            this.props.getMails(this.props.match.params);
        }
    }

    render()
    {
        const {classes, currentMail} = this.props;

        return (
            <FusePageCarded
                classes={{
                    root   : classes.layoutRoot,
                    content: classes.layoutContent,
                    header : classes.layoutHeader
                }}
                header={
                    <MailHeader pageLayout={() => this.pageLayout}/>
                }
                contentToolbar={
                    <MailToolbar/>
                }
                content={
                    <div className="flex flex-1 h-full">
                        <FuseScrollbars className={classNames(classes.mailListWrapper, currentMail && "mail-selected", "overflow-auto")}>
                            <MailList/>
                        </FuseScrollbars>
                        <FuseScrollbars className={classNames(classes.mailDetailsWrapper, currentMail && "mail-selected", "p-24 overflow-auto")}>
                            <MailDetails/>
                        </FuseScrollbars>
                    </div>
                }
                leftSidebarHeader={
                    <MailSidebarHeader/>
                }
                leftSidebarContent={
                    <MailSidebarContent/>
                }
                onRef={instance => {
                    this.pageLayout = instance;
                }}
                innerScroll
            />
        )
    };
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getData : Actions.getData,
        getMails: Actions.getMails
    }, dispatch);
}

function mapStateToProps({mailApp})
{
    return {
        currentMail: mailApp.mails.currentMail
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(MailApp)));
