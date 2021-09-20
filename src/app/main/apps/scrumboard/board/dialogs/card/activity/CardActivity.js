import _ from '@lodash';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import fromUnixTime from 'date-fns/fromUnixTime';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const StyledCommentBubble = styled('div')(({ theme }) => ({
  borderRadius: '5px 20px 20px 5px',
  border: `1px solid ${theme.palette.divider}`,
}));

function CardActivity(props) {
  const user = _.find(props.members, { id: props.item.idMember });

  switch (props.item.type) {
    case 'comment': {
      return (
        <ListItem dense className="px-0">
          <Avatar alt={user.name} src={user.avatar} className="w-32 h-32" />
          <StyledCommentBubble className="flex flex-col mx-16 p-12">
            <div className="flex items-center">
              <Typography>{user.name}</Typography>
              <Typography className="mx-8 text-12" color="textSecondary">
                {formatDistanceToNow(fromUnixTime(props.item.time), { addSuffix: true })}
              </Typography>
            </div>
            <Typography>{props.item.message}</Typography>
          </StyledCommentBubble>
        </ListItem>
      );
    }
    case 'attachment': {
      return (
        <ListItem dense className="px-0">
          <Avatar alt={user.name} src={user.avatar} className="w-32 h-32" />
          <div className="flex items-center mx-16">
            <Typography>{user.name},</Typography>
            <Typography className="mx-8">{props.item.message}</Typography>
            <Typography className="text-12" color="textSecondary">
              {formatDistanceToNow(fromUnixTime(props.item.time), { addSuffix: true })}
            </Typography>
          </div>
        </ListItem>
      );
    }
    default: {
      return null;
    }
  }
}

export default CardActivity;
