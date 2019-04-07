import React, {useEffect, useState} from 'react';
import {ClickAwayListener, Icon, IconButton, InputAdornment, ListItemIcon, ListItemText, Menu, MenuItem, TextField, Typography} from '@material-ui/core';
import {useForm} from '@fuse/hooks';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import * as Actions from '../store/actions';

function BoardListHeader(props)
{
    const [anchorEl, setAnchorEl] = useState(null);
    const [formOpen, setFormOpen] = useState(false);
    const {form, handleChange, resetForm, setForm} = useForm({
        title: props.list.name
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
        if ( form.title !== props.list.name )
        {
            setForm({title: props.list.name});
        }
    }, [props.list.name]);

    function handleMenuClick(event)
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
        return form.title !== '';
    }

    function handleSubmit(ev)
    {
        ev.preventDefault();
        if ( !isFormInvalid() )
        {
            return;
        }
        props.renameList(props.board.id, props.list.id, form.title);
        handleCloseForm();
    }

    return (
        <div {...props.handleProps}>
            <div className="flex items-center justify-between h-64 pl-16 pr-8">
                <div className="flex items-center min-w-0">
                    {formOpen ? (
                        <ClickAwayListener onClickAway={() => handleCloseForm()}>
                            <form className="flex w-full" onSubmit={handleSubmit}>
                                <TextField
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    variant="outlined"
                                    margin="none"
                                    autoFocus
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    type="submit"
                                                    disabled={!isFormInvalid()}
                                                >
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
                            {props.list.name}
                        </Typography>
                    )}

                </div>
                <div className="">
                    <IconButton
                        aria-owns={anchorEl ? 'actions-menu' : null}
                        aria-haspopup="true"
                        onClick={handleMenuClick}
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
                        <MenuItem onClick={() => {
                            props.removeList(props.board.id, props.list.id);
                        }}>
                            <ListItemIcon>
                                <Icon>delete</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Remove List"/>
                        </MenuItem>
                        <MenuItem onClick={() => handleOpenForm()}>
                            <ListItemIcon>
                                <Icon>edit</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Rename List"/>
                        </MenuItem>
                    </Menu>
                </div>
            </div>

        </div>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        renameList: Actions.renameList,
        removeList: Actions.removeList
    }, dispatch);
}

function mapStateToProps({scrumboardApp})
{
    return {
        board: scrumboardApp.board
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardListHeader));
