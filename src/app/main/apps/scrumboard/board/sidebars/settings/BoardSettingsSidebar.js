import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import Toolbar from '@mui/material/Toolbar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBoard, copyBoard, changeBoardSettings } from '../../../store/boardSlice';
import FuseSvgIcon from '../../../../../../../@fuse/core/FuseSvgIcon';

function BoardSettingsSidebar(props) {
  const dispatch = useDispatch();
  const board = useSelector(({ scrumboardApp }) => scrumboardApp.board);

  return (
    <div>
      <AppBar position="static">
        <Toolbar className="flex w-full justify-center">Settings</Toolbar>
      </AppBar>

      <List className="py-16" dense>
        <ListItem
          button
          onClick={() =>
            dispatch(changeBoardSettings({ cardCoverImages: !board.settings.cardCoverImages }))
          }
        >
          <ListItemIcon className="min-w-40">
            <FuseSvgIcon>heroicons-outline:photograph</FuseSvgIcon>
          </ListItemIcon>
          <ListItemText primary="Card Cover Images" />
          <ListItemSecondaryAction>
            <Switch
              onChange={() =>
                dispatch(changeBoardSettings({ cardCoverImages: !board.settings.cardCoverImages }))
              }
              checked={board.settings.cardCoverImages}
            />
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem
          button
          onClick={() => dispatch(changeBoardSettings({ subscribed: !board.settings.subscribed }))}
        >
          <ListItemIcon className="min-w-40">
            <FuseSvgIcon>heroicons-outline:eye-off</FuseSvgIcon>
          </ListItemIcon>
          <ListItemText primary="Subscribe" />
          <ListItemSecondaryAction>
            <Switch
              onChange={() =>
                dispatch(changeBoardSettings({ subscribed: !board.settings.subscribed }))
              }
              checked={board.settings.subscribed}
            />
          </ListItemSecondaryAction>
        </ListItem>

        <ListItem button onClick={() => dispatch(copyBoard(board))}>
          <ListItemIcon className="min-w-40">
            <FuseSvgIcon>heroicons-outline:clipboard-copy</FuseSvgIcon>
          </ListItemIcon>
          <ListItemText primary="Copy Board" />
        </ListItem>

        <ListItem button onClick={() => dispatch(deleteBoard(board.id))}>
          <ListItemIcon className="min-w-40">
            <FuseSvgIcon>heroicons-outline:trash</FuseSvgIcon>
          </ListItemIcon>
          <ListItemText primary="Delete Board" />
        </ListItem>
      </List>
    </div>
  );
}

export default BoardSettingsSidebar;
