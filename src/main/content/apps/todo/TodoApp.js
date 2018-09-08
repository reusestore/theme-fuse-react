import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import TodoList from './TodoList';
import * as Actions from './store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom'
import {FusePageCarded} from '@fuse';
import TodoToolbar from './TodoToolbar';
import TodoHeader from './TodoHeader';
import TodoSidebarHeader from './TodoSidebarHeader';
import TodoSidebarContent from './TodoSidebarContent';
import TodoDialog from './TodoDialog';
import _ from 'lodash';

const styles = theme => ({
    layoutRoot   : {
        width: '100%'
    },
    layoutContent: {
        overflow     : 'hidden',
        display      : 'flex',
        flexDirection: 'column'
    },
    layoutHeader : {
        alignItems: 'center'
    }
});

class TodoApp extends Component {

    componentDidMount()
    {
        this.props.getData(this.props.match);
    }

    componentDidUpdate(prevProps, prevState)
    {
        if ( !_.isEqual(this.props.location, prevProps.location) )
        {
            this.props.getTodos(this.props.match);
        }
    }

    render()
    {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <FusePageCarded
                    classes={{
                        root   : classes.layoutRoot,
                        content: classes.layoutContent,
                        header : classes.layoutHeader
                    }}
                    header={
                        <TodoHeader pageLayout={() => this.pageLayout}/>
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
                    onRef={instance => {
                        this.pageLayout = instance;
                    }}
                    innerScroll
                />
                <TodoDialog/>
            </React.Fragment>
        )
    };
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getData : Actions.getData,
        getTodos: Actions.getTodos
    }, dispatch);
}

function mapStateToProps({todoApp})
{
    return {}
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoApp)));
