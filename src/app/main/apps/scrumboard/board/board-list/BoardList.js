import Card from '@mui/material/Card';
import { styled, darken } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import clsx from 'clsx';
import { useRef } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import BoardAddCard from '../board-card/BoardAddCard';
import BoardCard from '../board-card/BoardCard';
import BoardListHeader from './BoardListHeader';
import { selectListById } from '../../store/listsSlice';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: darken(
    theme.palette.background.paper,
    theme.palette.mode === 'light' ? 0.02 : 0.25
  ),
  transitionProperty: 'box-shadow',
  transitionDuration: theme.transitions.duration.short,
  transitionTimingFunction: theme.transitions.easing.easeInOut,
}));

function BoardList(props) {
  const { listId, cardIds } = props;
  const contentScrollEl = useRef(null);
  const list = useSelector((state) => selectListById(state, listId));

  function handleCardAdded() {
    contentScrollEl.current.scrollTop = contentScrollEl.current.scrollHeight;
  }

  if (!list) {
    return null;
  }

  return (
    <Draggable draggableId={listId} index={props.index} type="list">
      {(provided, snapshot) => (
        <div ref={provided.innerRef} {...provided.draggableProps}>
          <StyledCard
            className={clsx(
              snapshot.isDragging ? 'shadow-lg' : 'shadow',
              'w-256 sm:w-320 mx-8 sm:mx-12 max-h-full flex flex-col rounded-20'
            )}
            square
          >
            <BoardListHeader
              list={list}
              className="border-b-1"
              handleProps={provided.dragHandleProps}
            />

            <>
              <CardContent
                className="flex flex-col flex-1 flex-auto h-full min-h-0 w-full p-0 overflow-auto"
                ref={contentScrollEl}
              >
                <Droppable droppableId={listId} type="card" direction="vertical">
                  {(_provided) => (
                    <div ref={_provided.innerRef} className="flex flex-col w-full h-full p-16">
                      {cardIds.map((cardId, index) => (
                        <BoardCard key={cardId} cardId={cardId} index={index} list={list} />
                      ))}
                      {_provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </CardContent>
            </>

            <CardActions className="p-0 shrink-0">
              <BoardAddCard listId={listId} onCardAdded={handleCardAdded} />
            </CardActions>
          </StyledCard>
        </div>
      )}
    </Draggable>
  );
}

export default BoardList;
