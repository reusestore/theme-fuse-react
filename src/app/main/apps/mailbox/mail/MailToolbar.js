import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import withRouter from '@fuse/core/withRouter';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { updateMail } from '../store/mailSlice';
import MailActionsMenu from './MailActionsMenu';
import MailLabelsMenu from './MailLabelsMenu';

function MailToolbar(props) {
  const dispatch = useDispatch();
  const mail = useSelector(({ mailboxApp }) => mailboxApp.mail);
  const theme = useTheme();

  if (!mail) {
    return null;
  }

  return (
    <Box
      sx={{ backgroundColor: 'background.default' }}
      className="flex items-center justify-between w-full min-h-64 px-8 border-b"
    >
      <IconButton component={NavLink} className="lg:hidden md:-mx-8" to={-1}>
        <FuseSvgIcon>
          {theme.direction === 'ltr'
            ? 'heroicons-outline:arrow-narrow-left'
            : 'heroicons-outline:arrow-narrow-right'}
        </FuseSvgIcon>
      </IconButton>
      <div className="flex flex-1 justify-end items-center">
        <MailLabelsMenu labels={mail.labels} className="mx-4" />

        <IconButton
          className="mx-4"
          onClick={() => dispatch(updateMail({ important: !mail.important }))}
        >
          <FuseSvgIcon className={clsx(mail.important && 'text-red-600 dark:text-red-500')}>
            heroicons-outline:exclamation-circle
          </FuseSvgIcon>
        </IconButton>

        <IconButton
          className="mx-4"
          onClick={() => dispatch(updateMail({ starred: !mail.starred }))}
        >
          <FuseSvgIcon className={clsx(mail.starred && 'text-orange-500 dark:text-red-400')}>
            heroicons-outline:star
          </FuseSvgIcon>
        </IconButton>

        <MailActionsMenu className="mx-4" />
      </div>
    </Box>
  );
}

export default withRouter(MailToolbar);
