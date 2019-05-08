import {Icon, IconButton, TextField, Checkbox, ListItem} from '@material-ui/core';
import React, {useEffect} from 'react';
import {useForm} from '@fuse/hooks';
import _ from '@lodash';

function CardChecklistItem(props)
{
    const {form, handleChange} = useForm(props.item);

    useEffect(() => {
        if ( !_.isEqual(props.item, form) )
        {
            props.onListItemChange(form);
        }
        // eslint-disable-next-line
    }, [form]);

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
