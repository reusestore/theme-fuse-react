import React, {Component} from 'react';
import {Button, Icon, IconButton, AppBar, Toolbar, withStyles, Drawer, Hidden} from '@material-ui/core';
import {Link, withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as Actions from 'main/content/apps/scrumboard/store/actions';
import connect from 'react-redux/es/connect/connect';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import BoardTitle from './BoardTitle';
import BoardList from './BoardList';
import BoardAddList from './BoardAddList';
import BoardCardDialog from './dialogs/card/BoardCardDialog';
import BoardSettingsSidebar from './sidebars/settings/BoardSettingsSidebar';
import classNames from 'classnames';

const styles = theme => ({
    root: {},
    list: {
        width      : 344,
        minWidth   : 344,
        maxWidth   : 344,
        marginRight: 24,
        height     : '100%'
    }
});

class Board extends Component {

    state = {
        settingsDrawerOpen: false
    };

    componentDidMount()
    {
        this.props.getBoard(this.props.match.params.boardId);
    }

    componentWillUnmount()
    {
        this.props.resetBoard();
    }

    onDragEnd = (result) => {
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
            this.props.reorderList(result);
        }

        // reordering card
        if ( result.type === 'card' )
        {
            this.props.reorderCard(result);
        }
    };

    toggleSettingsDrawer = (state) => {
        state = (state === undefined) ? !this.state.settingsDrawerOpen : state;

        this.setState({
            settingsDrawerOpen: state
        });
    };

    render()
    {
        const {classes, board} = this.props;
        if ( !board )
        {
            return '';
        }
        return (
            <div
                className={classNames(classes.root, "flex flex-1 flex-col w-full h-full relative")}
                ref={(root) => {
                    this.root = root;
                }}
            >
                <AppBar position="static" color="primary">
                    <Toolbar className="flex items-center justify-between px-16 md:px-24 h-64 sm:h-96">
                        <Button to="/apps/scrumboard/boards/" component={Link} variant="contained">
                            <Icon className="mr-8">assessment</Icon>
                            Boards
                        </Button>

                        <Hidden xsDown>
                            <div className="flex flex-1 justify-center items-center">
                                <BoardTitle/>
                            </div>
                        </Hidden>

                        <IconButton color="inherit" onClick={() => this.toggleSettingsDrawer(true)}>
                            <Icon>settings</Icon>
                        </IconButton>
                    </Toolbar>
                    <Hidden smUp>
                        <Toolbar className="flex items-center justify-center px-16 h-72">
                            <BoardTitle/>
                        </Toolbar>
                    </Hidden>
                </AppBar>

                <div className="flex flex-1 p-16 md:p-24 overflow-x-auto overflow-y-hidden">

                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Droppable
                            droppableId="list"
                            type="list"
                            direction="horizontal"
                            ignoreContainerClipping={800}
                        >
                            {(provided) => (
                                <div ref={provided.innerRef} className="flex">
                                    {board.lists.map((list, index) => (
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
                    container={this.root}
                    ModalProps={{
                        keepMounted: true
                    }}
                    open={this.state.settingsDrawerOpen}
                    onClose={() => this.toggleSettingsDrawer(false)}
                >
                    <BoardSettingsSidebar/>
                </Drawer>

                <BoardCardDialog/>

            </div>
        );
    }
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

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(Board)));
