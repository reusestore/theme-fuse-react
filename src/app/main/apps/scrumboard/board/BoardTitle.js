import React, {useEffect, useState} from 'react';
import {Paper, ClickAwayListener, Icon, IconButton, InputAdornment, TextField, Typography} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import * as Actions from '../store/actions';
import {useForm} from '@fuse/hooks';

function BoardListHeader(props)
{
    const [formOpen, setFormOpen] = useState(false);
    const {form, handleChange, resetForm, setForm} = useForm({
        title: props.board.name
    });
    useEffect(() => {
        if ( !formOpen )
        {
            resetForm();
        }
    }, [formOpen]);

    useEffect(() => {
        if ( form.title !== props.board.name )
        {
            setForm({title: props.board.name});
        }
    }, [props.board.name]);

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
        props.renameBoard(props.board.id, form.title);
        handleCloseForm();
    }

    return (
        <div className="flex items-center min-w-0">
            {formOpen ? (
                <ClickAwayListener onClickAway={() => handleCloseForm()}>
                    <Paper className="p-4">
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
                                                disabled={isFormInvalid()}
                                            >
                                                <Icon>check</Icon>
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </form>
                    </Paper>
                </ClickAwayListener>
            ) : (
                <div className="flex items-center justify-center">
                    {props.board.settings.subscribed && (
                        <Icon className="text-16 mr-8">remove_red_eye</Icon>
                    )}
                    <Typography
                        className="text-16 font-600 cursor-pointer"
                        onClick={() => handleOpenForm()}
                        color="inherit"
                    >
                        {props.board.name}
                    </Typography>
                </div>
            )}
        </div>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        renameBoard: Actions.renameBoard
    }, dispatch);
}

function mapStateToProps({scrumboardApp})
{
    return {
        board: scrumboardApp.board
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardListHeader));
