import React from 'react';
import {Redirect} from 'react-router-dom';
import TodoApp from './TodoApp';

export const TodoAppConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/apps/todo/label/:labelHandle/:todoId?',
            component: TodoApp
        },
        {
            path     : '/apps/todo/filter/:filterHandle/:todoId?',
            component: TodoApp
        },
        {
            path     : '/apps/todo/:folderHandle/:todoId?',
            component: TodoApp
        },
        {
            path     : '/apps/todo',
            component: () => <Redirect to="/apps/todo/all"/>
        }
    ]
};
