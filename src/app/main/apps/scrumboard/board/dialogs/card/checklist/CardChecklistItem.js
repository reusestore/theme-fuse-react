import {Icon, IconButton, TextField, Checkbox, ListItem} from '@material-ui/core';
import React, {useEffect, useRef} from 'react';
import {useForm} from '@fuse/hooks';

function CardChecklistItem(props)
{
    const {item, onListItemChange, index} = props;
    const {form, handleChange} = useForm(item);
    const mounted = useRef(false);

    useEffect(() => {
        if ( mounted.current )
        {
            onListItemChange(form, index);
        }
        mounted.current = true;
    }, [form, index, onListItemChange]);

    if ( !form )
    {
        return null;
    }

    return (
        <ListItem
            className="px-0"
            key={form.id}
            dense
        >
            <Checkbox
                checked={form.checked}
                name="checked"
                onChange={handleChange}
                tabIndex={-1}
                disableRipple
            />
            <TextField
                className="flex flex-1 mx-8"
                name="name"
                value={form.name}
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
