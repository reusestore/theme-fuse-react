import React from 'react';
import {Chip} from '@material-ui/core';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

function NoteLabel(props)
{
    if ( !props.labels )
    {
        return null;
    }

    const label = props.labels[props.id];

    if ( !label )
    {
        return null;
    }

    const linkProps = props.linkable ? {
        component: Link,
        onClick  : ev => {
            ev.stopPropagation();
        },
        to       : `/apps/notes/labels/${label.handle}/${label.id}`
    } : {};

    return (
        <Chip
            {...linkProps}
            label={label.name}
            classes={{
                root      : classNames("h-24", props.className),
                label     : "px-6 py-4 text-11",
                deleteIcon: "w-16 ml-0",
                ...props.classes
            }}
            variant="outlined"
            onDelete={props.onDelete}
        />
    );
}

function mapStateToProps({notesApp})
{
    return {
        labels: notesApp.labels.entities
    }
}

export default connect(mapStateToProps)(NoteLabel);
