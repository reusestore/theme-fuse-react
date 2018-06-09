import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple, FuseAnimate} from '@fuse';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as Actions from './store/actions';
import ContactsList from 'main/content/apps/contacts/ContactsList';
import ContactsHeader from 'main/content/apps/contacts/ContactsHeader';
import ContactsSidebarContent from 'main/content/apps/contacts/ContactsSidebarContent';
import _ from 'lodash';
import {Button, Icon} from '@material-ui/core';
import ContactDialog from 'main/content/apps/contacts/ContactDialog';

const headerHeight = 160;

const styles = theme => ({
    root                    : {},
    avatar                  : {},
    layoutHeader            : {
        height   : headerHeight,
        minHeight: headerHeight
    },
    layoutContentCardWrapper: {
        padding      : 24,
        paddingBottom: 80
    },
    layoutLeftSidebar       : {
        width: 246
    },
    addButton               : {
        position: 'absolute',
        right   : 12,
        bottom  : 12,
        zIndex  : 99
    }
});

class ContactsApp extends Component {

    componentDidMount()
    {
        this.props.getContacts(this.props.match.params);
        this.props.getUserData();
    }

    componentDidUpdate(prevProps, prevState)
    {
        if ( !_.isEqual(this.props.location, prevProps.location) )
        {
            this.props.getContacts(this.props.match.params);
        }
    }

    render()
    {
        const {classes, openNewContactDialog} = this.props;

        return (
            <React.Fragment>
                <FusePageSimple
                    className={classes.root}
                    classes={{
                        root              : classes.layoutRoot,
                        contentCardWrapper: classes.layoutContentCardWrapper,
                        leftSidebar       : classes.layoutLeftSidebar
                    }}
                    header={
                        <ContactsHeader pageLayout={() => this.pageLayout}/>
                    }
                    content={
                        <ContactsList/>
                    }
                    leftSidebarContent={
                        <ContactsSidebarContent/>
                    }
                    sidebarInner
                    onRef={instance => {
                        this.pageLayout = instance;
                    }}
                />
                <FuseAnimate animation="transition.expandIn" delay={300}>
                    <Button
                        variant="fab"
                        color="primary"
                        aria-label="add"
                        className={classes.addButton}
                        onClick={openNewContactDialog}
                    >
                        <Icon>person_add</Icon>
                    </Button>
                </FuseAnimate>
                <ContactDialog/>
            </React.Fragment>
        )
    };
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

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactsApp)));