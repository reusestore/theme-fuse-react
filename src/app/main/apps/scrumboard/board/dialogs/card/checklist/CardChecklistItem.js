import {Icon, IconButton, TextField, Checkbox, ListItem} from '@material-ui/core';
import React from 'react';
import _ from '@lodash';

function CardChecklistItem(props)
{
    function handleChange(event)
    {
        props.onListItemChange(_.setIn(props.item, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value));
    }

    if ( !props.item )
    {
        return null;
    }

    return (
        <ListItem
            className="px-0"
            key={props.item.id}
            dense
        >
            <Checkbox
                checked={props.item.checked}
                name="checked"
                onChange={handleChange}
                tabIndex={-1}
                disableRipple
            />
            <TextField
                className="flex flex-1 mx-8"
                name="name"
                value={props.item.name}
                onChange={handleChange}
                variant="outlined"
            />
            <IconButton aria-label="Delete" onClick={props.onListItemRemove}>
                <Icon>delete</Icon>
            </IconButton>
        </ListItem>
    );
}

export default CardChecklistItem;
