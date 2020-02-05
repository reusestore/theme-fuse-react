import Avatar from '@material-ui/core/Avatar';
import {green, pink} from '@material-ui/core/colors';
import {makeStyles} from '@material-ui/core/styles';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
}));

export default function IconAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar>
        <FolderIcon />
      </Avatar>
      <Avatar className={classes.pink}>
        <PageviewIcon />
      </Avatar>
      <Avatar className={classes.green}>
        <AssignmentIcon />
      </Avatar>
    </div>
  );
}
