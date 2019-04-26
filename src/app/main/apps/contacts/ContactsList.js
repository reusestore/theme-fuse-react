import React, {useEffect, useState} from 'react';
import {Avatar, Checkbox, Icon, IconButton, Typography} from '@material-ui/core';
import {FuseUtils, FuseAnimate} from '@fuse';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import ReactTable from "react-table";
import * as Actions from './store/actions';
import ContactsMultiSelectMenu from './ContactsMultiSelectMenu';

function ContactsList(props)
{
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        function getFilteredArray(entities, searchText)
        {
            const arr = Object.keys(entities).map((id) => entities[id]);
            if ( searchText.length === 0 )
            {
                return arr;
            }
            return FuseUtils.filterArrayByString(arr, searchText);
        }

        if ( props.contacts )
        {
            setFilteredData(getFilteredArray(props.contacts, props.searchText));
        }
    }, [props.contacts, props.searchText]);


    if ( !filteredData )
    {
        return null;
    }

    if ( filteredData.length === 0 )
    {
        return (
            <div className="flex flex-1 items-center justify-center h-full">
                <Typography color="textSecondary" variant="h5">
                    There are no contacts!
                </Typography>
            </div>
        );
    }

    return (
        <FuseAnimate animation="transition.slideUpIn" delay={300}>
            <ReactTable
                className="-striped -highlight h-full sm:rounded-16 overflow-hidden"
                getTrProps={(state, rowInfo, column) => {
                    return {
                        className: "cursor-pointer",
                        onClick  : (e, handleOriginal) => {
                            if ( rowInfo )
                            {
                                props.openEditContactDialog(rowInfo.original);
                            }
                        }
                    }
                }}
                data={filteredData}
                columns={[
                    {
                        Header   : () => (
                            <Checkbox
                                onClick={(event) => {
                                    event.stopPropagation();
                                }}
                                onChange={(event) => {
                                    event.target.checked ? props.selectAllContacts() : props.deSelectAllContacts();
                                }}
                                checked={props.selectedContactIds.length === Object.keys(props.contacts).length && props.selectedContactIds.length > 0}
                                indeterminate={props.selectedContactIds.length !== Object.keys(props.contacts).length && props.selectedContactIds.length > 0}
                            />
                        ),
                        accessor : "",
                        Cell     : row => {
                            return (<Checkbox
                                    onClick={(event) => {
                                        event.stopPropagation();
                                    }}
                                    checked={props.selectedContactIds.includes(row.value.id)}
                                    onChange={() => props.toggleInSelectedContacts(row.value.id)}
                                />
                            )
                        },
                        className: "justify-center",
                        sortable : false,
                        width    : 64
                    },
                    {
                        Header   : () => (
                            props.selectedContactIds.length > 0 && (
                                <ContactsMultiSelectMenu/>
                            )
                        ),
                        accessor : "avatar",
                        Cell     : row => (
                            <Avatar className="mr-8" alt={row.original.name} src={row.value}/>
                        ),
                        className: "justify-center",
                        width    : 64,
                        sortable : false
                    },
                    {
                        Header    : "First Name",
                        accessor  : "name",
                        filterable: true,
                        className : "font-bold"
                    },
                    {
                        Header    : "Last Name",
                        accessor  : "lastName",
                        filterable: true,
                        className : "font-bold"
                    },
                    {
                        Header    : "Company",
                        accessor  : "company",
                        filterable: true
                    },
                    {
                        Header    : "Job Title",
                        accessor  : "jobTitle",
                        filterable: true
                    },
                    {
                        Header    : "Email",
                        accessor  : "email",
                        filterable: true
                    },
                    {
                        Header    : "Phone",
                        accessor  : "phone",
                        filterable: true
                    },
                    {
                        Header: "",
                        width : 128,
                        Cell  : row => (
                            <div className="flex items-center">
                                <IconButton
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        props.toggleStarredContact(row.original.id)
                                    }}
                                >
                                    {props.user.starred && props.user.starred.includes(row.original.id) ? (
                                        <Icon>star</Icon>
                                    ) : (
                                        <Icon>star_border</Icon>
                                    )}
                                </IconButton>
                                <IconButton
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        props.removeContact(row.original.id);
                                    }}
                                >
                                    <Icon>delete</Icon>
                                </IconButton>
                            </div>
                        )
                    }
                ]}
                defaultPageSize={10}
                noDataText="No contacts found"
            />
        </FuseAnimate>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getContacts             : Actions.getContacts,
        getUserData             : Actions.getUserData,
        toggleInSelectedContacts: Actions.toggleInSelectedContacts,
        selectAllContacts       : Actions.selectAllContacts,
        deSelectAllContacts     : Actions.deSelectAllContacts,
        openEditContactDialog   : Actions.openEditContactDialog,
        removeContact           : Actions.removeContact,
        toggleStarredContact    : Actions.toggleStarredContact,
        toggleStarredContacts   : Actions.toggleStarredContacts,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactsList));
