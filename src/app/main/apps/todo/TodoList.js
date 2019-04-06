import React from 'react';
import {List, Typography} from '@material-ui/core';
import {FuseUtils, FuseAnimate, FuseAnimateGroup} from '@fuse';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import _ from '@lodash';
import TodoListItem from './TodoListItem';

function TodoList(props)
{
    const arr = _.orderBy(getFilteredArray(props.todos, props.searchText), [props.orderBy], [props.orderDescending ? 'desc' : 'asc']);

    if ( arr.length === 0 )
    {
        return (
            <FuseAnimate delay={100}>
                <div className="flex flex-1 items-center justify-center h-full">
                    <Typography color="textSecondary" variant="h5">
                        There are no todos!
                    </Typography>
                </div>
            </FuseAnimate>
        );
    }

    function getFilteredArray(entities, searchText)
    {
        const arr = Object.keys(entities).map((id) => entities[id]);
        if ( searchText.length === 0 )
        {
            return arr;
        }
        return FuseUtils.filterArrayByString(arr, searchText);
    }

    return (
        <List className="p-0">
            <FuseAnimateGroup
                enter={{
                    animation: "transition.slideUpBigIn"
                }}
            >
                {
                    arr.map((todo) => (
                            <TodoListItem todo={todo} key={todo.id}/>
                        )
                    )
                }
            </FuseAnimateGroup>
        </List>
    );
}

function mapStateToProps({todoApp})
{
    return {
        todos          : todoApp.todos.entities,
        searchText     : todoApp.todos.searchText,
        orderBy        : todoApp.todos.orderBy,
        orderDescending: todoApp.todos.orderDescending
    }
}

export default withRouter(connect(mapStateToProps)(TodoList));
