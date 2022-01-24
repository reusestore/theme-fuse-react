import _ from '@lodash';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import format from 'date-fns/format';
import fromUnixTime from 'date-fns/fromUnixTime';
import getUnixTime from 'date-fns/getUnixTime';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { openCardDialog } from '../../store/cardSlice';
import { selectCardById } from '../../store/cardsSlice';
import BoardCardLabel from './BoardCardLabel';
import { selectMembers } from '../../store/membersSlice';

const StyledCard = styled(Card)(({ theme }) => ({
  transitionProperty: 'box-shadow',
  transitionDuration: theme.transitions.duration.short,
  transitionTimingFunction: theme.transitions.easing.easeInOut,
}));

function BoardCard(props) {
  const { cardId, index } = props;
  const dispatch = useDispatch();
  const board = useSelector(({ scrumboardApp }) => scrumboardApp.board);
  const card = useSelector((state) => selectCardById(state, cardId));
  const members = useSelector(selectMembers);

  const checkItemsChecked = getCheckItemsChecked(card);
  const checkItems = getCheckItems(card);
  const commentsCount = getCommentsCount(card);

  function handleCardClick(ev, _card) {
    ev.preventDefault();
    dispatch(openCardDialog(_card));
  }

  function getCheckItemsChecked(_card) {
    return _.sum(
      _card.checklists.map((list) => _.sum(list.checkItems.map((x) => (x.checked ? 1 : 0))))
    );
  }

  function getCheckItems(_card) {
    return _.sum(_card.checklists.map((x) => x.checkItems.length));
  }

  function getCommentsCount(_card) {
    return _.sum(_card.activities.map((x) => (x.type === 'comment' ? 1 : 0)));
  }

  return (
    <Draggable draggableId={cardId} index={index} type="card">
      {(provided, snapshot) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <StyledCard
            className={clsx(
              snapshot.isDragging ? 'shadow-lg' : 'shadow',
              'w-full mb-12 rounded-lg cursor-pointer'
            )}
            onClick={(ev) => handleCardClick(ev, card)}
          >
            {board.settings.cardCoverImages && card.attachmentCoverId !== '' && (
              <img
                className="block"
                src={_.find(card.attachments, { id: card.attachmentCoverId }).src}
                alt="card cover"
              />
            )}

            <div className="p-16 pb-0">
              {card.labels.length > 0 && (
                <div className="flex flex-wrap mb-8 -mx-4">
                  {card.labels.map((id) => (
                    <BoardCardLabel id={id} key={id} />
                  ))}
                </div>
              )}

              <Typography className="font-medium mb-12">{card?.title}</Typography>

              {(card.dueDate || checkItems > 0) && (
                <div className="flex items-center mb-12 -mx-4">
                  {card.dueDate && (
                    <div
                      className={clsx(
                        'flex items-center px-8 py-4 mx-4 rounded-16',
                        getUnixTime(new Date()) > card.dueDate
                          ? 'bg-red text-white'
                          : 'bg-green text-white'
                      )}
                    >
                      <Icon className="text-16">access_time</Icon>
                      <span className="mx-4">
                        {format(fromUnixTime(card.dueDate), 'MMM do yy')}
                      </span>
                    </div>
                  )}

                  {checkItems > 0 && (
                    <div
                      className={clsx(
                        'flex items-center px-8 py-4 mx-4 rounded-16',
                        checkItemsChecked === checkItems
                          ? 'bg-green text-white'
                          : 'bg-grey-700 text-white'
                      )}
                    >
                      <Icon className="text-16">check_circle</Icon>
                      <span className="mx-4">{`${checkItemsChecked}/${checkItems}`}</span>
                    </div>
                  )}
                </div>
              )}

              {card.memberIds.length > 0 && (
                <div className="flex flex-wrap mb-12 -mx-4">
                  {card.memberIds.map((id) => {
                    const member = _.find(members, { id });
                    return (
                      <Tooltip title={member.name} key={id}>
                        <Avatar className="mx-4 w-32 h-32" src={member.avatar} />
                      </Tooltip>
                    );
                  })}
                  <div />
                </div>
              )}
            </div>

            <div className="flex justify-between h-48 px-16">
              <div className="flex items-center space-x-12">
                {card.subscribed && (
                  <Icon className="text-18" color="action">
                    remove_red_eye
                  </Icon>
                )}

                {card.description !== '' && (
                  <Icon className="text-18" color="action">
                    description
                  </Icon>
                )}
              </div>

              <div className="flex items-center justify-end space-x-12">
                {card.attachments && (
                  <span className="flex items-center space-x-8">
                    <Icon className="text-18" color="action">
                      attachment
                    </Icon>
                    <Typography className="" color="textSecondary">
                      {card.attachments.length}
                    </Typography>
                  </span>
                )}
                {commentsCount > 0 && (
                  <span className="flex items-center space-x-8">
                    <Icon className="text-18" color="action">
                      comment
                    </Icon>
                    <Typography className="" color="textSecondary">
                      {commentsCount}
                    </Typography>
                  </span>
                )}
              </div>
            </div>
          </StyledCard>
        </div>
      )}
    </Draggable>
  );
}

export default BoardCard;
