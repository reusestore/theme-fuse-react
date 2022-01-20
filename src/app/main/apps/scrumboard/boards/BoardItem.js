import { Box } from '@mui/system';
import Divider from '@mui/material/Divider';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Card from '@mui/material/Card';
import { AvatarGroup } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { formatDistance } from 'date-fns';

function BoardItem(props) {
  const { board } = props;
  return (
    <Card
      component={Link}
      to={board.id}
      role="button"
      className="flex flex-col items-start w-224 p-24 rounded-lg shadow rounded-lg hover:shadow-xl transition-shadow duration-150 ease-in-out"
    >
      <Box
        sx={{
          backgroundColor: 'secondary.light',
          color: 'secondary.dark',
        }}
        className="flex items-center justify-center p-16 rounded-full"
      >
        <FuseSvgIcon>{board.icon}</FuseSvgIcon>
      </Box>

      <Typography className="mt-20 text-lg font-medium leading-5">{board.title}</Typography>

      <Typography className="mt-2 line-clamp-2 text-secondary">{board.description}</Typography>

      {board.members?.length && (
        <>
          <Divider className="w-48 mt-24 h-2" />
          <div className="flex items-center mt-24 -space-x-6">
            <AvatarGroup total={5}>
              {board.members.map((member, index) => (
                <Avatar key={index} alt="member" src={member.avatar} />
              ))}
            </AvatarGroup>
          </div>
        </>
      )}

      <div className="flex items-center mt-24 text-md font-md">
        <Typography color="text.secondary">Edited:</Typography>
        <Typography className="ml-4">
          {formatDistance(new Date(board.lastActivity), new Date(), { addSuffix: true })}
        </Typography>
      </div>
    </Card>
  );
}

export default BoardItem;
