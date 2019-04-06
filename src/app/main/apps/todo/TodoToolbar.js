import React from 'react';
import {Icon, IconButton, MenuItem, FormControl, Select} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from './store/actions';

function TodoToolbar(props)
{
    function handleOrderChange(ev)
    {
        props.changeOrder(ev.target.value);
    }

    return (
        <div className="flex justify-between w-full">
            <div className="flex"/>
            <div className="flex items-center">
                <FormControl className="">
                    <Select
                        value={props.orderBy}
                        onChange={handleOrderChange}
                        displayEmpty
                        name="filter"
                        className=""
                    >
                        <MenuItem value="">
                            <em>Order by</em>
                        </MenuItem>
                        <MenuItem value="startDate">Start Date</MenuItem>
                        <MenuItem value="dueDate">Due Date</MenuItem>
                        <MenuItem value="title">Title</MenuItem>
                    </Select>
                </FormControl>
                <IconButton onClick={props.toggleOrderDescending}>
                    <Icon style={{transform: props.orderDescending ? 'scaleY(-1)' : 'scaleY(1)'}}>
                        sort
                    </Icon>
                </IconButton>
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        changeOrder          : Actions.changeOrder,
        toggleOrderDescending: Actions.toggleOrderDescending
    }, dispatch);
}

function mapStateToProps({todoApp})
{
    return {
        orderBy        : todoApp.todos.orderBy,
        orderDescending: todoApp.todos.orderDescending
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoToolbar));
