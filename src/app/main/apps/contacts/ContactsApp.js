import React, {useEffect, useRef} from 'react';
import {Fab, Icon} from '@material-ui/core';
import {FusePageSimple, FuseAnimate} from '@fuse';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import withReducer from 'app/store/withReducer';
import ContactsList from './ContactsList';
import ContactsHeader from './ContactsHeader';
import ContactsSidebarContent from './ContactsSidebarContent';
import ContactDialog from './ContactDialog';
import * as Actions from './store/actions';
import reducer from './store/reducers';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    addButton: {
        position: 'absolute',
        right   : 12,
        bottom  : 12,
        zIndex  : 99
    }
});

function ContactsApp(props)
{
    const classes = useStyles(props);
    const pageLayout = useRef(null);

    useEffect(() => {
        props.getContacts(props.match.params);
        props.getUserData();
    }, []);

    useEffect(() => {
        props.getContacts(props.match.params);
    }, [props.location]);

    return (
        <React.Fragment>
            <FusePageSimple
                classes={{
                    contentWrapper: "p-0 sm:p-24 pb-80 sm:pb-80 h-full",
                    content       : "flex flex-col h-full",
                    leftSidebar   : "w-256 border-0",
                    header        : "min-h-72 h-72 sm:h-136 sm:min-h-136"
                }}
                header={
                    <ContactsHeader pageLayout={pageLayout}/>
                }
                content={
                    <ContactsList/>
                }
                leftSidebarContent={
                    <ContactsSidebarContent/>
                }
                sidebarInner
                ref={pageLayout}
                innerScroll
            />
            <FuseAnimate animation="transition.expandIn" delay={300}>
                <Fab
                    color="primary"
                    aria-label="add"
                    className={classes.addButton}
                    onClick={props.openNewContactDialog}
                >
                    <Icon>person_add</Icon>
                </Fab>
            </FuseAnimate>
            <ContactDialog/>
        </React.Fragment>
    )
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getContacts         : Actions.getContacts,
        getUserData         : Actions.getUserData,
        openNewContactDialog: Actions.openNewContactDialog
    }, dispatch);
}

function mapStateToProps({contactsApp})
{
    return {
        contacts          : contactsApp.contacts.entities,
        selectedContactIds: contactsApp.contacts.selectedContactIds,
        searchText        : contactsApp.contacts.searchText,
        user              : contactsApp.user
    }
}

export default withReducer('contactsApp', reducer)(withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactsApp)));
