import React from 'react';
import {Slide, Dialog} from '@material-ui/core';
import {useDebounce} from '@fuse/hooks';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from 'app/main/apps/notes/store/actions';
import NoteForm from 'app/main/apps/notes/note-form/NoteForm';

function Transition(props)
{
    return <Slide direction="up" {...props} />;
}

function NoteDialog(props)
{
    const handleOnChange = useDebounce((note) => {
        props.updateNote(note);
    }, 600);

    function handleOnRemove()
    {
        props.removeNote(props.notes.noteDialogId);
    }

    if ( !props.notes.entities )
    {
        return null;
    }

    return (
        <Dialog
            classes={{
                paper: "w-full m-24 rounded-8"
            }}
            TransitionComponent={Transition}
            onClose={props.closeNoteDialog}
            open={Boolean(props.notes.noteDialogId)}
        >
            <NoteForm
                note={props.notes.entities[props.notes.noteDialogId]}
                onChange={handleOnChange}
                onClose={props.closeNoteDialog}
                onRemove={handleOnRemove}
            />
        </Dialog>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        closeNoteDialog: Actions.closeNoteDialog,
        updateNote     : Actions.updateNote,
        removeNote     : Actions.removeNote
    }, dispatch);
}

function mapStateToProps({notesApp})
{
    return {
        notes: notesApp.notes
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteDialog);
