import React, {useEffect, useRef} from 'react';
import {FusePageCarded} from '@fuse';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import withReducer from 'app/store/withReducer';
import MailList from './mails/MailList';
import MailDetails from './mail/MailDetails';
import MailsToolbar from './mails/MailsToolbar';
import MailToolbar from './mail/MailToolbar';
import MailAppHeader from './MailAppHeader';
import MailAppSidebarHeader from './MailAppSidebarHeader';
import MailAppSidebarContent from './MailAppSidebarContent';
import * as Actions from './store/actions';
import reducer from './store/reducers';

function MailApp(props)
{
    const pageLayout = useRef(null);

    useEffect(() => {
        props.getFilters();
        props.getFolders();
        props.getLabels();
    }, []);

    return (
        <FusePageCarded
            classes={{
                root   : "w-full",
                content: "flex flex-col",
                header : "items-center min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                <MailAppHeader pageLayout={pageLayout}/>
            }
            contentToolbar={
                props.match.params.mailId ? (
                    <MailToolbar/>
                ) : (
                    <MailsToolbar/>
                )
            }
            content={
                props.match.params.mailId ? (
                    <MailDetails/>
                ) : (
                    <MailList/>
                )
            }
            leftSidebarHeader={
                <MailAppSidebarHeader/>
            }
            leftSidebarContent={
                <MailAppSidebarContent/>
            }
            ref={pageLayout}
            innerScroll
        />
    )
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getFilters: Actions.getFilters,
        getFolders: Actions.getFolders,
        getLabels : Actions.getLabels
    }, dispatch);
}

export default withReducer('mailApp', reducer)(connect(null, mapDispatchToProps)(MailApp));
