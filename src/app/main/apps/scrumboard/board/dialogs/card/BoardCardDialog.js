import React from 'react';
import {Dialog} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import _ from '@lodash';
import {useDispatch, useSelector} from 'react-redux';
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
    const dispatch = useDispatch();
    const card = useSelector(({scrumboardApp}) => scrumboardApp.card, []);
    const board = useSelector(({scrumboardApp}) => scrumboardApp.board, []);

    const classes = useStyles(props);

    return (
        <Dialog
            classes={{
                paper: classNames(classes.paper, "max-w-lg w-full m-24")
            }}
            onClose={ev => dispatch(Actions.closeCardDialog())}
            open={Boolean(card)}
        >
            <BoardCardForm
                card={card}
                list={card ? _.find(board.lists, (_list) => _list.idCards.includes(card.id)) : null}
            />
        </Dialog>
    );
}

export default BoardCardDialog;
