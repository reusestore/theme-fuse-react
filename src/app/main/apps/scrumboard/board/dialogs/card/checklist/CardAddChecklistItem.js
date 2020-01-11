import React from 'react';
import {Icon, ListItem, TextField, Fab} from '@material-ui/core';
import {useForm} from '@fuse/hooks';
import ChecklistItemModel from 'app/main/apps/scrumboard/model/ChecklistItemModel';

function CardAddChecklistItem(props)
{
    const {form, handleChange, resetForm} = useForm(
        {
            name: ""
        }
    );

    function isFormInValid()
    {
        return form.name === '';
    }

    function handleSubmit(ev)
    {
        ev.preventDefault();
        if ( isFormInValid() )
        {
            return;
        }
        props.onListItemAdd(new ChecklistItemModel(form));
        resetForm();
    }

    return (
        <form onSubmit={handleSubmit}>
            <ListItem
                className="px-0"
                dense
            >
                <span className="w-40"/>
                <TextField
                    className="flex flex-1 mx-8"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="Add an item"
                />
                <Fab
                    className="mx-4"
                    aria-label="Add"
                    size="small"
                    color="secondary"
                    type="submit"
                    disabled={isFormInValid()}
                >
                    <Icon>add</Icon>
                </Fab>
            </ListItem>
        </form>
    );
}

export default CardAddChecklistItem;
