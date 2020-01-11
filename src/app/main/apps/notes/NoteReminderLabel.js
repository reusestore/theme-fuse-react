import React from 'react';
import {Chip, Icon} from '@material-ui/core';
import clsx from 'clsx';
import moment from 'moment';

function NoteLabel(props)
{
    if ( !props.date )
    {
        return null;
    }

    return (
        <Chip
            icon={<Icon className="text-16">access_time</Icon>}
            label={moment(props.date).format('MMM DD YY, h:mm A')}
            classes={{
                root      : clsx("h-24", props.className),
                label     : "px-12 py-4 text-11",
                deleteIcon: "w-16",
                ...props.classes
            }}
            variant="outlined"
            onDelete={props.onDelete}
        />
    );
}

export default NoteLabel;
