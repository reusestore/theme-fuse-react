import React from 'react';
import {Redirect} from 'react-router-dom';
import Boards from './boards/Boards';
import Board from './board/Board';

export const ScrumboardAppConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/apps/scrumboard/boards/:boardId/:boardUri?',
            component: Board
        },
        {
            path     : '/apps/scrumboard/boards',
            component: Boards
        },
        {
            path     : '/apps/scrumboard',
            component: () => <Redirect to="/apps/scrumboard/boards"/>
        }
    ]
};
