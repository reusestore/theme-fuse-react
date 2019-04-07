import React from 'react';
import {Dialog} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {bindActionCreators} from 'redux';
import _ from '@lodash';
import {connect} from 'react-redux';
import * as Actions from 'app/main/apps/scrumboard/store/actions';
import classNames from 'classnames';
import BoardCardForm from './BoardCardForm';

const useStyles = makeStyles(theme => ({
    paper: {
        color: theme.palette.text.primary
    }
}));

function BoardCardDialog(props)
{
    const classes = useStyles(props);

    return (
        <Dialog
            classes={{
                paper: classNames(classes.paper, "max-w-lg w-full m-24")
            }}
            onClose={props.closeCardDialog}
            open={Boolean(props.card)}
        >
            <BoardCardForm
                card={props.card}
                list={props.card ? _.find(props.board.lists, (_list) => _list.idCards.includes(props.card.id)) : null}
            />
        </Dialog>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        closeCardDialog: Actions.closeCardDialog
    }, dispatch);
}

function mapStateToProps({scrumboardApp})
{
    return {
        card : scrumboardApp.card,
        board: scrumboardApp.board
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardCardDialog);
