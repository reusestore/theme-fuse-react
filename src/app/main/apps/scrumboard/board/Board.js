import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import withReducer from 'app/store/withReducer';
import { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import withRouter from '@fuse/core/withRouter';
import { useDeepCompareEffect } from '@fuse/hooks';
import BoardHeader from 'app/main/apps/scrumboard/board/BoardHeader';
import FusePageSimple from '@fuse/core/FusePageSimple/FusePageSimple';
import reducer from '../store';
import { resetBoard, getBoard, selectBoard, reorderCard, reorderList } from '../store/boardSlice';
import BoardAddList from './board-list/BoardAddList';
import BoardList from './board-list/BoardList';
import BoardCardDialog from './dialogs/card/BoardCardDialog';
import BoardSettingsSidebar from './sidebars/settings/BoardSettingsSidebar';
import { getCards } from '../store/cardsSlice';
import { getLists } from '../store/listsSlice';
import { getLabels } from '../store/labelsSlice';

function Board(props) {
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);

  const routeParams = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useDeepCompareEffect(() => {
    dispatch(getBoard(routeParams.boardId));
    dispatch(getCards(routeParams.boardId));
    dispatch(getLists(routeParams.boardId));
    dispatch(getLabels(routeParams.boardId));

    return () => {
      dispatch(resetBoard());
    };
  }, [dispatch, routeParams]);

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped nowhere
    if (!destination) {
      return;
    }

    // did not move anywhere - can bail early
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    // reordering list
    if (result.type === 'list') {
      dispatch(reorderList(result));
    }

    // reordering card
    if (result.type === 'card') {
      console.info(result);
      dispatch(reorderCard(result));
    }
  }

  function toggleSettingsDrawer(state) {
    setSidebarOpen(state === undefined ? !sidebarOpen : state);
  }

  if (!board) {
    return null;
  }

  return (
    <>
      <FusePageSimple
        header={<BoardHeader onSetSidebarOpen={setSidebarOpen} />}
        content={
          <>
            {board?.lists && (
              <div className="flex flex-1 overflow-x-auto overflow-y-hidden">
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="list" type="list" direction="horizontal">
                    {(provided) => (
                      <div ref={provided.innerRef} className="flex py-16 md:py-24 px-8 md:px-12">
                        {board?.lists.map((list, index) => (
                          <BoardList
                            key={list.id}
                            listId={list.id}
                            cardIds={list.cards}
                            index={index}
                          />
                        ))}

                        {provided.placeholder}

                        <BoardAddList />
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
            )}
          </>
        }
        rightSidebarOpen={sidebarOpen}
        rightSidebarContent={<BoardSettingsSidebar />}
        rightSidebarOnClose={() => toggleSettingsDrawer(false)}
        scroll="content"
      />
      <BoardCardDialog />
    </>
  );

  return (
    <>
      <div className="flex flex-1 flex-auto flex-col w-full h-full relative" ref={containerRef}>
        <BoardHeader onToggleSettingsDrawer={toggleSettingsDrawer} />

        <SwipeableDrawer
          anchor="right"
          className="absolute overflow-hidden"
          classes={{
            paper: 'absolute w-320',
          }}
          BackdropProps={{
            classes: {
              root: 'absolute',
            },
          }}
          container={containerRef.current}
          ModalProps={{
            keepMounted: true,
            style: { position: 'absolute' },
          }}
          open={sidebarOpen}
          onOpen={(ev) => {}}
          onClose={() => toggleSettingsDrawer(false)}
          disableSwipeToOpen
        >
          <BoardSettingsSidebar />
        </SwipeableDrawer>
      </div>
    </>
  );
}

export default withReducer('scrumboardApp', reducer)(withRouter(Board));
