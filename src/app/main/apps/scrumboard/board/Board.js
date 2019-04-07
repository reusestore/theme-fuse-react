import React, {useEffect, useRef, useState} from 'react';
import {Button, Icon, IconButton, AppBar, Toolbar, Drawer, Hidden} from '@material-ui/core';
import {Link, withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import withReducer from 'app/store/withReducer';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import classNames from 'classnames';
import BoardTitle from './BoardTitle';
import BoardList from './BoardList';
import BoardAddList from './BoardAddList';
import BoardCardDialog from './dialogs/card/BoardCardDialog';
import BoardSettingsSidebar from './sidebars/settings/BoardSettingsSidebar';

function Board(props)
{
    const containerRef = useRef(null);
    const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(false);

    useEffect(() => {
        props.getBoard(props.match.params.boardId);
        return () => {
            props.resetBoard();
        }
    }, []);

    function onDragEnd(result)
    {
        const {source, destination} = result;

        // dropped nowhere
        if ( !destination )
        {
            return;
        }

        // did not move anywhere - can bail early
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        )
        {
            return;
        }

        // reordering list
        if ( result.type === 'list' )
        {
            props.reorderList(result);
        }

        // reordering card
        if ( result.type === 'card' )
        {
            props.reorderCard(result);
        }
    }

    function toggleSettingsDrawer(state)
    {
        setSettingsDrawerOpen((state === undefined) ? !settingsDrawerOpen : state);
    }

    if ( !props.board )
    {
        return null;
    }

    return (
        <div
            className="flex flex-1 flex-col w-full h-full relative"
            ref={containerRef}
        >
            <AppBar position="static" color="primary">
                <Toolbar className="flex items-center justify-between px-4 sm:px-24 h-64 sm:h-96 container">
                    <Hidden xsDown>
                        <Button to="/apps/scrumboard/boards/" component={Link} variant="contained">
                            <Icon className="mr-8">assessment</Icon>
                            Boards
                        </Button>
                    </Hidden>

                    <Hidden smUp>
                        <IconButton color="inherit" to="/apps/scrumboard/boards/" component={Link}>
                            <Icon>assessment</Icon>
                        </IconButton>
                    </Hidden>

                    <div className="flex flex-1 justify-center items-center">
                        <BoardTitle/>
                    </div>

                    <IconButton color="inherit" onClick={() => toggleSettingsDrawer(true)}>
                        <Icon>settings</Icon>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <div className={classNames("flex flex-1 overflow-x-auto overflow-y-hidden")}>

                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable
                        droppableId="list"
                        type="list"
                        direction="horizontal"
                    >
                        {(provided) => (
                            <div ref={provided.innerRef} className="flex container p-16 md:p-24">
                                {props.board.lists.map((list, index) => (
                                    <BoardList
                                        key={list.id}
                                        list={list}
                                        index={index}
                                    />
                                ))}
                                {provided.placeholder}

                                <BoardAddList/>
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>

            <Drawer
                anchor="right"
                className="absolute overflow-hidden"
                classes={{
                    paper: "absolute w-320"
                }}
                BackdropProps={{
                    classes: {
                        root: "absolute"
                    }
                }}
                container={containerRef.current}
                ModalProps={{
                    keepMounted: true
                }}
                open={settingsDrawerOpen}
                onClose={() => toggleSettingsDrawer(false)}
            >
                <BoardSettingsSidebar/>
            </Drawer>

            <BoardCardDialog/>

        </div>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getBoard   : Actions.getBoard,
        resetBoard : Actions.resetBoard,
        reorderList: Actions.reorderList,
        reorderCard: Actions.reorderCard
    }, dispatch);
}

function mapStateToProps({scrumboardApp})
{
    return {
        board: scrumboardApp.board
    }
}

export default withReducer('scrumboardApp', reducer)(withRouter(connect(mapStateToProps, mapDispatchToProps)(Board)));
