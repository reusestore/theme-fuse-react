import React, {useEffect, useState} from 'react';
import {List, Typography} from '@material-ui/core';
import {FuseUtils, FuseAnimate, FuseAnimateGroup} from '@fuse';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../store/actions';
import MailListItem from './MailListItem';

function MailList(props)
{
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        props.getMails(props.match.params);
    }, [props.location]);

    useEffect(() => {
        function getFilteredArray()
        {
            const arr = Object.keys(props.mails).map((id) => props.mails[id]);
            if ( props.searchText.length === 0 )
            {
                return arr;
            }
            return FuseUtils.filterArrayByString(arr, props.searchText);
        }

        if ( props.mails )
        {
            setFilteredData(getFilteredArray());
        }
    }, [props.mails, props.searchText]);

    if ( !filteredData )
    {
        return null;
    }

    if ( filteredData.length === 0 )
    {
        return (
            <FuseAnimate delay={100}>
                <div className="flex flex-1 items-center justify-center h-full">
                    <Typography color="textSecondary" variant="h5">
                        There are no messages!
                    </Typography>
                </div>
            </FuseAnimate>
        );
    }

    return (
        <List className="p-0">
            <FuseAnimateGroup
                enter={{
                    animation: "transition.slideUpBigIn"
                }}
            >
                {
                    filteredData.map((mail) => (
                            <MailListItem mail={mail} key={mail.id}/>
                        )
                    )
                }
            </FuseAnimateGroup>
        </List>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getMails: Actions.getMails
    }, dispatch);
}

function mapStateToProps({mailApp})
{
    return {
        mails     : mailApp.mails.entities,
        searchText: mailApp.mails.searchText
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MailList));
