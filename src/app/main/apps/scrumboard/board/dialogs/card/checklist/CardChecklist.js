import React, {useEffect, useState} from 'react';
import {Icon, Typography, Menu, MenuItem, LinearProgress, List, ListItemText, ListItemIcon, IconButton, TextField, InputAdornment, ClickAwayListener} from '@material-ui/core';
import CardChecklistItem from './CardChecklistItem';
import CardAddChecklistItem from './CardAddChecklistItem';
import _ from '@lodash';
import {useForm} from '@fuse/hooks';

function CardChecklist(props)
{
    const [anchorEl, setAnchorEl] = useState(null);
    const [formOpen, setFormOpen] = useState(false);
    const [checklist, setChecklist] = useState(props.checklist);
    const {form, handleChange, resetForm, setForm} = useForm({
        title: props.checklist.name
    });

    useEffect(() => {
        if ( !formOpen )
        {
            resetForm();
        }
        if ( anchorEl )
        {
            setAnchorEl(null);
        }

    }, [formOpen]);

    useEffect(() => {
        if ( form.title !== props.checklist.name )
        {
            setForm({title: props.checklist.name});
        }
    }, [props.checklist.name]);

    function handleMenuOpen(event)
    {
        setAnchorEl(event.currentTarget);
    }

    function handleMenuClose()
    {
        setAnchorEl(null);
    }

    function handleOpenForm()
    {
        setFormOpen(true);
    }

    function handleCloseForm()
    {
        setFormOpen(false);
    }

    function isFormInvalid()
    {
        return form.title === '';
    }

    function handleSubmit(ev)
    {
        ev.preventDefault();
        if ( isFormInvalid() )
        {
            return;
        }
        setChecklist(_.setIn(checklist, 'name', form.title));
        handleCloseForm();
    }

    useEffect(() => {
        if ( !_.isEqual(props.checklist, checklist) )
        {
            props.onCheckListChange(checklist);
        }
    }, [checklist]);

    function handleListItemChange(item)
    {
        const index = checklist.checkItems.findIndex((x) => x.id === item.id);
        setChecklist(_.setIn(checklist, `checkItems[${index}]`, item));
    }

    function handleListItemRemove(id)
    {
        setChecklist(_.setIn(checklist, 'checkItems', _.reject(checklist.checkItems, {id})));
    }

    function checkItemsChecked()
    {
        return _.sum(checklist.checkItems.map(x => (x.checked ? 1 : 0)));
    }

    function handleListItemAdd(item)
    {
        setChecklist(_.setIn(checklist, 'checkItems', [...checklist.checkItems, item]));
    }

    if ( !checklist )
    {
        return null;
    }
    return (
        <div className="mb-24">

            <div className="flex items-center justify-between mt-16 mb-12">
                <div className="flex items-center">
                    <Icon className="text-20 mr-8">check_box</Icon>
                    {formOpen ? (
                        <ClickAwayListener onClickAway={() => handleCloseForm()}>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    value={form.title}
                                    name="title"
                                    onChange={handleChange}
                                    variant="outlined"
                                    margin="dense"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton type="submit" disabled={isFormInvalid()}>
                                                    <Icon>check</Icon>
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </form>
                        </ClickAwayListener>
                    ) : (
                        <Typography
                            className="text-16 font-600 cursor-pointer"
                            onClick={() => handleOpenForm()}
                        >
                            {checklist.name}
                        </Typography>
                    )}
                </div>
                <div className="">
                    <IconButton
                        aria-owns={anchorEl ? 'actions-menu' : null}
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        variant="outlined"
                        size="small"
                    >
                        <Icon className="text-20">more_vert</Icon>
                    </IconButton>
                    <Menu
                        id="actions-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={props.onRemoveCheckList}>
                            <ListItemIcon className="min-w-40">
                                <Icon>delete</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Remove Checklist"/>
                        </MenuItem>
                        <MenuItem onClick={() => handleOpenForm()}>
                            <ListItemIcon className="min-w-40">
                                <Icon>edit</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Rename Checklist"/>
                        </MenuItem>
                    </Menu>
                </div>
            </div>

            <div className="">
                <div className="flex items-center pl-16">
                    <Typography className="flex font-600 mr-12">
                        {checkItemsChecked() + ' / ' + checklist.checkItems.length}
                    </Typography>
                    <LinearProgress
                        className="flex flex-1"
                        variant="determinate"
                        color="secondary"
                        value={100 * checkItemsChecked() / checklist.checkItems.length}
                    />
                </div>
                <List className="">
                    {checklist.checkItems.map(checkItem => (
                        <CardChecklistItem
                            item={checkItem}
                            key={checkItem.id}
                            onListItemChange={handleListItemChange}
                            onListItemRemove={() => handleListItemRemove(checkItem.id)}
                        />
                    ))}
                    <CardAddChecklistItem
                        onListItemAdd={(item) => handleListItemAdd(item)}
                    />
                </List>
            </div>
        </div>
    )
}

export default CardChecklist;
