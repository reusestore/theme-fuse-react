import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import MailList from './MailList';
import * as Actions from './store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom'
import MailDetails from './MailDetails';
import FusePageCarded from '../../../../core/components/FusePageLayouts/FusePageCarded';
import classNames from 'classnames';
import MailToolbar from './MailToolbar';
import MailHeader from './MailHeader';
import MailSidebarHeader from './MailSidebarHeader';
import MailSidebarContent from './MailSidebarContent';
import _ from 'lodash';
import FuseScrollbars from '../../../../core/components/FuseScrollbars/FuseScrollbars';

const styles = theme => ({
    layoutRoot          : {},
    layoutSidebarContent: {
        padding: 0
    },
    layoutToolbar       : {
        paddingLeft: 8
    },
    layoutContent       : {
        padding      : 0,
        overflow     : 'hidden',
        display      : 'flex',
        flexDirection: 'column'
    },
    layoutHeader        : {
        alignItems: 'center'
    },
    layoutHeaderContent : {
        paddingTop: 0
    },
    mailListWrapper     : {
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
    mailDetailsWrapper  : {
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
    state = {
        mobileOpen: false
    };

    componentDidMount()
    {
        this.props.getData(this.props.match.params);
    }

    componentWillReceiveProps(nextProps)
    {
        if ( !_.isEqual(nextProps.location, this.props.location) )
        {
            this.props.getMails(nextProps.match.params);
        }
    }

    render()
    {
        const {classes, currentMail} = this.props;

        return (
            <FusePageCarded
                classes={{
                    root          : classes.layoutRoot,
                    sidebarContent: classes.layoutSidebarContent,
                    toolbar       : classes.layoutToolbar,
                    content       : classes.layoutContent,
                    header        : classes.layoutHeader,
                    headerContent : classes.layoutHeaderContent
                }}
                header={
                    <MailHeader/>
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
                sidebarPosition="left"
                sidebarHeader={
                    <MailSidebarHeader/>
                }
                sidebarContent={
                    <MailSidebarContent/>
                }
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
