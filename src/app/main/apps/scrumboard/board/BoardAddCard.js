import React, {useEffect, useState} from 'react';
import {Button, IconButton, Icon, TextField, ClickAwayListener, InputAdornment} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import * as Actions from '../store/actions';
import {useForm} from '@fuse/hooks';

function BoardAddCard(props)
{
    const [formOpen, setFormOpen] = useState(false);
    const {form, handleChange, resetForm} = useForm({
        title: ''
    });

    useEffect(() => {
        if ( !formOpen )
        {
            resetForm();
        }
    }, [formOpen]);

    function handleOpenForm()
    {
        setFormOpen(true);
    }

    function handleCloseForm()
    {
        setFormOpen(false);
    }

    function handleSubmit(ev)
    {
        ev.preventDefault();
        props.newCard(props.board.id, props.listId, form.title).then(() => {
            props.onCardAdded();
        });
        handleCloseForm();
    }

    function isFormInvalid()
    {
        return form.title.length === 0;
    }

    return (
        <div className="w-full border-t-1">
            {formOpen ? (
                <ClickAwayListener onClickAway={handleCloseForm}>
                    <form className="p-16" onSubmit={handleSubmit}>

                        <TextField
                            className="mb-16"
                            required
                            fullWidth
                            variant="outlined"
                            label="Card title"
                            autoFocus
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleCloseForm}>
                                            <Icon className="text-18">close</Icon>
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />

                        <div className="flex justify-between items-center">
                            <Button
                                variant="contained"
                                color="secondary"
                                type="submit"
                                disabled={isFormInvalid()}
                            >
                                Add
                            </Button>

                        </div>
                    </form>
                </ClickAwayListener>
            ) : (
                <Button
                    onClick={handleOpenForm}
                    classes={{
                        root : "normal-case font-600 w-full rounded-none h-48",
                        label: "justify-start"
                    }}
                >
                    <Icon className="text-20 mr-8">add</Icon>
                    Add a card
                </Button>
            )}
        </div>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        newCard: Actions.newCard
    }, dispatch);
}

function mapStateToProps({scrumboardApp})
{
    return {
        board: scrumboardApp.board
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardAddCard));
