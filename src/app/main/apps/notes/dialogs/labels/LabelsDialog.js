import React, {useEffect, useMemo, useState} from 'react';
import {Typography, Dialog, ListItem, Input, IconButton, Icon, List} from '@material-ui/core';
import {useDebounce, useForm} from '@fuse/hooks';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import _ from '@lodash';
import * as Actions from 'app/main/apps/notes/store/actions';
import LabelModel from 'app/main/apps/notes/model/LabelModel';

function LabelsDialog(props)
{
    const [labels, setLabels] = useState(props.labels);
    const {form: newLabelForm, handleChange, resetForm} = useForm(
        {
            name: ""
        }
    );

    const handleOnChange = useDebounce((labels) => {
        props.updateLabels(labels);
    }, 600);


    useEffect(() => {
        if ( !_.isEqual(labels, props.labels) )
        {
            setLabels(props.labels);
        }
    }, [props.labels]);

    useEffect(() => {
        if ( labels && !_.isEqual(labels, props.labels) )
        {
            handleOnChange(labels);
        }
    }, [labels]);

    function handleOnDelete(label)
    {
        setLabels(_.omit(labels, [label.id]));
    }

    function handleLabelChange(event, label)
    {
        const updatedLabel = new LabelModel(_.setIn(label, event.target.name, event.target.value));
        setLabels(_.setIn(labels, updatedLabel.id, updatedLabel));
    }

    function isFormInValid()
    {
        return newLabelForm.name === '';
    }

    function handleSubmit(ev)
    {
        ev.preventDefault();
        if ( isFormInValid() )
        {
            return;
        }
        const newLabel = new LabelModel(newLabelForm);
        setLabels(_.setIn(labels, newLabel.id, newLabel));
        resetForm();
    }

    return (
        <Dialog
            classes={{
                paper: "w-full max-w-320 p-16 m-24 rounded-8"
            }}
            onClose={props.closeLabelsDialog}
            open={props.labelsDialogOpen}
        >
            <Typography className="text-16 mb-8 font-600">Edit Labels</Typography>
            <List dense>
                <form onSubmit={handleSubmit}>
                    <ListItem
                        className="p-0 mb-16"
                        dense
                    >
                        <Icon className="list-item-icon text-16" color="action">add</Icon>
                        <Input
                            className={classNames("flex flex-1 mx-8")}
                            name="name"
                            value={newLabelForm.name}
                            onChange={handleChange}
                            placeholder="Create new label"
                        />
                        <IconButton
                            className="w-32 h-32 mx-4 p-0"
                            aria-label="Delete"
                            disabled={isFormInValid()}
                            type="submit"
                        >
                            <Icon fontSize="small">check</Icon>
                        </IconButton>
                    </ListItem>
                </form>
                {useMemo(() =>
                    Object.entries(labels).map(([key, label]) => (
                        <ListItem
                            className="p-0"
                            key={label.id}
                            dense
                        >
                            <Icon className="list-item-icon text-16" color="action">label</Icon>
                            <Input
                                className={classNames("flex flex-1 mx-8")}
                                name="name"
                                value={label.name}
                                onChange={(event) => handleLabelChange(event, label)}
                                disableUnderline
                            />
                            <IconButton className="w-32 h-32 mx-4 p-0" aria-label="Delete" onClick={(ev) => handleOnDelete(label)}>
                                <Icon fontSize="small">delete</Icon>
                            </IconButton>
                        </ListItem>
                    )), [labels])}
            </List>
        </Dialog>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        closeLabelsDialog: Actions.closeLabelsDialog,
        updateLabels     : Actions.updateLabels
    }, dispatch);
}

function mapStateToProps({notesApp})
{
    return {
        labels          : notesApp.labels.entities,
        labelsDialogOpen: notesApp.labels.labelsDialogOpen
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelsDialog);
