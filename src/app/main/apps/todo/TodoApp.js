import React, {useEffect, useRef} from 'react';
import {FusePageCarded} from '@fuse';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom'
import withReducer from 'app/store/withReducer';
import TodoList from './TodoList';
import TodoToolbar from './TodoToolbar';
import TodoHeader from './TodoHeader';
import TodoSidebarHeader from './TodoSidebarHeader';
import TodoSidebarContent from './TodoSidebarContent';
import TodoDialog from './TodoDialog';
import * as Actions from './store/actions';
import reducer from './store/reducers';

function TodoApp(props)
{
    const pageLayout = useRef(null);

    useEffect(() => {
        props.getFilters();
        props.getFolders();
        props.getLabels();
    }, []);

    useEffect(() => {
        props.getTodos(props.match);
    }, [props.match]);

    return (
        <React.Fragment>
            <FusePageCarded
                classes={{
                    root  : "w-full",
                    header: "items-center min-h-72 h-72 sm:h-136 sm:min-h-136"
                }}
                header={
                    <TodoHeader pageLayout={pageLayout}/>
                }
                contentToolbar={
                    <TodoToolbar/>
                }
                content={
                    <TodoList/>
                }
                leftSidebarHeader={
                    <TodoSidebarHeader/>
                }
                leftSidebarContent={
                    <TodoSidebarContent/>
                }
                ref={pageLayout}
                innerScroll
            />
            <TodoDialog/>
        </React.Fragment>
    )
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getTodos  : Actions.getTodos,
        getFilters: Actions.getFilters,
        getFolders: Actions.getFolders,
        getLabels : Actions.getLabels
    }, dispatch);
}

export default withReducer('todoApp', reducer)(withRouter(connect(null, mapDispatchToProps)(TodoApp)));
